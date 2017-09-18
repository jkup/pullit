const Table = require('cli-table2');
const GitHubApi = require('github');
const { execSync } = require('child_process');
const parse = require('parse-github-repo-url');

class GitHub {
  constructor() {
    this.github = new GitHubApi({});
    this.init();
  }

  init() {
    const fullPath = parse(this.generateGithubUrl());

    (this.owner = fullPath[0]), (this.repo = fullPath[1]);
  }

  generateGithubUrl() {
    return execSync(`git config --get remote.origin.url`, {
      encoding: 'utf8'
    }).trim();
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
    const getResults = this.fetchRequests();

    const table = new Table({
      head: ['ID', 'Title']
    });

    getResults.then(results => {
      results.data.forEach(element => {
        table.push([element.number, element.title]);
      });

      console.log(table.toString());
    });
  }
}

module.exports = GitHub;
