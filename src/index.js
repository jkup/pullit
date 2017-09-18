const GitHub = require('./github');

const pullit = (command, id) => {
  const github = new GitHub();

  switch (command) {
    case 'fetch':
      github.fetch(id);
      break;
    default:
      github.display();
      break;
  }
};

module.exports = pullit;
