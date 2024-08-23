import React from 'react'
import { IoClose } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";

const SharedForm = ({handleInput, closeForm, handleSubmit, note}) => {
  return (
    <div className='sharedForm'>
      <div className='note'>
          <IoClose 
            className='closeButton'
            onClick={closeForm} />
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

          <select 
            name="Category" 
            className='categoryInput'
            onChange={handleInput}
            value={note.Category}
            
          >
            <option >Category</option>
            <option value="work">Work</option>
            <option value="home">Home</option>
            <option value="friends">Friends</option>
          </select>

          <textarea 
            name="Body"
            value={note.Body} 
            placeholder='Write your note...' 
            className='inputdescription'
            onChange={handleInput}
          >
          </textarea>

          <hr className='noteHr'/>

          <div className='important'>
            <input 
              name='Important'
              checked={note.Important}
              value={note.Important}
              type="checkbox" 
              id='checkbox'
              onChange={handleInput} 
            />
            <label htmlFor="checkbox">Important Note</label>
          </div>
          <button 
            className='postButton'
          >
            <IoMdAdd className='addsymbol'/> <span className='postText'>Post</span> 
          </button>
        </form>
        
      </div>
    </div>
  )
}

export default SharedForm
