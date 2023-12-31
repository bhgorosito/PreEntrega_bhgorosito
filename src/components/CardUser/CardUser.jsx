import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const CardUser = (props) => {
  return (
    <Card sx={{ width: 150 }}>
      <CardActionArea>
        <CardMedia
          component="img" 
          image={props.img}
          alt="Products"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
            </Typography>
            <Typography variant="caption" color="text.secondary">
            {props.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardUser;