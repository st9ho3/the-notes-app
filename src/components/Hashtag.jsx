import React from 'react';
import { hashtagBodyClassMap, hashtagTextClassMap } from './constants/HashtagColors';
import { IoIosAdd } from "react-icons/io";
import HashtagStore from './HashtagStore';

const Hashtag = ({ id, notes, newNote, setNotes, hashtags, openHashtagStore, note, hashtagStoreIsOpen, setHashtagStoreIsOpen }) => {
    // Determine the click handler based on the state
    const handleClick = !hashtagStoreIsOpen ? () => openHashtagStore(note.Id) : undefined;

    return (
        <div className='hashtagArea'>
            {hashtags.length > 0 && hashtags.map((hashtag, index) => (
                <div className='hashtag' key={index}>
                    <div className={hashtagBodyClassMap[hashtag[0].toLowerCase()] || null}></div>
                    <p className={hashtagTextClassMap[hashtag[0].toLowerCase()] || null}> {hashtag} </p>
                </div> 
            ))}
            <button  
                onClick={handleClick} 
                className="addHashtag">
                <IoIosAdd className='addHastagButton' />
            </button>
            {note.HashtagOpen && (
                <HashtagStore  
                    setNotes={setNotes}
                    newNote={newNote}
                    setHashtagStoreIsOpen={setHashtagStoreIsOpen}
                    notes={notes}
                    id={id}
                />
            )}
        </div>
    );
}

export default Hashtag
