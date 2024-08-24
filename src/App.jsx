import React, { useState, useEffect } from 'react';
import NotesPreview from './components/NotesPreview';
import SideBarMenu from './components/SideBarMenu';

const App = () => {

  const [newNote, setNewNote] = useState(false);
  const [notes, setNotes] = useState( () =>
    localStorage.getItem('Notes') ? JSON.parse(localStorage.getItem('Notes')) : []
  );
  const [tempNotes,setTempNotes] = useState([]) 
  const [searchItem, setsearchItem] = useState('')
  const handleSearch = (e) => {
    setsearchItem(e.target.value)
  }

  // Helper Functions
  const createDate = () => {
    const x = new Date();
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return x.toLocaleDateString('en-UK', options);
  };

  const createTime = () => {
    const x = new Date();
    const options = { hour: '2-digit', minute: '2-digit', hour12: false };
    return x.toLocaleTimeString('en-UK', options);
  };

  const checkId = () => {
    let variab = -1;
    const notesFromLocalStorage = JSON.parse(localStorage.getItem('Notes'));

    if (notesFromLocalStorage) {
      for (const i in notesFromLocalStorage) {
        if (notesFromLocalStorage[i].Id >= variab) {
          variab = notesFromLocalStorage[i].Id;
        }
      }
    }
    const newId = variab + 1;
    setNote({ ...note, Id: newId });
  };

  const [note, setNote] = useState({
    Id: 0,
    Title: '',
    Body: '',
    Date: createDate(),
    Time: createTime(),
    Important: false,
    Category: '',
    isEditable: false,
    HashtagOpen: false
  });

  const clearNote = () => {
    setNote({
      Id: 0,
      Title: '',
      Body: '',
      Date: '', // Reset with the current date
      Time: '', // Reset with the current time
      Important: false,
      Category: '',
      isEditable: false,
      HashtagOpen: false
    });
  };

  const handleInput = (e) => {
    const { name, value, checked, type } = e.target;
    const change = type === 'checkbox' ? checked : value;
    setNote({
      ...note,
      [name]: name === 'Body' ? charCheck(change) : change,
      Time: createTime(),
      Date: createDate()
    });
  };

  const charCheck = (text) => {
    const textLength = text.length;
    const textChecked = textLength <= 200 ? text : text.slice(0, 200);
    return textChecked;
  };

  const saveNote = () => { 
    const savedNotes = localStorage.getItem('Notes')
      ? JSON.parse(localStorage.getItem('Notes'))
      : [];
    savedNotes.push(note);
    setNotes(savedNotes);
    clearNote();
  };

  const handleDelete = (id) => {
    const newNotes = notes.filter((note) => note.Id !== id);
    setNotes(newNotes);
    localStorage.setItem('Notes', JSON.stringify(newNotes));
  };

  useEffect(() => {
    localStorage.setItem('Notes', JSON.stringify(notes));
    newNote && setNewNote(false);
    checkId();
  }, [notes]);

  return (
    <div>
      <div className='navigation'>
      </div>
      <hr className="navBorder" />
      <div className='content'>
        <div className='sideBar'>
          <div>
            <SideBarMenu number={notes.length}
              setNewNote={setNewNote}
              handleSearch={handleSearch}
              searchItem={searchItem}
              tempNotes={tempNotes}
              notes={notes}
              setTempNotes={setTempNotes}
               />
          </div>
        </div>
        <main className='mainDashboard'>
          <div className='cockpit'></div>
          <NotesPreview
            notes={notes}
            setNotes={setNotes}
            handleDelete={handleDelete}
            note={note}
            handleInput={handleInput}
            saveNote={saveNote}
            newNote={newNote}
            setNewNote={setNewNote}
            clearNote={clearNote}
            setNote={setNote}
            tempNotes={tempNotes}
            searchItem={searchItem}
          />
        </main>
      </div>

      <footer>

      </footer>
    </div>
  );
};

export default App;