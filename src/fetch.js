const github = require('./github');
const parseGithubUrl = require('./parseGithubUrl');

const fetch = id => {
  return github.pullRequests.get({
    owner: parseGithubUrl.owner,
    repo: parseGithubUrl.repo,
    number: id
  });
};

module.exports = fetch;
