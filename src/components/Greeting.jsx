import React from 'react';

const Greeting = () => {
  return (
    <div>
      <h1 className='hello'>Hello,</h1>
      <img 
        src='./images/hand.png' 
        alt='hand-icon' 
        className='handIcon' 
      />
      Panos. <br />
      <span>How are you</span> <br />
      <span className='today'>today</span>
      <span className='questionMark'>?</span>
    </div>
  );
};

export default Greeting;
