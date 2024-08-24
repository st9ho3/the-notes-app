import React, { useEffect, useState } from 'react'
import Note from './Note';
import EditForm from './EditForm';

const PaginatedNotes = ({ notes,editNote, handleDelete, list, newNote, setNewNote, setNotes, setNote, notesToDisplay, openHashtagStore, hashtagStoreIsOpen,setHashtagStoreIsOpen}) => {

  const [currentPage, setCurrentPage] = useState(1);
  const  pageSize = 8
  const indexOfLastNote = currentPage * pageSize;
  const indexOfFirstNote = indexOfLastNote - pageSize;
  const currentNotes = notesToDisplay.slice(indexOfFirstNote, indexOfLastNote);
  
  const totalPages = Math.ceil(notesToDisplay.length / pageSize);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)};
  
  return (
    <div>
      <div className={!list ? 'notesBoard' : 'noteslist'}>
      <div className="pagination">
        {totalPages > 1 && Array.from({length: totalPages}, (_,i) => (
         <button className='paginationButton' key={i} onClick={() => paginate(i + 1)}> {i + 1} </button>
        ))}
      </div>
      {notesToDisplay.length > 0 && (
        currentNotes.map((note) => {
          if (note.isEditable && !newNote) {
            return (
              <EditForm
                key={note.Id}
                note={note}
                notes={notesToDisplay} 
                setNewNote={setNewNote}
                setNotes={setNotes}
                setNote={setNote}
                id={note.Id}
                openHashtagStore={openHashtagStore}
              />
            );
          } else {
            return (
              <Note
                key={note.Id}
                title={note.Title}
                hashtag={note.Category}
                important={note.Important}
                description={note.Body}
                date={note.Date}
                time={note.Time}
                handleDelete={handleDelete}
                id={note.Id}
                editNote={editNote}
                note={note}
                openHashtagStore={openHashtagStore}
                setNotes={setNotes}
                newNote={newNote}
                hashtagStoreIsOpen={hashtagStoreIsOpen}
                setHashtagStoreIsOpen={setHashtagStoreIsOpen}
                notes={notes}
              />
            );
          }
        })
      )}

      </div>
    </div>
  )
}

export default PaginatedNotes
