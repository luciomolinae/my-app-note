import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { dividerClasses } from '@mui/material';
import './Item.css';
import ItemCount from './ItemCount';


const Item = (props) => {
  const { id, name, price, modelo, img, size } = props.productData;
  
  const onAdd = (count) => {
        
  };
  return (

    
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={img}
        alt="camiseta"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {modelo}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">$ {price}</Button>
        <Button size="small">{size}</Button>
      </CardActions>
      <ItemCount stock={5} initial={1} onAdd={onAdd} />
    </Card>
   
  ) 
};

export default Item;


  