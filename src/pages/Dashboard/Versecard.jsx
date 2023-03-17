
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';


export default function BasicCard() {
    const [verseText, setVerseText] = useState('');
   const [surah,setSurah] = useState('')
   const [ayah, setAyah] = useState('')

    useEffect(() => {
      axios.get('https://api.quran.com/api/v4/verses/random?language=en&words=true') //api request using the axios library
        .then(answer => {
          const words = answer.data.verse.words.sort((c, d) => c.position - d.position);
          const verseText = words.map(word => word.translation.text).join(' ');// translating to english from arabic,seperate by using space
        
          console.log(verseText);
          setVerseText(verseText);
          console.log(answer);
          const verseData = answer.data.verse.verse_key.split(':')
          setSurah(verseData[0])
          setAyah(verseData[1])
        
        
        })
        .catch(error => {
          console.log(error);
        });
    }, [])


  return (
    <Card variant="outlined" sx={{ width: 320 }}>
      <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
       {surah}:{ayah}
      </Typography>
      

      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img
         
         src="https://source.unsplash.com/featured/?birds,sky"
         srcSet="https://source.unsplash.com/featured/?birds,sky 1x, https://source.unsplash.com/featured/?birds,sky 2x"
         loading="lazy"
         alt=" birds in sky"
       
       
        />
      </AspectRatio>
      <Box sx={{ display: 'flex' }}>
        <div>
         
          <Typography fontSize="lg" fontWeight="lg">
            {verseText.split(' ').map((word) => (
        <span key={word.position}>{word} </span>

       

      ))} </Typography>

      <Typography fontSize="s" fontWeight="lg" color="primary" >
      <a href={`https://quran.com/${surah}?startingVerse=${ayah}`} target="_blank" >
        Open Quran
      </a>
        </Typography>

        

          
        </div>
     
      </Box>
    </Card>
  );
}