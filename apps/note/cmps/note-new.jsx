const { useState } = React;
import { NoteService } from '../services/note.service.js';

export function NoteNew({ loadNotes }) {
  const [noteToCreate, setNoteToCreate] = useState(NoteService.getEmptyNote());
  const [noteType, setNoteType] = useState('note-text');

  function getPlaceholder(noteType) {
    switch (noteType) {
      case 'note-txt':
        return 'Type note text ..';
      case 'note-img':
        return 'Type image link ..';
      case 'note-todo':
        return 'Type your task ..';
    }
  }

  function onSaveNote(ev) {
    ev.preventDefault();
    const value = ev.target[0].value;
    createNote(value);
  }

  function createNote(value) {
    let newNote = NoteService.getEmptyNote();
    if (noteType.localeCompare('note-txt')) {
      newNote = {
        ...newNote,
        type: 'note-txt',
        info: { ...newNote.info, txt: value },
      };
      NoteService.save(newNote).then((note) => {
        console.log('note saved', note);
        loadNotes();
        //   showSuccessMsg('Car saved!');
      });
    } else if (noteType.localeCompare('note-img')) {
      newNote = {
        ...newNote,
        type: 'note-img',
        info: { ...newNote.info, url: value },
      };
      console.log('newNote', newNote);
      NoteService.save(newNote).then((note) => {
        loadNotes();
        //   showSuccessMsg('Car saved!');
      });
    } else if (noteType.localeCompare('note-todo')) {
      console.log('adding todo', value);
    }
  }

  function handleChange() {
    // validation
  }

  return (
    <form className='form-new-note' onSubmit={onSaveNote}>
      <input
        type='text'
        name='new-note'
        className='input input-new-note'
        placeholder={getPlaceholder(noteType)}
      />
      <button
        type='button'
        className='btn-note'
        onClick={() => onChangeType(note - txt)}>
        <span className='btn-icon'>📝️</span>
      </button>
      <button
        type='button'
        className='btn-img'
        onClick={() => onChangeType(note - img)}>
        <span className='btn-icon'>🖼️</span>
      </button>
      <button
        type='button'
        className='btn-todo'
        onClick={() => onChangeType(note - todo)}>
        <span className='btn-icon'>📋️</span>
      </button>

      <button className='btn-input'>Add</button>
    </form>
  );
}
