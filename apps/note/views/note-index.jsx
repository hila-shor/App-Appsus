const { useState, useEffect } = React;

import { NoteService } from '../services/note.service.js';
import { AppAside } from '../cmps/app-aside.jsx';
import { AppBoard } from '../cmps/app-board.jsx';
import { AppSearch } from '../cmps/app-search.jsx';
import { Modal } from '../../modal.jsx';

export function NoteIndex() {
  console.log('rendering note app');
  //  keeps currUser for note object( note= { owner:'Andrey' }) and for user greetings
  const [user, setUser] = useState('Andrey');

  // notes
  const [notes, setNotes] = useState([]);
  // edit/ new note modal
  const [modal, toShow] = useState(false);

  //load notes
  useEffect(() => {
    loadNotes();
  }, []);
  function loadNotes() {
    NoteService.query().then((notes) => setNotes(notes));
  }

  //edit notes
  // useEffect(() => {
  //   console.log('useEffect on modal');
  // }, [modal]);

  // CRUD
  function removeNote(noteId) {
    console.log('deleting note: ', noteId);
    NoteService.remove(noteId).then(() => {
      const newNotes = notes.filter((note) => note.id !== noteId);
      setNotes(newNotes);
    });
  }

  function editNote(noteId) {
    console.log('editing note: ', noteId);
    toShow(true);
  }

  if (!notes) <div>Loading</div>;
  // console.log(notes);

  return (
    <div className='app-container'>
      {modal && <Modal />}

      <AppAside />
      <div className='app-main'>
        <AppSearch />
        <AppBoard notes={notes} removeNote={removeNote} editNote={editNote} />
      </div>
    </div>
  );
}
