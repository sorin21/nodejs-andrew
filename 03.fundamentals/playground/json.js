// const obj = {
//   name: 'sorin',
// };

// const stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj);

const fs = require('fs');

var originalNote = {
  title: "Some title",
  body: "Some body"
};

const noteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', noteString);

const readFile = fs.readFileSync('notes.json');
const note = JSON.parse(readFile);
console.log(typeof note);
console.log(note.title);
