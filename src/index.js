const display = require('./display');
const fetch = require('./fetch');

const pullit = (command, id) => {
  if (command === 'fetch') {
    fetch(id);
  } else {
    display();
  }
};

module.exports = pullit;
