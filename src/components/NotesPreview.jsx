import React, { useState } from 'react';
import PaginatedNotes from './PaginatedNotes';
import NoteForm from './NoteForm';

const NotesPreview = ({ searchItem, tempNotes, setNote, handleDelete, notes, note, handleInput, saveNote, newNote, setNewNote, clearNote, setNotes }) => {
  
  const [list,setList] = useState(false)
  const handleClick = () => {
    setList(prev => !prev)
  }
  let notesToDisplay;

  if (tempNotes && tempNotes.length > 0 && searchItem) {
    notesToDisplay = tempNotes;
  } else if (notes && notes.length > 0 && !searchItem) {
    notesToDisplay = notes;
  } else {
    notesToDisplay = [];
  };
  const editNote = (id) => {
    const notesToedited = JSON.parse(localStorage.getItem('Notes'));
    const editableNotes = notesToedited.map((note) =>
      id === note.Id ? { ...note, isEditable: true } : note
    );
    setNotes(editableNotes);
    localStorage.setItem('Notes', JSON.stringify(editableNotes));
  };
  return (
    <div>
      {
        notes.some(n => n.isEditable) && <div className='changeBackgroundWhenAddNote'></div> 
        || newNote && <div className='changeBackgroundWhenAddNote'></div>
      }
        <PaginatedNotes
          notes={notes}
          tempNotes={tempNotes}
          searchItem={searchItem}
          list={list}
          newNote={newNote}
          setNote={setNote}
          handleDelete={handleDelete}
          note={note}
          handleInput={handleInput}
          saveNote={saveNote}
          setNewNote={setNewNote}
          clearNote={clearNote}
          editNote={editNote}
          setNotes={setNotes}
          notesToDisplay={notesToDisplay}
          />
          
      <div className='addBox'>
        {newNote && (
          <NoteForm
            note={note}
            handleInput={handleInput}
            saveNote={saveNote}
            setNewNote={setNewNote}
            clearNote={clearNote}
            searchItem={searchItem}
          />
        )}
      </div>
    </div>
    
  );
};

export default NotesPreview;