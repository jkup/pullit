const GitHub = require('./github');

const pullit = (command, id) => {
  const github = new GitHub();

  if (command === 'fetch') {
    github.fetch(id);
  } else {
    github.display();
  }
};

module.exports = pullit;
