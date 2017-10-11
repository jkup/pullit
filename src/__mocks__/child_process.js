const __commands = {};

function __registerCommand(command, returnValue) {
  __commands[command] = returnValue;
}

function __deregisterCommand(command, returnValue) {
  delete __commands[command];
}

function execSync(...args) {
  const [command] = args
  if (__commands.hasOwnProperty(command)) {
    return __commands[command];
  }

  return '';
}

module.exports ={
  execSync,
  __registerCommand,
  __deregisterCommand
};
