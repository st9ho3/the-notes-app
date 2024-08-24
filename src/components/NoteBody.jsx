import React from 'react'
import Hashtag from './Hashtag';
import { LuBellRing } from "react-icons/lu";

const NoteBody = ({newNote,setNotes,title, description, important, hashtag, id, note, openHashtagStore, hashtagStoreIsOpen, setHashtagStoreIsOpen}) => {
  return (
    <div>
      <div className='noteBody'>
        <h3 className='noteTitle'> {title} </h3>
        <p className='noteDescriptin'> {description} </p>
        <hr className='noteHr'/>
        {important && <LuBellRing 
        className='bell'/>}
        <Hashtag
         hashtag={hashtag}
         id={id}
         note={note}
         openHashtagStore={openHashtagStore}
         setNotes={setNotes}
         newNote={newNote}
         hashtagStoreIsOpen={hashtagStoreIsOpen}
         setHashtagStoreIsOpen={setHashtagStoreIsOpen} />
      </div>
    </div>
  )
}

export default NoteBody
