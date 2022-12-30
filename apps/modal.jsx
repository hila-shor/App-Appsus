const { useEffect, useRef } = React;
import { NoteImgEdit } from './note/cmps/notes/note-img-edit.jsx';
import { NoteTodoEdit } from './note/cmps/notes/note-todo-edit.jsx';
import { NoteTxtEdit } from './note/cmps/notes/note-text-edit.jsx';

export function Modal({ modal, setModal }) {
  // modal el
  const elModal = useRef(null);
  useEffect(() => {
    elModal.current.showModal();
  }, []);

  function getDynamicNoteEdit({ type, info }) {
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
    <dialog className='modal' ref={elModal}>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, culpa.
      </p>
      <button
        className='modal__closeBtn'
        onClick={() => {
          elModal.current.close();
          setModal({ noteId: null, toShow: false });
        }}>
        CLOSE
      </button>
    </dialog>
  );
}
