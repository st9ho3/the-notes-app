import React from 'react'
import { hashtagBodyClassMap, hashtagTextClassMap } from './constants/HashtagColors';

const HashtagShowroom = ({ hashtags }) => {
  return (
      <div className="hashtagShowroom">
          {hashtags.map((hashtag, index) => {
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
