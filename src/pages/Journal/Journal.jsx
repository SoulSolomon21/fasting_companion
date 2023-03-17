import React, { createElement, useState } from 'react';
import "./Journal.css";

const Journal = () => {
  return (
    <>
     <body>
      <ul class='ulstyle'>
        <li class='listyle'>
          <a class='astyle' href ="#" contentEditable>
            <h2 class='h2style'> Week #1 </h2>
            <p class='pstyle'> Your Thoughts </p>
          </a>
        </li>
        <li class='listyle'>
          <a class='astyle' href= "#" contentEditable>
            <h2 class='h2style'> Week #2 </h2>
            <p class='pstyle'> Your Thoughts </p>
          </a>
        </li>
        <li class='listyle'>
          <a class='astyle'  href = "#" contentEditable>
            <h2 class='h2style'> Week #3 </h2>
            <p class='pstyle'> Your Thoughts </p>
          </a>
        </li>
        <li class='listyle'>
          <a class='astyle' href="#" contentEditable>
            <h2 class='h2style'> Week #4 </h2>
            <p class='pstyle'> Your Thoughts </p>
          </a>
        </li>
        </ul>
     </body>
    </>


  )
}

export default Journal