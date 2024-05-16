const Activities = ({activity, index, handleDelete}) => {

  // const handleClickDelete =()=>{
  //   handleDelete(index)
  // }

  return (
    <article>
       {<h3>#{index}: {activity.name}</h3>  }
       <p>Abierto entre semana: {activity.openOnWeekdays === true ? 'Sí' : 'No'}</p>
       <p>Abierto fin de semana: {activity.openOnWeekend === true ? 'Sí' : 'No'}</p>
       <button onClick={handleClickDelete} id={index}>Eliminar Actividad</button>
    </article>
  )
}

export default Activities