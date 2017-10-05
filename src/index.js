const GitHubApi = require('github');
const Menu = require('terminal-menu');
const {
  execSync
} = require('child_process');
const parse = require('parse-github-repo-url');

class Pullit {
  constructor() {
    this.init();
    this.hostname = 'api.github.com';
    this.github = new GitHubApi({
      hostname: this.hostname
    });
  }

  init() {
    const url = execSync(`git config --get remote.origin.url`, {
      encoding: 'utf8'
    }).trim();

    if (url.includes('github.com')) {
      return this.parsedGithubUrl(url);
    } else {
      return this.parsedGithubEnterpriseUrl(url);
    }
  }

  parsedGithubUrl(url) {
    const parsedUrl = parse(url);

    (this.owner = parsedUrl[0]), (this.repo = parsedUrl[1]);
  }

  parsedGithubEnterpriseUrl(url) {
    const splitUrl = url.split(':');
    const splitRepo = splitUrl.split('/');
    (this.owner = splitRepo[0]), (this.repo = splitRepo[1]), (this.hostname = splitUrl[0]);
  }

  fetch(id) {
    return this.github.pullRequests
      .get({
        owner: this.owner,
        repo: this.repo,
        number: id
      })
      .then(res => {
        const branch = res.data.head.ref;
        execSync(
          `git fetch origin pull/${id}/head:${branch} && git checkout ${branch}`
        );
      });
  }

  fetchRequests() {
    return this.github.pullRequests.getAll({
      owner: this.owner,
      repo: this.repo
    });
  }

  display() {
    this.fetchRequests().then(results => {
      const menu = Menu({
        width: 100,
        x: 4,
        y: 2
      });
      menu.reset();
      menu.write('Currently open pull requests:\n');
      menu.write('-------------------------\n');

      results.data.forEach(element => {
        menu.add(`${element.number} - ${element.title}`);
      });

      menu.add(`Exit`);

      menu.on('select', label => {
        menu.close();
        this.fetch(label.split(' ')[0]);
      });
      process.stdin.pipe(menu.createStream()).pipe(process.stdout);

      process.stdin.setRawMode(true);
      menu.on('close', () => {
        process.stdin.setRawMode(false);
        process.stdin.end();
      });
    });
  }
}

module.exports = Pullit;