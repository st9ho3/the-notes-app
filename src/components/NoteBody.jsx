import React from 'react'
import Hashtag from './Hashtag';
import { LuBellRing } from "react-icons/lu";

const NoteBody = ({title, description, important, hashtag}) => {
  return (
    <div>
      <div className='noteBody'>
        <h3 className='noteTitle'> {title} </h3>
        <p className='noteDescriptin'> {description} </p>
        <hr className='noteHr'/>
        {important && <LuBellRing 
        className='bell'/>}
        <Hashtag
         hashtag={hashtag} />
      </div>
    </div>
  )
}

export default NoteBody
