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
    <form action="" className="form">
      <div className="form__input">
        <label htmlFor="name">Nombre del club</label>
        <input type="text" id="name" name="name" onChange={handleInput} className="form__input--field"/>
      </div>
      <div className="form__input">
        <label htmlFor="openOnWeekdays">¿Abre entre semana?</label>
        <input type="checkbox" name="openOnWeekdays" id="openOnWeekdays" onChange={handleInput}/>
      </div>
      <div className="form__input">
        <label htmlFor="openOnWeekend">¿Abre los fines de semana?</label>
        <input type="checkbox" name="openOnWeekend" id="openOnWeekend" onChange={handleInput} />
      </div>
      <input type="submit" value="Añadir nuevo club" onClick={handleClick} className="form__btn"/>
    </form>
  )
}

export default Form