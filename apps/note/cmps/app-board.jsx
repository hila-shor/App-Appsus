import { NotePreview } from './note-preview.jsx';
import { NoteService } from '../services/note.service.js';

export function AppBoard({ notes, removeNote, editNote }) {
  // console.log('board', notes);

  return (
    <section className='note-board'>
      {notes.map((note) => (
        <NotePreview
          key={note.id}
          type={note.type}
          note={note}
          removeNote={removeNote}
          editNote={editNote}
        />
      ))}
    </section>
  );
}
