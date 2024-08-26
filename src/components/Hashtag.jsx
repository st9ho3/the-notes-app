import React from 'react';
import { hashtagBodyClassMap, hashtagTextClassMap } from './constants/HashtagColors';
import { IoIosAdd } from "react-icons/io";
import HashtagStore from './HashtagStore';
import { IoClose } from "react-icons/io5";
import HashtagBody from './HashtagBody';

const Hashtag = ({ 
    id, 
    notes, 
    newNote, 
    setNotes, 
    hashtags, 
    openHashtagStore, 
    note, 
    hashtagStoreIsOpen, 
    setHashtagStoreIsOpen 
}) => {

    // Determine the click handler based on the state
    const handleClick = !hashtagStoreIsOpen ? () => openHashtagStore(note.Id) : undefined;

    const deleteNoteHashtag = (id) => {
        // Filter out the hashtag to delete
        const filteredhashs = hashtags.filter((hashtag, index) => index !== id);
        
        const newNotes = notes.map((note) => {
            return { ...note, Category: filteredhashs };
        });
        
        setNotes(newNotes);
    };

    return (
        <div className='hashtagArea'>
            {hashtags.length > 0 && hashtags.map((hashtag, index) => {
                const firstLetter = hashtag[0]?.toLowerCase();
                return (
                    /* <div key={index} className='showroomhashtag'>
                        <IoClose 
                            className='hashtagBodyCloseButton' 
                            onClick={() => deleteNoteHashtag(index)} 
                        />
                        <div className='hashtag'>
                            <div className={hashtagBodyClassMap[firstLetter] || ''}></div>
                            <p className={hashtagTextClassMap[firstLetter] || ''}>
                                {hashtag}
                            </p>
                        </div>
                    </div> */
                    <div key={index}>
                        <HashtagBody
                            deleteShowroomHashtag={deleteNoteHashtag}
                            firstLetter={firstLetter}
                            text={hashtag}
                            id={index} />
                    </div>
    
                )})}
            <button  
                onClick={handleClick} 
                className="addHashtag"
            >
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
};

export default Hashtag;
