import Activities from "./Activities"

const ActivityList = ({list, handleDelete}) => {

  return (
    <section>
        <ul>
            {list.map((activity, index)=><li key={index}className="card">
              <Activities activity={activity} index={index} list={list} handleDelete={handleDelete}/>
            </li>)}
        </ul>
    </section>
  )
}

export default ActivityList