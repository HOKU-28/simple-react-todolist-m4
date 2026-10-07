import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import FilterBar from './components/FilterBar'

const initialTodos = [
  { id: 1, text: 'Pelajari React component', completed: true },
  { id: 2, text: 'Praktikkan useState', completed: false },
  { id: 3, text: 'Praktikkan useEffect', completed: false },
]

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('tugas-ke4-todos')
    return saved ? JSON.parse(saved) : initialTodos
  })

  const [filter, setFilter] = useState('all')

  // Side effect: menyimpan perubahan state todos ke localStorage.
  useEffect(() => {
    localStorage.setItem('tugas-ke4-todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    }
    setTodos((currentTodos) => [newTodo, ...currentTodos])
  }

  const toggleTodo = (id) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id))
  }

  const clearCompleted = () => {
    setTodos((currentTodos) => currentTodos.filter((todo) => !todo.completed))
  }

  const filteredTodos = useMemo(() => {
    if (filter === 'active') return todos.filter((todo) => !todo.completed)
    if (filter === 'completed') return todos.filter((todo) => todo.completed)
    return todos
  }, [todos, filter])

  const completedCount = todos.filter((todo) => todo.completed).length
  const activeCount = todos.length - completedCount

  return (
    <main className="app-shell">
      <section className="todo-card">
        <Header activeCount={activeCount} totalCount={todos.length} />

        <TodoForm onAddTodo={addTodo} />

        <FilterBar
          filter={filter}
          onFilterChange={setFilter}
          onClearCompleted={clearCompleted}
          completedCount={completedCount}
        />

        <TodoList
          todos={filteredTodos}
          onToggleTodo={toggleTodo}
          onDeleteTodo={deleteTodo}
        />
      </section>

      <p className="footer-note">
        Tugas Ke-4 • React JS • Component, Props, useState & useEffect
      </p>
    </main>
  )
}

export default App
