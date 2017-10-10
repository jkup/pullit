#!/usr/bin/env node
const Pullit = require('../src/index');
const pullit = new Pullit();
const prId = parseInt(process.argv[2], 10);

if (!isNaN(prId)) {
  pullit.fetch(prId);
} else {
  pullit.display();
}
