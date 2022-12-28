const { useState, useEffect } = React;

import { NoteService } from '../services/note.service.js';

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

  if (!notes) <div>Loading</div>;
  console.log(notes);

  return (
    <div className='app-container'>
      <div className='app-aside'></div>
      <div className='app-main'>
        <div className='search'>Search</div>
        <div className='board'></div>
      </div>
    </div>
  );
}
