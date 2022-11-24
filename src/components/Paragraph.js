import React, { useState } from 'react';
import './Paragraph.css'
import './Style.css'


export default function Paragraph() {
  const [count, setCount] = useState(0);
  return (
      <div className='inner-div'>
        <div className='para'>
          <h1>I am para</h1>
          <p className='para-text'> sdbvucbdshvbdsbvjksdnzkvnzkjvbkjfbvkdbfkvbdfnvdnflvnflkjbnkdf</p>
        <div className="slideshow-container">
          {/* <div className="mySlides fade">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW_CeO5YPV3_A5znkG_6nOclWW1jOfg78txQ&usqp=CAU" />
          <div className="text">Caption Text</div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW_CeO5YPV3_A5znkG_6nOclWW1jOfg78txQ&usqp=CAU" />
          <div className="text">Caption Text</div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW_CeO5YPV3_A5znkG_6nOclWW1jOfg78txQ&usqp=CAU" />
          <div className="text">Caption Text</div> */}
            <button onClick={() => setCount(count + 1)}>
            Count
            </button> 
            <div>{count}</div>
            <button onClick={() => setCount(count + -1)}>
            Undo 
            </button>
          </div>
          </div>
        </div>
      // </div>
  )
  
}
