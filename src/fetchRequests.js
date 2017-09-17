const GitHubApi = require('github');
const parseGithubUrl = require('./parseGithubUrl');

const fetchRequests = () => {
  const results = [];

  const github = new GitHubApi({
    Promise: Promise
  });

  return github.pullRequests.getAll({
    owner: parseGithubUrl.owner,
    repo: parseGithubUrl.repo
  });
};

module.exports = fetchRequests;
