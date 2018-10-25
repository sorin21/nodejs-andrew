console.log('Starting app...');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');
const argv = yargs.argv;

const command = process.argv[2];
console.log('Command: ', command);
console.log('Process: ', process.argv);
console.log('Yargs:  ', argv);

switch (command) {
  case 'add':
    return notes.addNote(argv.title, argv.body);

  case 'read':
    return notes.getNote(argv.title);

  case 'list':
    return notes.getAll();

  case 'remove':
    return notes.removeNote(argv.title);

  default:
    return console.log('Command not found!')
}


