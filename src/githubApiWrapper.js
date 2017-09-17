const GitHubApi = require('github');
const parseGithubUrl = require('./parseGithubUrl');

const github = new GitHubApi({
  debug: true
});

github.pullRequests.getAll(
  {
    owner: parseGithubUrl.owner,
    repo: parseGithubUrl.repo
  },
  (err, res) => {
    console.log(err);
    console.log(res);
  }
);
