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

  function getDynamicComponent(modal) {
    const type = modal.cmp.type;
    switch (type) {
      case 'note-txt':
        return <NoteTxtEdit note={modal.cmp} noteToEdit={modal.setCmp} />;
      case 'note-img':
        return <NoteImgEdit note={modal.cmp} noteToEdit={modal.setCmp} />;
      case 'note-todos':
        return <NoteTodoEdit note={modal.cmp} noteToEdit={modal.setCmp} />;
    }
  }

  return (
    <dialog className='modal' ref={elModal}>
      {getDynamicComponent(modal)}
      <button
        className='modal__closeBtn'
        onClick={() => {
          elModal.current.close();
          setModal({ cmp: null, setCmp: null, toShow: false });
        }}>
        CLOSE
      </button>
    </dialog>
  );
}
