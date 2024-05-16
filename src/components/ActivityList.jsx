import Activities from "./Activities"

const ActivityList = ({list}) => {

  return (
    <section>
        <ul className="list">
            {list.map((activity, index)=><li key={index}className="card">
              <Activities activity={activity} index={index} list={list}/>
            </li>)}
        </ul>
    </section>
  )
}

export default ActivityList