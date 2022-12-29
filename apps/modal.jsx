const { useEffect, useRef } = React;
export function Modal() {
  console.log('in modal');
  // modal el
  const elModal = useRef(null);
  useEffect(() => {
    console.log(elModal);
    if (elModal) elModal.current.showModal();
  }, []);
  return (
    <dialog className='modal' ref={elModal}>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, culpa.
      </p>
      <button className='modal__closeBtn'>CLOSE</button>
    </dialog>
  );
}
