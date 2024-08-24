import React, { useEffect, useState } from 'react';
import { hashtagBodyClassMap, hashtagTextClassMap } from './constants/HashtagColors';
import { IoIosAdd } from "react-icons/io";
import HashtagStore from './HashtagStore';

const Hashtag = ({ hashtag }) => {
    const [open, setOpen] = useState(false);
    const [hashtags, setHashtags] = useState(() => localStorage.getItem('Hashtags') ? JSON.parse(localStorage.getItem('Hashtags')) : []);
    const [createHashtag, setHashtag] = useState('');
    
    const openHashtagStore = () => {
        setOpen(true);
    }
    const closeHashtagStore = () => {
        setOpen(false);
    }

    const handleHashtagSubmit = (e) => {
        setHashtag(e.target.value);
    }

    const updateHashtags = () => {
        setHashtags([...hashtags, createHashtag]);
        setHashtag('');
    }

    useEffect(() => {
        localStorage.setItem('Hashtags', JSON.stringify(hashtags));
    }, [hashtags]);

    return (
        <div className='hashtagArea'>
            {hashtag 
            && hashtag !== "- Category -" 
            && <div className='hashtag'>
                <div className={hashtagBodyClassMap[hashtag[0].toLowerCase()] || null}></div>
                <p className={hashtagTextClassMap[hashtag[0].toLowerCase()] || null}> {hashtag} </p>
            </div>}
            <div onClick={openHashtagStore} className="addHashtag">
                <IoIosAdd className='addHastagButton' />
            </div>
            {open && 
                <HashtagStore
                closeHashtagStore={closeHashtagStore}
                handleHashtagSubmit={handleHashtagSubmit}
                createHashtag={createHashtag}
                hashtags={hashtags}
                updateHashtags={updateHashtags} />
            }
        </div>
    );
}

export default Hashtag;