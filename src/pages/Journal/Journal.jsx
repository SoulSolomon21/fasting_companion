import React, { createElement, useState } from 'react';
import "./Journal.css";
import CreateNote from './CreateNote';
import Notes from './Notes';


const Journal = () => {

  return (
    <div className='Journalmain'>
      <Notes/>
      <CreateNote/>
    </div>
    )
}

export default Journal