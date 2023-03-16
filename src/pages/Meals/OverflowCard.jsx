import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';

export default function OverflowCard({name, link, imageThumb}) {
  return (
    <Card variant="outlined" sx={{ width: 320,mt: 2,mb: 2, ml:2 }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            src={imageThumb}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <Typography level="h2" sx={{ fontSize: 'md', mt: 2,mb: 2 }}>
        {name}
      </Typography>
      <Divider />
      <CardOverflow
        variant="soft"
        sx={{
          display: 'flex',
          gap: 1.5,
          py: 1.5,
          px: 'var(--Card-padding)',
          bgcolor: 'background.level1',
        }}
      >
        <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
          <a href={link} target='_blank'>View recipe</a>
        </Typography>
        {/* <Divider orientation="vertical" />
        <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
          1 hour ago
        </Typography> */}
      </CardOverflow>
    </Card>
  );
}