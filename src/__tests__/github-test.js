const proxyquire = require('proxyquire');

const GitHub = proxyquire('../github.js', {
  child_process: {
    execSync: () => {
      return 'foobar';
    }
  }
});

test('index prints github url', () => {
  const github = new GitHub();

  expect(github.generateGithubUrl()).toBe('https://github.com/jkup/pullit.git');
});
