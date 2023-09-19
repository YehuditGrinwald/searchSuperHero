import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import { Hero } from '../../HerosContextProvider';


interface IProps {
    hero: Hero,
    buttons: any,
    displayMoreInfo?:boolean
}
const BasicCard = ({ hero, buttons,displayMoreInfo=false }: IProps) => {
    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );
    return (
        <Card sx={{ minWidth: 275, maxWidth: 259 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {hero.biography['full-name']}
                </Typography>
                <Typography variant="h5" component="div">
                    {bull} {hero.name}{bull}
                </Typography>
                <CardMedia
                    component="img"
                    height="194"
                    image={hero.image.url}
                    alt={hero.name}
                />
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {hero.biography.publisher}
                </Typography>
                {displayMoreInfo && <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {hero.biography['place-of-birth']}
                    {hero.biography['first-appearance']}
                    {hero.appearance.race}

                </Typography>}
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
                {buttons()}
            </CardActions>
        </Card>
    );
}

export default BasicCard;