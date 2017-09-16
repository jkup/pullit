const index = require('../index');
console.log(index);

test('index prints github url', () => {
  expect(index()).toBe('https://github.com/jkup/pullit.git');
});
