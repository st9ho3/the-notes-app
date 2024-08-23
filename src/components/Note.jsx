import React from 'react'
import TopNoteDetails from './TopNoteDetails';
import NoteBody from './NoteBody';

const Note = ({id ,title, hashtag, description,time, date, important, handleDelete, editNote}) => {

  return (
    <div>
      <div className='note'>
        <TopNoteDetails
          date={date}
          time={time}
          id={id}
          editNote={editNote}
          handleDelete={handleDelete} />
        <NoteBody
          title={title}
          description={description}
          important={important}
          hashtag={hashtag} />
      </div>
    </div>
  )
}

export default Note