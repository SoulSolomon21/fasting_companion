import React, { createElement, useState } from 'react';
import "./Journal.css";

const Journal = () => {

  all_notes = $('li a'); //$ is a shortcut or other meaning for jQuery function
  
  all_notes.on('keyup', function() {
    note_title = $(this).find('h2').text();
    note_content = $(this).find('p').text();

    item_key = 'list_'+$(this).parent().index();

    data = {
      title:note_title,
      content: note_content
    };
    window.localStorage.setItem(item_key, JSON.stringify(data));
  });

  return (
    <div>
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
    </div>
  )
}

export default Journal