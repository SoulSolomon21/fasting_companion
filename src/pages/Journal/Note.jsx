import React from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { useGlobalContext } from "../../context/Context";

function Note({ id, text, deleteNote, verseData }) {
  const { surah, ayah } = useGlobalContext()
  return (
    <div className="note">
      <div className="note__verse">
        <a href={`https://quran.com/${surah}?startingVerse=${ayah}`} target="_blank" >
          {verseData}
        </a>
      </div>
      <div className="note__body">{text}</div>
      <div className="note__footer" style={{ justifyContent: 'flex-end' }}>
        <DeleteForeverOutlinedIcon
          className='note__delete'
          aria-hidden='true'
          onClick={() => deleteNote(id)}
        ></DeleteForeverOutlinedIcon>
      </div>
    </div>
  )
}

export default Note