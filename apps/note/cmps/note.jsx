const { Link } = ReactRouterDOM;

import { NoteText } from './notes/note-text.jsx';
import { NoteImg } from './notes/note-img.jsx';
import { NoteTodo } from './notes/note-todo.jsx';

export function Note({ note, type, deleteNote }) {
  function onDeleteNote() {
    deleteNote(note.id);
  }
  // console.log('in note', note, 'type', type);

  function getDynamicNote({ type, info }) {
    switch (type) {
      case 'note-txt':
        return <NoteText info={info} />;
      case 'note-img':
        return <NoteImg info={info} />;
      case 'note-todos':
        return <NoteTodo info={info} />;
    }
  }

  return (
    <div className='note'>
      <div className='note-header'>header</div>
      {getDynamicNote(note)}
      <Link to='/note/edit'>Edit note</Link>

      <button className='.btn' onClick={onDeleteNote}>
        Delete
      </button>
    </div>
  );
}
