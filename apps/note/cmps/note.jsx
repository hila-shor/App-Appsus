export function Note({ note }) {
  return (
    <div className='note'>
      <div className='note-header'>header</div>
      <div className='note-content'>{note.id}</div>
    </div>
  );
}
