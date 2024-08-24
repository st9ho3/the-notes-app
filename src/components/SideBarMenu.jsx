import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import SideBarList from './SideBarList';
import CreateNote from './CreateNote';

const SideBarMenu = ({ number, setNewNote, handleSearch, searchItem, setTempNotes }) => {
=======
import { TbNotes } from "react-icons/tb";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaChartSimple } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";

const SideBarMenu = ({ number, setNewNote, handleSearch, checkForMatch, searchItem }) => {
>>>>>>> 01be5ef010ff2ce22fa63a5a1176f5ae6d4458ab

  const [show, setShow] = useState(true);
  const showMenu = () => {
    setShow(prev => !prev);
  };
<<<<<<< HEAD

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
  
=======
  useEffect(() => {
    checkForMatch()
  },[searchItem])

>>>>>>> 01be5ef010ff2ce22fa63a5a1176f5ae6d4458ab
  return (
    <div className='sideBarMenu'>
      <h3 onClick={showMenu} className="menuTitle">
        MENU
        {show ? <IoMdArrowDropdown className='arrow' /> : <IoMdArrowDropleft className='arrow' />}
      </h3>
<<<<<<< HEAD
      <CreateNote
        show={show}
        setNewNote={setNewNote} />
      <SideBarList
        number={number}
        handleSearch={handleSearch}
        searchItem={searchItem}
        show={show} />
=======
      <div
         className='createNote'
         onClick={() => setNewNote(true)}
         style={{
          opacity: show ? 1 : 0,
          height: show ? '1.9rem' : 0,
          overflow: 'hidden',
          transition: 'opacity 0.2s ease, height .1s ease'
        }}>
          <IoIosAddCircle className='createIcon' />
          <span className="createText">Create new</span>
        </div>
      <ul
        style={{
          opacity: show ? 1 : 0,
          height: show ? 'auto' : 0,
          overflow: 'hidden',
          transition: 'opacity 0.4s ease, height 0.6s ease'
        }}
        className='List'
      >
        <hr className='up'/>
        <li className={' notesItem searchbar'}>
        <IoSearch className={'listIcon searchIcon'} />
        <input 
          type="text"   
          className='searchBar'   
          placeholder='Search'
          name='Search'
          onChange={handleSearch}
          value={searchItem} />
        </li>
        <hr className='down' />
        <li className={'listItem notesItem'}>
          <TbNotes className='listIcon' />Notes
          {number > 0 && <div className="notesNumber"> {number} </div>}
        </li>
        <li className={'listItem timeline'}>
          <LuLayoutDashboard className='listIcon' />Timeline
        </li>
        <li className={'listItem statistics'}>
          <FaChartSimple className='listIcon' />Statistics
        </li>
      </ul>
>>>>>>> 01be5ef010ff2ce22fa63a5a1176f5ae6d4458ab
    </div>
  );
};

export default SideBarMenu;