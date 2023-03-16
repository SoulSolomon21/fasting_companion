
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [verseText, setVerseText] = useState('');

  useEffect(() => {
    axios.get('https://api.quran.com/api/v4/verses/random?language=en&words=true') //api request using the axios library
      .then(response => {
        const words = response.data.verse.words.sort((c, d) => c.position - d.position);
        const verseText = words.map(word => word.translation.text).join(' ');

        console.log(verseText);
        setVerseText(verseText);
      })
      .catch(error => {
        console.log(error);
      });
  }, [])
  
  return (
    <div>
      <h1>Quran Verse of the Day</h1>
      {verseText.split(' ').map((word) => (
        <span key={word.position}>{word} </span>
      ))}
    </div>
  );
}




export default Dashboard