const { Fragment } = React;

export function NoteImg({ info }) {
  return (
    <Fragment>
      <h3>{info.title}</h3>
      <img className='full' src={info.url} />
    </Fragment>
  );
}
