const { Link } = ReactRouterDOM;

import { NoteText } from './notes/note-text.jsx';
import { NoteImg } from './notes/note-img.jsx';
import { NoteTodo } from './notes/note-todo.jsx';

export function NotePreview({ note, type, removeNote, editNote }) {
  function onDeleteNote() {
    removeNote(note.id);
  }

  function onEditNote() {
    editNote(note.id);
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
      <div className='note-header full'></div>
      {getDynamicNote(note)}
      {/* <Link to='/note/edit'>Edit note</Link> */}

      <button className='btn btn-style3' onClick={onEditNote}>
        Edit
      </button>
      <button className='btn btn-style3' onClick={onDeleteNote}>
        Delete
      </button>
    </div>
  );
}
