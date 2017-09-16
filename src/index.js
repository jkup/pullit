const { exec } = require('child_process');

exec('git config --get remote.origin.url', (err, githubUrl) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(githubUrl);
});
