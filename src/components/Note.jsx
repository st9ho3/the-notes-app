import React from 'react'
import TopNoteDetails from './TopNoteDetails';
import NoteBody from './NoteBody';

const Note = ({setNotes,note, id ,title, hashtag, description,time, date, important, handleDelete, editNote, openHashtagStore, newNote}) => {

  return (
    <div>
      <div className='note'>
        <TopNoteDetails
          date={date}
          time={time}
          id={id}
          editNote={editNote}
          handleDelete={handleDelete}
           />
          
        <NoteBody
          title={title}
          description={description}
          important={important}
          hashtag={hashtag}
          id={id}
          note={note}
          openHashtagStore={openHashtagStore}
          setNotes={setNotes}
          newNote={newNote}
           />
      </div>
    </div>
  )
}

export default Note