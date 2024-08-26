import React, { useEffect, useState } from 'react'
import { hashtagBodyClassMap, hashtagTextClassMap } from './constants/HashtagColors';

const HashtagShowroom = ({ setNotes, id }) => {
    const gethashs = localStorage.getItem('Hashtags') ? JSON.parse(localStorage.getItem('Hashtags')) : [];
    const [hashs, setHashs] = useState('');

    const hashtagClick = (hashtagID) => {
        const selectedHashtag = gethashs[hashtagID];
        setHashs( selectedHashtag);   
    };

    useEffect(() => {
        if (hashs.length > 0) {  // Update only if there is a change in hashs
            const updateNotes = (noteId) => {
                const savedNotes = localStorage.getItem('Notes') ? JSON.parse(localStorage.getItem('Notes')) : [];
                
                const updatedNotes = savedNotes.map(note => {
                    if (note.Id === noteId) {
                        // Check if the note.Category already exists in the note's Category array
                        const isUnique = note.Category.every(hash => hash !== hashs);
                        // Combine the existing categories with the new one, ensuring no duplicates
                        const newCategory = [...note.Category, hashs].slice(0, 3)  
                        return isUnique ? { ...note, Category: newCategory } : note
                    }
                    return note;
                });
    
                setNotes(updatedNotes);
                localStorage.setItem('Notes', JSON.stringify(updatedNotes));
            };
    
            updateNotes(id);
        }
    }, [hashs, id, setNotes]);

    return (
        <div className="hashtagShowroom">
            {gethashs.map((hashtag, index) => {
                const firstLetter = hashtag[0].toLowerCase();
                return (
                    <div
                        onClick={() => hashtagClick(index)}
                        key={index}
                        className='hashtag'>
                        <div className={hashtagBodyClassMap[firstLetter] || null}></div>
                        <p className={hashtagTextClassMap[firstLetter] || null}> {hashtag} </p>
                    </div>
                );
            })}
        </div>
    );
}
export default HashtagShowroom