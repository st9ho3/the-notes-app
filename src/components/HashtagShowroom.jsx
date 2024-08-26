import React, { useEffect, useState } from 'react';
import HashtagBody from './HashtagBody';

const HashtagShowroom = ({ setNotes, id,deleteShowroomHashtag, hashtags }) => {
    const [hashs, setHashs] = useState([]); // Initialize hashs as an array

    const hashtagClick = (hashtagID) => {
        const selectedHashtag = hashtags.find((hashtag) => hashtag.id === hashtagID);
        
        if (selectedHashtag && selectedHashtag.body) { // Check if selectedHashtag and body exist
            setHashs(selectedHashtag.body);   
        }
    };

    useEffect(() => {
        if (hashs.length > 0) {  // Ensure hashs is not empty before proceeding
            const updateNotes = (noteId) => {
                const savedNotes = localStorage.getItem('Notes') ? JSON.parse(localStorage.getItem('Notes')) : [];
                
                const updatedNotes = savedNotes.map(note => {
                    if (note.Id === noteId) {
                        // Check if the note.Category already exists in the note's Category array
                        const isUnique = note.Category.every(hash => hash !== hashs);
                        // Combine the existing categories with the new one, ensuring no duplicates
                        const newCategory = [...note.Category, hashs].slice(0, 3);  
                        return isUnique ? { ...note, Category: newCategory } : note;
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
            {hashtags.map((hashtag) => {
                const firstLetter = hashtag.body[0]?.toLowerCase(); // Add a safe check for the first letter
                return (
                    <div key={hashtag.id}>
                       <HashtagBody
                        hashtagClick={hashtagClick}
                        text={hashtag.body}
                        firstLetter={firstLetter}
                        id={hashtag.id}
                        deleteShowroomHashtag={deleteShowroomHashtag} /> 
                    </div>
                );
            })}
        </div>
    );
};

export default HashtagShowroom;
