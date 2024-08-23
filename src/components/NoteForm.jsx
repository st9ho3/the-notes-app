import React from 'react';
import SharedForm from './SharedForm';


const NoteForm = ({note, handleInput, saveNote, setNewNote, clearNote, searchItem}) => {

  const handleSubmit = (e) => {
    !searchItem && e.preventDefault()
    saveNote() 
   }
   const closeForm = () => {
    setNewNote(false)
    clearNote()
   }

  return (
    <div className='noteform'>
      <SharedForm
        handleInput={handleInput}
        note={note}
        closeForm={closeForm}
        handleSubmit={handleSubmit} />
    </div>
  );
};

export default NoteForm;