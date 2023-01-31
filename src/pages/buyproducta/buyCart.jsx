import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Button } from '@mui/material';
import { Delete } from '@mui/icons-material';
export const BuyCart = ({ name, id, price, title, img, raiting,deleteitem,AllPrice}) => {
  const [count, setcount] = React.useState(1)
  const [l,setl] = React.useState(0)
  const Plus = () => {
    setcount((p) => {
      return p + 1
    })
  }
  const Minus = () => {
    setcount((p) => {
      return p - 1
    })
    if (count <= 1 ) {
      deleteitem(id)
    }
  }
  let natija = price*count
AllPrice(price,count,natija)

  return (
    <div className='BuyCart'>
      <img className='BuyCart__Img' src={img} alt="ald" />
      <div className='BuyCart__content'>
        <h3 className='BuyCart__title'>{name}</h3>
        <span className='BuyCart__baho'>{title}</span>
        <span>{raiting}</span>
        <p className='price'>{price}.000 Uzs</p>
      </div>
      <div className='BuyCart__btn'>
        <Button onClick={Plus} variant="outlined">
          <AddCircleOutlineIcon />
        </Button>
        <span className='Icrement'>{count}</span>
        <Button onClick={Minus} variant="outlined">
          <RemoveCircleOutlineIcon />
        </Button> <br />
        <p className='total'>Total:{natija}.000 Uzs</p>
        <div className='delete'>
          <Button onClick={()=>deleteitem(id)} variant="outlined" color="error" startIcon={<Delete />}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  )
}
