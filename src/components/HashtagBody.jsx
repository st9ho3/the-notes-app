import React from 'react';
import { hashtagBodyClassMap, hashtagTextClassMap } from './constants/HashtagColors';
import { IoClose } from "react-icons/io5";

const HashtagBody = ({ hashtag, hashtagClick, index }) => {
    // Check if hashtag is defined and not empty
    if (!hashtag) return null;

    const firstLetter = hashtag.body[0]?.toLowerCase() || '';  // Safe access using optional chaining

    return (
        <div className='hashtag' onClick={() => hashtagClick(hashtag.id)}>
            <IoClose className='hashtagBodyCloseButton' />
            <div className={hashtagBodyClassMap[firstLetter] || ''}></div>
            <p className={hashtagTextClassMap[firstLetter] || ''}> {hashtag} </p>
        </div>
    );
};

export default HashtagBody;
