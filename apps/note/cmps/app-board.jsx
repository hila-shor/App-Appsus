import { Note } from './note.jsx';
import { NoteService } from '../services/note.service.js';

export function AppBoard({ notes, deleteNote }) {
  console.log('board', notes);

  return (
    <section className='note-board'>
      {notes.map((note) => (
        <Note
          key={note.id}
          type={note.type}
          note={note}
          deleteNote={deleteNote}
        />
      ))}
    </section>
  );
}
