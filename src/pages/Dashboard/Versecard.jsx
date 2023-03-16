
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import React,{useState, useEffect} from 'react';
import axios from 'axios';

import Card from '@mui/joy/Card';

import Typography from '@mui/joy/Typography';


export default function BasicCard() {
    const [verseText, setVerseText] = useState('');

    useEffect(() => {
      axios.get('https://api.quran.com/api/v4/verses/random?language=en&words=true') //api request using the axios library
        .then(response => {
          const words = response.data.verse.words.sort((c, d) => c.position - d.position);
          const verseText = words.map(word => word.translation.text).join(' ');// translating to english from arabic,seperate by using space
  
          console.log(verseText);
          setVerseText(verseText); // function for Updating the state
        })
        .catch(error => {
          console.log(error);
        });
    }, [])






  return (
    <Card variant="outlined" sx={{ width: 320 }}>
      <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
        Verse of the day
      </Typography>
      

      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img
          src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
          srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <Box sx={{ display: 'flex' }}>
        <div>
         
          <Typography fontSize="lg" fontWeight="lg">
            {verseText.split(' ').map((word) => (
        <span key={word.position}>{word} </span>
      ))}
          </Typography>
        </div>
     
      </Box>
    </Card>
  );
}