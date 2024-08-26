import React, { useEffect, useState } from 'react';
import { IoIosAdd } from "react-icons/io";
import HashtagStore from './HashtagStore';
import HashtagBody from './HashtagBody';

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
    console.log(hashtagStoreIsOpen)

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
                    <div key={index}>
                        <HashtagBody
                            firstLetter={firstLetter}
                            hashtagStoreIsOpen={hashtagStoreIsOpen}
                            text={hashtag}
                            deleteShowroomHashtag={deleteNoteHashtag}
                            id={index} />
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
