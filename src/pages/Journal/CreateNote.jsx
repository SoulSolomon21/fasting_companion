import { React } from "react";
import { LinearProgress } from "@mui/material";
import { useGlobalContext } from "../../context/Context";

function CreateNote({ textHandler, saveHandler, inputText, quoteVerse, verseData }) {
  const { surah, ayah } = useGlobalContext()

  const charLimit = 500
  const charLeft = charLimit - inputText.length
  const charProgress = (charLeft / charLimit) * 100
  return (
    <div className="note" style={{ background: 'rgba(255,255,255,0)' }}>
      <div className="note__verse">
        <a href={`https://quran.com/${surah}?startingVerse=${ayah}`} target="_blank" >
          {verseData}
        </a>
      </div>
      <textarea
        cols="10"
        rows="5"
        maxLength='500'
        placeholder='Type....'
        value={inputText}
        onChange={textHandler}
      ></textarea>
      <div className="note__footer">
        <span className="label">{charLeft} left</span>
        <button className="note__save" onClick={quoteVerse}>
          Qoute Verse
        </button>
        <button className="note__save" onClick={saveHandler}>
          Save
        </button>
      </div>
      <LinearProgress
        className='char__progress'
        variant='determinate'
        value={charProgress}
      />
    </div>
  )
}

export default CreateNote