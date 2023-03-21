import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import { useGlobalContext } from '../../context/Context'

export default function BasicCard() {
  const { surah, ayah, verseText } = useGlobalContext()

  return (
    <Card variant="outlined" sx={{ width: 320, margin: '0 auto' }}>
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
            {verseText.split(' ').map((word,index) => (
              <span key={index}>{word} </span>
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