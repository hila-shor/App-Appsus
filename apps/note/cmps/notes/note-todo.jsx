const { Fragment } = React;

export function NoteTodo({ info }) {
  return (
    <Fragment>
      <h3>{info.label}</h3>
      <ul>
        {info.todos.map((todo) => (
          <li key={todo.id}>{todo.txt}</li>
        ))}
      </ul>
    </Fragment>
  );
}
