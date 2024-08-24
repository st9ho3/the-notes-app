import React from 'react'
import { TbNotes } from "react-icons/tb";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { FaChartSimple } from "react-icons/fa6";

const SideBarList = ({show, handleSearch, searchItem, number}) => {
  return (
    <div>
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
    </div>
  )
}

export default SideBarList
