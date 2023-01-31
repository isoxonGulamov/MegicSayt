import React from 'react'
import vegatales from "../../../../img/vegetables.png"
import { Button,Stack } from '@mui/material'
import { Link } from 'react-router-dom'
export const Vegetables = () => {
  return (
    <div className='vegatables__box'>
      <div className='vegetables__content'>
        <h1 className='veget__title'>Vegetable
          100% Organic</h1>
          <p className='veget__text'>Free Pickup and Delivery Available</p>
          <Stack direction="row">
            <Link to={"/MainProducts/veget"}><Button variant="contained">Shop Now</Button></Link>
          </Stack>
      </div>
      <div className='vegatables__img'>
        <img className='veget__img' src={vegatales} alt="vegatables" />
      </div>
    </div>
  )
}
