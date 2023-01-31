import React from 'react'
import "../../../src/App.css"
import { Shop } from '@mui/icons-material'
import { Button,IconButton,Stack, } from '@mui/material'
import ringer from "../../img/b1.mp3"
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export const ProductsCart = ({ name, img, price, id, title, raiting, setitem }) => {
  const audio = new Audio(ringer)
  return (
    <div className="ProducCart">

      <img className="producImg" src={img} alt="dsd" />
      <div>
      <Checkbox className='chekbox' {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
      <Checkbox className='chekbox'
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
    </div>
      <div className='content'>
        <h1 className="produc-title">{name}</h1>
        <span className="produc__baho">{title}</span>
        <span>{raiting}</span>
        <div className="btn__box">
          <h2 className="produc-price">{price}.000 Uzs</h2>
          <Stack direction="row" spacing={2}>
            <Button onClick={() => setitem(id,audio)} variant="contained" color="success" startIcon={<Shop/>}>
              Buy
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  )
}
