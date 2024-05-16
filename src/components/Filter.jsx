const Filter = ({handleSelect}) => {

  return (
    <form action="">
      <label htmlFor="select"></label>
      <select name="select" id="select" onChange={handleSelect}>
        <option value="todos" >Todos</option>
        <option value="weekdays" >Los que abren entre semana</option>
        <option value="weekend" >Los que abren el fin de semana</option>
      </select>
    </form>
  )
}

export default Filter