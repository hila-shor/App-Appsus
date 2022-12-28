const { useState, useEffect } = React;

import { NoteService } from '../services/note.service.js';
import { AppAside } from '../cmps/app-aside.jsx';
import { AppBoard } from '../cmps/app-board.jsx';
import { AppSearch } from '../cmps/app-search.jsx';

export function NoteIndex() {
  //  keeps currUser for note object( note= { owner:'Andrey' }) and for user greetings
  const [user, changeUser] = useState('Andrey');

  // notes
  const [notes, updateNotes] = useState([]);

  //load notes
  useEffect(() => {
    loadNotes();
  }, []);

  function loadNotes() {
    NoteService.query().then((notes) => updateNotes(notes));
  }

  // CRUD
  function deleteNote(noteId) {
    console.log('deleting note: ', noteId);
    NoteService.remove(noteId).then(() => {
      const newNotes = notes.filter((note) => note.id !== noteId);
      updateNotes(newNotes);
    });
  }

  if (!notes) <div>Loading</div>;
  // console.log(notes);

  return (
    <div className='app-container'>
      <AppAside />
      <div className='app-main'>
        <AppSearch />
        <AppBoard notes={notes} deleteNote={deleteNote} />
      </div>
    </div>
  );
}
