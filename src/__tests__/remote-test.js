jest.mock('child_process');
const child_process = require('child_process');
const yargsLib = require('yargs')

const Pullit = require('../index');

describe('pullit [--remote <remote>]', () => {
  const remotes = ['origin', 'remote'];

  beforeAll(() => {
    remotes.forEach(remote => {
      const command = `git config --get remote.${remote}.url`;
      const returnValue = `git@github.com:user/${remote}-repo.git`;

      child_process.__registerCommand(command, returnValue);
    })
  });

  afterAll(() => {
    remotes.forEach(remote => {
      child_process.__deregisterCommand(command);
    })
  });

  afterEach(() => {
    yargsLib.__clearArgs();
  });

  test('pullit should have the remote origin without the --remote flag', () => {
    const _pullit = new Pullit();

    expect(_pullit.remote).toBe('origin');
  });

  test('pullit should have the remote upstream when the --remote flag is upstream', () => {
    yargsLib.__setArg('remote', 'upstream');
    const _pullit = new Pullit();

    expect(_pullit.remote).toBe('upstream');
  });
})
