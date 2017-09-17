#!/usr/bin/env node
const pullit = require('../src/index');
const command = process.argv[2];
const id = process.argv[3];
pullit(command, id);
