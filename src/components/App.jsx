import '../styles/App.scss'
//import PropTypes from 'prop-types'
import { useState } from 'react'
import Header from './Header'
import ActivityList from './ActivityList'
import Form from './Form'
import Data from '../services/data.json'

function App() {

  const [activities, setActivities] = useState(Data);
  const [newActivity, setNewActivity] = useState(
    {
      "name":"",
      "openOnWeekdays": "",
      "openOnWeekend": "",
    }
  )
  const changeNewActivity =(key, value)=>{
    newActivity.index = activities.length
    setNewActivity({...newActivity, [key]: value})
  }
  const addNewActivity = ()=>{
    setActivities([...activities, newActivity])
  }

  const [filter, setFilter] = useState("")

  const handleSelect = (ev)=>{
    setFilter(ev.target.value)
  }

  const searchResult = activities.filter((filterValue) => {
    if (filter === "weekdays"){
      return filterValue.openOnWeekdays === true
    } else if (filter === "weekend"){
      return filterValue.openOnWeekend === true
    }
    return true;
})


  // const handleDelete = (index) => {
  //   const position = activities.findIndex((activity) => activity.index === index);
  //   const cloneList = [...activities];
  //   cloneList.splice(position, 1);
  //   setActivities(cloneList);
  // };

  
 

  return (
    <>
      <Header handleSelect={handleSelect}/>
      <ActivityList list={searchResult} />
      <Form changeNewActivity={changeNewActivity} addNewActivity={addNewActivity}/>
    </>
  )
}

export default App
