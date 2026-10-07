function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={todo.completed ? 'todo-item completed' : 'todo-item'}>
      <label className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span>{todo.text}</span>
      </label>

      <button
        type="button"
        className="delete-button"
        onClick={() => onDelete(todo.id)}
        aria-label={`Hapus ${todo.text}`}
      >
        ×
      </button>
    </li>
  )
}

export default TodoItem
