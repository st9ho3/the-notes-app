import React, { useEffect } from 'react'
import { hashtagBodyClassMap, hashtagTextClassMap } from './constants/HashtagColors';

const HashtagShowroom = () => {
    const gethashs = localStorage.getItem('Hashtags') ? JSON.parse(localStorage.getItem('Hashtags')) : []

  return (
      <div className="hashtagShowroom">
          {gethashs.map((hashtag, index) => {
              const firstLetter = hashtag[0].toLowerCase() 
              return (
                  <div key={index} className='hashtag'>
                      <div className={hashtagBodyClassMap[firstLetter] || null}></div>
                      <p className={hashtagTextClassMap[firstLetter] || null}> {hashtag} </p>
                  </div>
              );
          })}
      </div>
  )
}

export default HashtagShowroom
