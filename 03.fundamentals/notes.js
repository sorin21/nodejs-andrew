const fs = require('fs');

fetchNotes = () => {
  // Load the File
  let notes;
  try {
    const notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch (e) {
    // if no notes
    notes = [];
  }
  return notes;
};

saveNotes = (notes) => {
  // Save the File
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
  let notes = fetchNotes();
  const note = {
    title,
    body
  };

  let duplicateNotes = notes.filter((note) => {
    // return true title is keeped in duplicateNotes array, because are duplicates
    return note.title === title;
  });

  // if the lenght is not zero, is a duplicate, not save the note
  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return notes[notes.length - 1];
  }
};

const getAllNotes = () => {
  return fetchNotes();
}

const getNote = (title) => {
  let notes = fetchNotes();

  let note = notes.filter((note) => {
    return note.title === title;
  });
  if (note.length !== 0) {
    return note[0];
  }
}

const removeNote = (title) => {
  // fetch notes
  let notes = fetchNotes();
  // filter notes 
  // removing the one with title of argumment
  let filterNotes = notes.filter((note) => {
    return note.title !== title;
  });
  saveNotes(filterNotes);
  // not equal, will return true, so note was removed
  return notes.length !== filterNotes.length;
}

const logNote = (note) => {
  debugger;
  console.log('-----');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}

module.exports = {
  addNote,
  getAllNotes,
  getNote,
  removeNote,
  logNote
}

