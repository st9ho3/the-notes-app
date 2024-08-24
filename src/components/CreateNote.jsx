import React from 'react'
import { IoIosAddCircle } from "react-icons/io";

const CreateNote = ({setNewNote, show}) => {
  return (
    <div>
      <div
         className='createNote'
         onClick={() => setNewNote(true)}
         style={{
          opacity: show ? 1 : 0,
          height: show ? '1.9rem' : 0,
          overflow: 'hidden',
          transition: 'opacity 0.2s ease, height .1s ease'
        }}>
          <IoIosAddCircle className='createIcon' />
          <span className="createText">Create new</span>
        </div>
    </div>
  )
}

export default CreateNote
