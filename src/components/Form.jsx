const Form = ({changeNewActivity, addNewActivity}) => {

  const handleInput = (ev)=> {
    const { id, type, checked, value } = ev.target;
    const inputValue = type === 'checkbox' ? checked : value;
    changeNewActivity(id, inputValue)
  }

  const handleClick = (ev)=> {
    ev.preventDefault();
    addNewActivity();
  }

  return (
    <form action="">
      <label htmlFor="name">Nombre del club</label>
      <input type="text" id="name" name="name" onChange={handleInput}/>
      <label htmlFor="openOnWeekdays">¿Abre entre semana?</label>
      <input type="checkbox" name="openOnWeekdays" id="openOnWeekdays" onChange={handleInput}/>
      <label htmlFor="openOnWeekend">¿Abre los fines de semana?</label>
      <input type="checkbox" name="openOnWeekend" id="openOnWeekend" onChange={handleInput} />
      <input type="submit" value="Añadir nuevo club" onClick={handleClick}/>
    </form>
  )
}

export default Form