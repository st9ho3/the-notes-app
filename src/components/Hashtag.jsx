import React, { useEffect, useState } from 'react';
import { hashtagBodyClassMap, hashtagTextClassMap } from './constants/HashtagColors';
import { IoIosAdd } from "react-icons/io";
import HashtagStore from './HashtagStore';
import { IoClose } from "react-icons/io5";

const Hashtag = ({
    id,
    notes = [],
    newNote,
    setNotes,
    hashtags = [],
    openHashtagStore,
    note,
    hashtagStoreIsOpen,
    setHashtagStoreIsOpen
}) => {
    const [deletedNotes, setDeleted] = useState([]);

    // Determine the click handler based on the state
    const handleClick = !hashtagStoreIsOpen ? () => openHashtagStore(note.Id) : undefined;

    const deleteNoteHashtag = (HashtagID) => {
        const filtered = hashtags.filter((_, index) => index !== HashtagID);
        setDeleted(filtered);
    };

    useEffect(() => {
        const updateDeleted = (NoteID) => {
            const newNotes = notes.map((note) =>
                note.Id === NoteID ? { ...note, Category: deletedNotes } : note
            );
            setNotes(newNotes);
        };
        updateDeleted(id);
    }, [deletedNotes]);

    return (
        <div className='hashtagArea'>
            {hashtags.length > 0 && hashtags.map((hashtag, index) => {
                const firstLetter = hashtag[0]?.toLowerCase();
                return (
                    <div key={index} className='showroomhashtag'>
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
                    </div>
                );
            })}
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
