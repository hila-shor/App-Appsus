export function Note({ note, type, deleteNote }) {
  function onDeleteNote() {
    deleteNote(note.id);
  }
  console.log('in note', note, 'type', type);

  function dynamicNote(type) {
    switch (type) {
      case 'note-txt':
        return <NoteText />;
      case 'note-img':
        return <NoteImg />;
      case 'note-todos':
        return <NoteTodo />;
    }
  }

  return (
    <div className='note'>
      <div className='note-header'>header</div>
      <div className='note-content'>{note.id}</div>
      <button className='.btn' onClick={onDeleteNote}>
        Delete
      </button>
    </div>
  );
}
