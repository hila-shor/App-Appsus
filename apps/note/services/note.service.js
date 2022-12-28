import { utilService } from '../../../services/util.service.js';
import { asyncStorageService } from '../../../services/async-storage.service.js';
import { storageService } from '../../../services/storage.service.js';

const STORAGE_KEY = 'noteDB';

_createNotes();

export const NoteService = {
  query,
  get,
  remove,
  save,
  getDefaultFilter,
};

function query(filterBy = getDefaultFilter()) {
  return asyncStorageService.query(STORAGE_KEY).then((notes) => {
    // console.log('query, filter', filterBy);

    return notes;
  });
}

function get(noteId) {
  return asyncStorageService.get(STORAGE_KEY, noteId);
}

function remove(noteId) {
  return asyncStorageService.remove(STORAGE_KEY, noteId);
}

function save(note) {
  if (note.id) {
    return asyncStorageService.put(STORAGE_KEY, note);
  } else {
    return asyncStorageService.post(STORAGE_KEY, note);
  }
}

function getDefaultFilter() {
  return {};
}

function _createNotes() {
  let notes = storageService.loadFromStorage(STORAGE_KEY);
  if (!notes || !notes.length) {
    notes = [
      {
        id: 'n101',
        owner: 'Andrey',
        type: 'note-txt',
        isPinned: true,
        info: {
          txt: 'Fullstack Me Baby!',
        },
      },
      {
        id: 'n102',
        owner: 'Andrey',
        type: 'note-img',
        info: {
          url: 'http://some-img/me',
          title: 'Bobi and Me',
        },
        style: {
          backgroundColor: '#00d',
        },
      },
      {
        id: 'n103',
        owner: 'Andrey',
        type: 'note-todos',
        info: {
          label: 'Get my stuff together',
          todos: [
            { txt: 'Driving liscence', doneAt: null },
            { txt: 'Coding power', doneAt: 187111111 },
          ],
        },
      },
    ];

    storageService.saveToStorage(STORAGE_KEY, notes);
  }
}
