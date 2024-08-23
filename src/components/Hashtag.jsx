import React, { useEffect, useState } from 'react';
import { hashtagBodyClassMap, hashtagTextClassMap } from './constants/HashtagColors';
import { IoIosAdd } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Hashtag = ({ hashtag }) => {
    const [open, setOpen] = useState(false);
    const openHashtagStore = () => {
        setOpen(true);
    }
    const closeHashtagStore = () => {
        setOpen(false);
    }


    const [hashtags, setHashtags] = useState(localStorage.getItem('Hashtags') ? JSON.parse(localStorage.getItem('Hashtags')) : []);
    const [createHashtag, setHashtag] = useState('');

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
                <div className='hashtagStore'>
                  <IoClose 
                    className='hashCloseButton'
                    onClick={closeHashtagStore} />
                    <input
                        onChange={handleHashtagSubmit}
                        value={createHashtag} 
                        type="text" 
                        className='createHashtag'
                        placeholder='Add a hashtag #' 
                    />
                    <hr className='hashtagBorderUp' />
                    
                    <div className="hashtagShowroom">
                        {hashtags.map((hashtag, index) => {
                            const firstLetter = hashtag[0].toLowerCase();

                            return (
                                <div key={index} className='hashtag'>
                                    <div className={hashtagBodyClassMap[firstLetter] || null}></div>
                                    <p className={hashtagTextClassMap[firstLetter] || null}> {hashtag} </p>
                                </div>
                            );
                        })}
                    </div>
                    <button className='submitHastag' disabled={!createHashtag} onClick={updateHashtags}>Add</button>
                </div>
            }
        </div>
    );
}

export default Hashtag;