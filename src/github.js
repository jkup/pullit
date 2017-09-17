const GitHubApi = require('github');
const parseGithubUrl = require('./parseGithubUrl');

const github = new GitHubApi({
  debug: false,
  Promise: Promise
});

module.exports = github;
