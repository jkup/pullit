const github = require('./github');
const parseGithubUrl = require('./parseGithubUrl');
const { execSync } = require('child_process');

const generateGithubUrl = () => {
  return execSync(`git fetch origin pull/${id}/head:`, {
    encoding: 'utf8'
  }).trim();
};

const fetch = id => {
  return github.pullRequests
    .get({
      owner: parseGithubUrl.owner,
      repo: parseGithubUrl.repo,
      number: id
    })
    .then(res => {
      const branch = res.data.head.ref;
      execSync(
        `git fetch origin pull/${id}/head:${branch} && git checkout ${branch}`
      );
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = fetch;
