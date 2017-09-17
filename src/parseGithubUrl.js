const { URL } = require('url');
const generateGithubUrl = require('./generateGithubUrl');

const fullPath = new URL(generateGithubUrl());

const pathToArray = fullPath.pathname.split('/');

module.exports = {
  owner: pathToArray[1],
  repo: pathToArray[2].split('.')[0]
};
