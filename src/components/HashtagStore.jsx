import React, { useState } from 'react';
import HashtagShowroom from './HashtagShowroom';
import { IoClose } from "react-icons/io5";

const HashtagStore = ({ openNoteFormHashtags, closehashtags, setNotes, newNote, setHashtagStoreIsOpen }) => {
  const [hashtags, setHashtags] = useState(() => {
    const savedHashtags = localStorage.getItem('Hashtags');
    return savedHashtags ? JSON.parse(savedHashtags) : [];
  });
  const [createHashtag, setHashtag] = useState('');

  const handleHashtagSubmit = (e) => {
    setHashtag(e.target.value);
  };

  const updateHashtags = () => {
    const arr = localStorage.getItem('Hashtags') ? JSON.parse(localStorage.getItem('Hashtags')) : [];
    arr.push(createHashtag);
    setHashtags([...hashtags, createHashtag]);
    localStorage.setItem('Hashtags', JSON.stringify(arr));
    setHashtag('');
  };

  const closeHashtagNote = () => {
    setNotes(prevNotes => prevNotes.map(n => ({ ...n, HashtagOpen: false })));
    setHashtagStoreIsOpen(false)
    
  };

  return (
    <div className='hashtagStore' style={openNoteFormHashtags ? { position: 'absolute', top: '1rem', zIndex: '3' } : {}}>
      <IoClose className='hashCloseButton' onClick={newNote ? closehashtags : closeHashtagNote} />
      <input
        onChange={handleHashtagSubmit}
        value={createHashtag}
        type="text"
        className='createHashtag'
        placeholder='Add a hashtag #'
      />
      <hr className='hashtagBorderUp' />
      <HashtagShowroom hashtags={hashtags} />
      <button className='submitHastag' disabled={!createHashtag} onClick={updateHashtags}>Add</button>
    </div>
  );
};

export default HashtagStore;
