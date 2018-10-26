const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');
const argv = yargs.argv;

const command = process.argv[2];
// console.log('Command: ', command);
// console.log('Process: ', process.argv);
// console.log('Yargs:  ', argv);

switch (command) {
  case 'add':
    let note = notes.addNote(argv.title, argv.body);
    if (note) {
      console.log('Note was added!')
      return notes.logNote(note);
    } else {
      return console.log('Note title is a duplicate!');
    }

  case 'read':
    let readNote = notes.getNote(argv.title);
    if (readNote) {
      console.log('Note was found!')
      return notes.logNote(readNote);
    } else {
      return console.log('This note does not exist!');
    }

  case 'list':
    const allNotes = notes.getAllNotes();
    allNotes.map((note) => {
      return notes.logNote(note);
    })

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


