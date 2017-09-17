const GitHubApi = require('github');

const github = new GitHubApi({
  debug: true
});

github.pullRequests.getAll(
  {
    owner: 'facebook',
    repo: 'react'
  },
  (err, res) => {
    console.log(err);
    console.log(res);
  }
);
