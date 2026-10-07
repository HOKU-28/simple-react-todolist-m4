import TodoItem from './TodoItem'

function TodoList({ todos, onToggleTodo, onDeleteTodo }) {
  if (todos.length === 0) {
    return <div className="empty-state">Belum ada tugas pada filter ini.</div>
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggleTodo}
          onDelete={onDeleteTodo}
        />
      ))}
    </ul>
  )
}

export default TodoList
