const display = require('./display');
const fetch = require('./fetch');

const pullit = (command, id) => {
  console.log(command);
  if (command === 'fetch') {
    console.log(fetch(id));
  } else {
    display();
  }
};

module.exports = pullit;
