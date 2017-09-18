const Pullit = require('../index');
const pullit = new Pullit();

test('initial test', () => {
  expect(pullit).toBeInstanceOf(Pullit);
});
