const parse = require('parse-github-repo-url');
const generateGithubUrl = require('./generateGithubUrl');

const fullPath = parse(generateGithubUrl());

module.exports = {
  owner: fullPath[0],
  repo: fullPath[1]
};
