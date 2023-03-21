import React from 'react';
import './Journal.css';
import Header from './Header';
import Notes from './Notes';

function Journal() {
  return (
    <div className='Journalmain'>
      <Header />
      <Notes />
    </div>
  );
}

export default Journal;