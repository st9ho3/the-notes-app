import React, { useEffect, useState } from 'react';
import { hashtagBodyClassMap, hashtagTextClassMap } from './constants/HashtagColors';
import { IoIosAdd } from "react-icons/io";
import HashtagStore from './HashtagStore';


const Hashtag = ({ newNote,setNotes,hashtag, openHashtagStore, note,hashtagStoreIsOpen,setHashtagStoreIsOpen }) => {

    return (
        <div className='hashtagArea'>
            {hashtag 
            && hashtag !== "- Category -" 
            && <div className='hashtag'>
                <div className={hashtagBodyClassMap[hashtag[0].toLowerCase()] || null}></div>
                <p className={hashtagTextClassMap[hashtag[0].toLowerCase()] || null}> {hashtag} </p>
                </div>}
            <button  
                onClick={!hashtagStoreIsOpen && (() => openHashtagStore(note.Id))} 
                className="addHashtag">
                <IoIosAdd 
                className='addHastagButton'
                 />
            </button>
            {note.HashtagOpen
                && <HashtagStore  
                    setNotes={setNotes}
                    newNote={newNote}
                    setHashtagStoreIsOpen={setHashtagStoreIsOpen}
                    />}
        </div>
    );
}

export default Hashtag;