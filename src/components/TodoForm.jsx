import { useState } from 'react'

function TodoForm({ onAddTodo }) {
  const [text, setText] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const cleanText = text.trim()

    if (!cleanText) return

    onAddTodo(cleanText)
    setText('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Tambahkan tugas baru..."
        aria-label="Nama tugas"
      />
      <button type="submit">Tambah</button>
    </form>
  )
}

export default TodoForm
