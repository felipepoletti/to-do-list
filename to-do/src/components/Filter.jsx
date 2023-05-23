const Filter = ({ filter, setFilter, sort, setSort }) => {
  return <div className="filter">
    <h2>Filtrar:</h2>
    <div className="filter-options">
      <div>
        <p>Status:</p>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">Todas</option>
          <option value="Completed">Feitas</option>
          <option value="Incomplete">Para fazer</option>
        </select>
      </div>
      <div>
        <p>Ordem alfabética</p>
        <button onClick={() => setSort("ASC")}>ASC</button>
        <button onClick={() => setSort("DESC")}>DESC</button>
      </div>
    </div>
  </div>
}

export default Filter;