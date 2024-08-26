import React from 'react';
import { IoClose } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import HashtagStore from './HashtagStore';

const SharedForm = ({ handleInput, closeForm, handleSubmit, note, openhashtags, openNoteFormHashtags, closehashtags, newNote, setNotes }) => {
  return (
    <div className='sharedForm'>
      <div className='note'>
        <IoClose className='closeButton' onClick={closeForm} />
        <form onSubmit={handleSubmit} className='create'>
          <input
            required
            name='Title'
            value={note.Title}
            type="text"
            className='inputTitle'
            placeholder='Enter a title'
            onChange={handleInput}
          />
          <textarea
            name="Body"
            value={note.Body}
            placeholder='Write your note...'
            className='inputdescription'
            onChange={handleInput}
          ></textarea>
          <hr className='noteHr' />
          <div className='important'>
            <input
              name='Important'
              checked={note.Important}
              type="checkbox"
              id='checkbox'
              onChange={handleInput}
            />
            <label htmlFor="checkbox">Important Note</label>
          </div>
          <button className='postButton'>
            <IoMdAdd className='addsymbol' /> <span className='postText'>Post</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SharedForm;
