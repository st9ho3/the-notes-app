import React, { useState } from 'react';
import SharedForm from './SharedForm';

const NoteForm = ({ note, handleInput, saveNote, setNewNote, clearNote, searchItem, newNote, setNotes }) => {
  const [openNoteFormHashtags, setOpenHashtags] = useState(false);

  const handleSubmit = (e) => {
    if (!searchItem) {
      e.preventDefault();
    }
    saveNote();
  };

  const closeForm = () => {
    setNewNote(false);
    clearNote();
  };

  const openhashtags = () => {
    setOpenHashtags(true);
  };

  const closehashtags = () => {
    setOpenHashtags(false);
    // Ensure this does not affect the `newNote` state if not needed
    /* setNewNote(true); */
  };

  return (
    <div>
      <SharedForm
        handleInput={handleInput}
        note={note}
        closeForm={closeForm}
        handleSubmit={handleSubmit}
        openhashtags={openhashtags}
        openNoteFormHashtags={openNoteFormHashtags}
        closehashtags={closehashtags}
        newNote={newNote}
        setNotes={setNotes}
      />
    </div>
  );
};

export default NoteForm;
