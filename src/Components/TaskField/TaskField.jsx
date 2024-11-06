import React from 'react'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import '../style.css';
import WeatherInfo from '../WeatherInfo';
import Sidebar from '../Sidebar';

const TaskField = () => {
  return (
    <div className=' taskfield flex w-full'>
      <div className='w-1/4'>
      <Sidebar/>

      </div>
      <div className='w-3/4 max-sm:w-full'>
      <WeatherInfo/>
        <TaskInput/>
        <TaskList/>
      </div>
    
    </div>
  )
}

export default TaskField