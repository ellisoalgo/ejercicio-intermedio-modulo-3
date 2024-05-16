const Activities = ({activity, index}) => {

  // const handleClickDelete =()=>{
  //   handleDelete(index)
  // }

  return (
    <article>
       {<h3>#{index}: {activity.name}</h3>  }
       <p>Abierto entre semana: {activity.openOnWeekdays ? 'Sí' : 'No'}</p>
       <p>Abierto fin de semana: {activity.openOnWeekend ? 'Sí' : 'No'}</p>
       <button  id={index}>Eliminar Actividad</button>
    </article>
  )
}

export default Activities