import React, { useState, useEffect } from 'react';
import HashtagShowroom from './HashtagShowroom';
import { IoClose } from "react-icons/io5";
import { nanoid } from 'nanoid';

const HashtagStore = ({ id, notes, openNoteFormHashtags, closehashtags, setNotes, newNote, setHashtagStoreIsOpen}) => {
  const [hashtags, setHashtags] = useState(() => {
    const savedHashtags = localStorage.getItem('Hashtags');
    return savedHashtags ? JSON.parse(savedHashtags) : [];
  });
  const [createHashtag, setHashtag] = useState('');

  const handleHashtagSubmit = (e) => {
    setHashtag(e.target.value.slice(0,9));
  };
  const updateHashtags = () => {
    const arr = localStorage.getItem('Hashtags') ? JSON.parse(localStorage.getItem('Hashtags')) : [];
    const hashTag = {
      id: nanoid(),
      body: createHashtag
    }
    // Check if the createHashtag already exists in the array
    const isUnique = arr.every(hash => hash.body !== createHashtag);
    if (isUnique) {
        // If the hashtag is unique, add it to the array and update the state
        arr.push(hashTag);
        setHashtags([...hashtags, hashTag]);
        localStorage.setItem('Hashtags', JSON.stringify(arr));
        setHashtag('');  // Clear the input field
    } else {
        console.log('Hashtag already exists');
    }
};
  const closeHashtagNote = () => {
    setNotes(prevNotes => prevNotes.map(n => ({ ...n, HashtagOpen: false })));
    setHashtagStoreIsOpen(false);
  };
  
  // Function to delete a hashtag and update state and localStorage
  const deleteShowroomHashtag = (id) => {
    // Filter out the hashtag to delete
    const filteredhashs = hashtags.filter((hashtag) => hashtag.id !== id);
    // Update state
    setHashtags(filteredhashs);
  };

// Update localStorage whenever tempHashs changes
useEffect(() => {
    localStorage.setItem('Hashtags', JSON.stringify(hashtags));
}, [hashtags]);

  return (
    <div className='hashtagStore' style={openNoteFormHashtags ? { position: 'absolute', top: '1rem', zIndex: '3' } : {}}>
      <IoClose className='hashCloseButton' onClick={newNote ? closehashtags : closeHashtagNote} />
      <input
        onChange={handleHashtagSubmit}
        value={createHashtag}
        type="text"
        className='createHashtag'
        placeholder='Add up to 9 characters #'
      />
      <hr className='hashtagBorderUp' />
      <HashtagShowroom
        hashtags={hashtags}
        setNotes={setNotes}
        notes={notes}
        id={id}
        deleteShowroomHashtag={deleteShowroomHashtag}
      />
      <button className='submitHastag' disabled={!createHashtag} onClick={updateHashtags}>Add</button>
    </div>
  );
};
export default HashtagStore