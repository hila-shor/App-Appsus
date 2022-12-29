const { useState } = React;
import { NoteService } from '../services/note.service.js';

export function NoteNew() {
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
    let { value, name: field } = ev.target;

    const type = ev.nativeEvent.submitter.name;
    console.log('name', type);
    console.log('ev.target', ev.target);
    if (!value) setNoteType(type);
    else createNote(value);

    /*     NoteService.save(noteToCreate).then((note) => {
      console.log('note saved', note);
      //   showSuccessMsg('Car saved!');
      //   navigate('/car');
    }); */
  }

  function createNote(value) {
    console.log('in create', value);
    let newNote = NoteService.getEmptyNote();
    if (noteType === 'note-txt') {
      newNote = { ...newNote, info: { ...newNote.info, txt: value } };
      console.log('newNote', newNote);
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
        className='input-new-note'
        placeholder={getPlaceholder(noteType)}
      />
      <button className='btn-note' name='note-txt' onChange={handleChange}>
        <span className='btn-icon'>📝️</span>
      </button>
      <button className='btn-img' name='note-img' onChange={handleChange}>
        <span className='btn-icon'>🖼️</span>
      </button>
      <button className='btn-todo' name='note-todo' onChange={handleChange}>
        <span className='btn-icon'>📋️</span>
      </button>
    </form>
  );
}
