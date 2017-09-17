const GitHubApi = require('github');
const parseGithubUrl = require('./parseGithubUrl');

const github = new GitHubApi({
  debug: true,
  Promise: Promise
});

module.exports = github;
