console.log('Starting notes.js')
const fs = require('fs');

const addNote = (title, body) => {
  let notes = [];
  const note = {
    title,
    body
  };

  // Load the File
  try {
    const notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch (e) { }


  let duplicateNotes = notes.filter((note) => {
    // return true title is keeped in duplicateNotes array, because are duplicates
    return note.title === title;
  });

  // Save the File
  // if the lenght is not zero, is a duplicate, not save the note
  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  }
};

const getAll = () => {
  console.log('Getting all notes');
}

const getNote = (title) => {
  console.log('Show note title ', title)
}

const removeNote = (title) => {
  console.log('The note title was removed', title
  )
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}