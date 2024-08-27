import React from 'react'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import '../style.css';
import WeatherInfo from '../WeatherInfo';

const TaskField = () => {
  return (
    <div className='taskfield'>
      <WeatherInfo/>
        <TaskInput/>
        <TaskList/>
    </div>
  )
}

export default TaskField