const Filter = ({handleSelect}) => {

  return (
    <form action="" className="header__filter">
      <label htmlFor="select">Mostrar actividades:</label>
      <select name="select" id="select" onChange={handleSelect} className="header__filter--select">
        <option value="todos" >Todos</option>
        <option value="weekdays" >Los que abren entre semana</option>
        <option value="weekend" >Los que abren el fin de semana</option>
      </select>
    </form>
  )
}

export default Filter