const { execSync } = require('child_process');

const generateGithubUrl = () => {
  return execSync('git config --get remote.origin.url', {
    encoding: 'utf8'
  }).trim();
};

module.exports = generateGithubUrl;
