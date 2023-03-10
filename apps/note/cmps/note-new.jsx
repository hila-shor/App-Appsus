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
    if (!noteType.localeCompare('note-txt')) {
      newNote = {
        ...newNote,
        type: 'note-txt',
        info: { ...newNote.info, txt: value },
      };
      NoteService.save(newNote).then((note) => {
        loadNotes();
        //   showSuccessMsg('Note saved!');
      });
    } else if (!noteType.localeCompare('note-img')) {
      newNote = {
        ...newNote,
        type: 'note-img',
        info: { ...newNote.info, url: value },
      };
      NoteService.save(newNote).then((note) => {
        loadNotes();
        //   showSuccessMsg('Note saved!');
      });
    } else if (!noteType.localeCompare('note-todos')) {
      const taskList = value.split(', ');
      const todos = NoteService.makeTodos(taskList);

      newNote = {
        ...newNote,
        type: 'note-todos',
        info: { ...newNote.info, todos },
      };
      NoteService.save(newNote).then((note) => {
        loadNotes();
        //   showSuccessMsg('Note saved!');
      });
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
        onClick={() => setNoteType('note-txt')}>
        <span className='btn-icon'>???????</span>
      </button>
      <button
        type='button'
        className='btn-img'
        onClick={() => setNoteType('note-img')}>
        <span className='btn-icon'>???????</span>
      </button>
      <button
        type='button'
        className='btn-todo'
        onClick={() => setNoteType('note-todos')}>
        <span className='btn-icon'>???????</span>
      </button>

      <button className='btn-input'>Add</button>
    </form>
  );
}
