import React from 'react'
import fruits from "../../../../img/fruit.jpg"
import { Button,Stack } from '@mui/material'
import { Link } from 'react-router-dom'
export const Fruit = () => {
  return (
    <div className='vegatables__box'>
      <div className='vegetables__content'>
        <h1 className='veget__title'>Fruits
          100% Organic</h1>
          <p className='veget__text'>Free Pickup and Delivery Available</p>
          <Stack direction="row">
            <Link to={"/MainProducts/fruit"}><Button variant="contained">Shop Now</Button></Link>
          </Stack>
      </div>
      <div className='vegatables__img'>
        <img className='veget__img' src={fruits} alt="vegatables" />
      </div>
    </div>
  )
}
