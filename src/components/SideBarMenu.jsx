import React, { useEffect, useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import SideBarList from './SideBarList';
import CreateNote from './CreateNote';

const SideBarMenu = ({ number, setNewNote, handleSearch, searchItem, setTempNotes }) => {

  const [show, setShow] = useState(true);
  const showMenu = () => {
    setShow(prev => !prev);
  };

  const checkForMatch = () => {
    const arrayToCheck = JSON.parse(localStorage.getItem('Notes'));
    
      const findings = arrayToCheck.filter(note => {
        const title = note.Title.toLowerCase().replace(/\s+/g, '');
        const body = note.Body.toLowerCase().replace(/\s+/g, '');
        const searchTerm = searchItem.toLowerCase().replace(/\s+/g, '');
        
        return searchTerm && title.includes(searchTerm) || body.includes(searchTerm);
      });
      setTempNotes(findings);
  };

  useEffect(() => {
    checkForMatch()
  },[searchItem])
  
  return (
    <div className='sideBarMenu'>
      <h3 onClick={showMenu} className="menuTitle">
        MENU
        {show ? <IoMdArrowDropdown className='arrow' /> : <IoMdArrowDropleft className='arrow' />}
      </h3>
      <CreateNote
        show={show}
        setNewNote={setNewNote} />
      <SideBarList
        number={number}
        handleSearch={handleSearch}
        searchItem={searchItem}
        show={show} />
    </div>
  );
};

export default SideBarMenu;