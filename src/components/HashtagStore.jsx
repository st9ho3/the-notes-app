import React from 'react'
import HashtagShowroom from './HashtagShowroom';
import { IoClose } from "react-icons/io5";

const HashtagStore = ({closeHashtagStore, handleHashtagSubmit, createHashtag, hashtags, updateHashtags }) => {
  return (
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
            <HashtagShowroom
                hashtags={hashtags} />
            <button className='submitHastag' disabled={!createHashtag} onClick={updateHashtags}>Add</button>
        </div>
    
  )
}

export default HashtagStore
