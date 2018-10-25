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
    let note = notes.addNote(argv.title, argv.body);
    if (note) {
      return console.log('Note created! ', note.title, note.body);
    } else {
      return console.log('Note title is a duplicate!');
    }
  case 'read':
    return notes.getNote(argv.title);

  case 'list':
    return notes.getAllNotes();

  case 'remove':
    // console.log(`Title ${argv.title} was removed!`);
    const noteRemoved = notes.removeNote(argv.title);
    if (noteRemoved) {
      return console.log('Note was removed')
    } else {
      return console.log('Note was not removed')
    }

  default:
    return console.log('Command not found!')
}


