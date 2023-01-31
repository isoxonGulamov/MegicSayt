import React from 'react'
import foodProducts from "../../../../img/Food Products.jpeg"
import { Button,Stack } from '@mui/material'
export const OcenFooods = () => {
  return (
    <div className='vegatables__box'>
    <div className='vegetables__content'>
      <h1 className='veget__title'>Ocean Foods
        100% Organic</h1>
        <p className='veget__text'>Free Pickup and Delivery Available</p>
        <Stack direction="row">
          <Button variant="contained">Shop Now</Button>
        </Stack>
    </div>
    <div className='vegatables__img'>
      <img className='veget__img' src={foodProducts} alt="vegatables" />
    </div>
  </div>
  )
}
