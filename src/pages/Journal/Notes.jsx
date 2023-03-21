import { React, useState, useEffect } from "react";
import { v4 as uuid } from 'uuid';
import "./Note.css";
import Note from "./Note"
import CreateNote from './CreateNote';
import Header from "./Header";
import { useGlobalContext } from '../../context/Context'

function Notes() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || [])
  const [inputText, setInputText] = useState('')
  const [verseData, setVerseData] = useState('')

  const { verseText, surah, ayah } = useGlobalContext()

  const textHandler = e => {
    setInputText(e.target.value)
  }

  const saveHandler = () => {
    setNotes((prevState) => [
      ...prevState,
      {
        id: uuid(),
        verseData: verseData,
        text: inputText,
      },
    ])
    setInputText('')
    setVerseData('')
  }

  const quoteVerse = () => {
    setVerseData(`${surah}:${ayah}`)
  }

  const deleteNote = id => {
    const filteredNotes = notes.filter((note) => note.id !== id)
    setNotes(filteredNotes)
  }

  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem('notes', JSON.stringify(notes))
    }
  }, [notes])

  return (
    <>
      <div id='verse'>
        {verseText.split(' ').map((word, index) => (
          <span key={index}>{word} </span>
        ))}
      </div>
      <div className="notes">
        {notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            deleteNote={deleteNote}
            verseData={note.verseData}
          />
        ))}
        <CreateNote
          textHandler={textHandler}
          saveHandler={saveHandler}
          inputText={inputText}
          quoteVerse={quoteVerse}
          verseData={verseData}
        />
      </div>
    </>
  )
}

export default Notes