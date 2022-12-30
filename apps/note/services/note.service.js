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
  getEmptyNote,
  makeTodos,
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

function getEmptyNote() {
  return {
    owner: 'Andrey',
    info: {},
  };
}

function makeTodos(tasks) {
  return tasks.map((task) => {
    return {
      id: utilService.makeId(),
      txt: task,
      doneAt: null,
    };
  });
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
          url: 'https://picsum.photos/200/100',
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
            { id: 't100', txt: 'Driving liscence', doneAt: null },
            { id: 't101', txt: 'Coding power', doneAt: 187111111 },
          ],
        },
      },
      {
        id: 'n104',
        owner: 'Andrey',
        type: 'note-txt',
        isPinned: true,
        info: {
          txt: 'Fullstack Me Baby!',
        },
      },
    ];

    storageService.saveToStorage(STORAGE_KEY, notes);
  }
}
