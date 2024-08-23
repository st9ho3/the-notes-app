import React, {useState } from "react";
import SharedForm from "./SharedForm";


const EditForm = ({ note, setNotes }) => {

  const [editedNote, setEditedNote] = useState({ ...note });

  const handleEditedInput = (e) => {
    const { name, value, checked, type } = e.target;
    const change = type === 'checkbox' ? checked : value;
    setEditedNote({ ...editedNote, [name]: change });
  };

  const saveEditedNote = () => {
    // Update notes array in the parent component (App)
    setNotes(prevNotes =>
      prevNotes.map(n => (n.Id === editedNote.Id ? editedNote : n))
    );
    setNotes(prevNotes =>
      prevNotes.map(n => ({ ...n, isEditable: false }))
    );
  };

  const closeEditedNote = () => {
    setNotes(prevNotes =>
      prevNotes.map(n => ({ ...n, isEditable: false }))
    );
  };

  const handleEditedSubmit = (e) => {
    e.preventDefault();
    saveEditedNote();
  };

  return (
    <div className="editform">
      <SharedForm
        handleInput={handleEditedInput}
        closeForm={closeEditedNote}
        handleSubmit={handleEditedSubmit}
        saveNote={saveEditedNote}
        note={editedNote}
         />  
    </div>
    
  );
}

export default EditForm;