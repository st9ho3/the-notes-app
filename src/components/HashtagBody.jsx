import React from 'react';
import { hashtagBodyClassMap, hashtagTextClassMap } from './constants/HashtagColors';
import { IoClose } from "react-icons/io5";

const HashtagBody = ({ text, hashtagClick, firstLetter, id, deleteShowroomHashtag, hashtagStoreIsOpen }) => {
    return (
        <div className='showroomhashtag'>
            <IoClose
                className='hashtagBodyCloseButton'
                onClick={() => deleteShowroomHashtag(id)}
            />
            <div className='hashtag' onClick={() => hashtagClick(id)}>
                <div className={hashtagBodyClassMap[firstLetter] || ''}></div>
                <p className={hashtagTextClassMap[firstLetter] || ''}>
                    {text}
                </p>
            </div>
        </div>
    );
};

export default HashtagBody;
