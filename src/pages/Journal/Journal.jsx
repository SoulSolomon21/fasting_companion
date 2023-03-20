import React, { createElement, useState } from 'react';
import "./Journal.css";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import CreateNote from './CreateNote';
import Note from './Note';

const Journal = () => {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState('');
  const textHandler = (e)=> {
    setInputText(e.target.value);
  }
  const saveHandler = () =>{
    setNotes((prevState) => [
      ...prevState,
      {
        id:uuid()
        text: inputText,
      },
    ]);
    //clear
    setInputText('');
  };
  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note)=> note.id !==id);
    setNotes(filteredNotes);
  };
  return (
    <div className='notes'>
     {notes.map((note)=>(
      <Note
        key={note.id}
        id={note.id}
        text={note.text}
        deleteNote={deleteNote}
      />
     ))}
     <CreateNote
       textHandler={textHandler}
       saveHandler={saveHandler}
       inputText={inputText}
     />
    </div>
    )
}

export default Journal