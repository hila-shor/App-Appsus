import { NoteNew } from './note-new.jsx';

export function AppSearch({ setNotes, loadNotes }) {
  return (
    <div className='search'>
      <NoteNew setNotes={setNotes} loadNotes={loadNotes} />
    </div>
  );
}
