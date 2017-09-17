const printGithubUrl = require('../printGithubUrl');

test('index prints github url', () => {
  expect(printGithubUrl()).toBe('https://github.com/jkup/pullit.git');
});
