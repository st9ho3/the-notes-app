import React from 'react'
import { BsThreeDots } from "react-icons/bs";

const TopNoteDetails = ({date, time, id, editNote, handleDelete}) => {
  return (
    <div>
      <div className='dateTime'>
          <p className='date'> {date} </p>
          <div className='timewall'>
            <p className='time'> {time} </p>
          </div>
          <div className='menu'>
            <BsThreeDots
            onClick={() => editNote(id)}
            className='dots' />
            <p 
              onClick={() => handleDelete(id)} 
              className='close'>Done</p>
          </div>
        </div>
    </div>
  )
}

export default TopNoteDetails
