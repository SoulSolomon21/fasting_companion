import React from 'react';
import "./Journal.css";

const Journal = () => {
   
    const addButton = document.getElementById('button');
    addButton.addEventListener('click', ()=> {
      addButton.createElement('textarea');
    });

  return (
    <>
     <body>
      <div id='feature' className="main">
       <button class="addNote" id="button">+</button>
      </div>
     </body>
    </>


  )
}

export default Journal
