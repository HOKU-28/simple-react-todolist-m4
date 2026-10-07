const filters = [
  { value: 'all', label: 'Semua' },
  { value: 'active', label: 'Aktif' },
  { value: 'completed', label: 'Selesai' },
]

function FilterBar({ filter, onFilterChange, onClearCompleted, completedCount }) {
  return (
    <div className="filter-bar">
      <div className="filter-buttons">
        {filters.map((item) => (
          <button
            key={item.value}
            type="button"
            className={filter === item.value ? 'filter active' : 'filter'}
            onClick={() => onFilterChange(item.value)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <button
        type="button"
        className="clear-button"
        onClick={onClearCompleted}
        disabled={completedCount === 0}
      >
        Hapus selesai
      </button>
    </div>
  )
}

export default FilterBar
