function Header({ activeCount, totalCount }) {
  return (
    <header className="header">
      <div>
        <p className="eyebrow">TUGAS KE-4</p>
        <h1>My To-Do List</h1>
        <p className="subtitle">
          {activeCount} tugas aktif dari {totalCount} tugas
        </p>
      </div>
      <div className="count-badge">{activeCount}</div>
    </header>
  )
}

export default Header
