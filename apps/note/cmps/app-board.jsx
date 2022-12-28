import { Note } from './note.jsx';

export function AppBoard({ notes }) {
  console.log('board', notes);
  return (
    <section className='note-board'>
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </section>
  );
}
