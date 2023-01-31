import React from 'react'
import meat from "../../../../img/fresh meat.webp"
import { Button,Stack } from '@mui/material'
import { Link } from 'react-router-dom'
export const MenuPage = () => {
  const f = ()=>{
 console.log("sdd");
  }
  return (
    <div className='vegatables__box'>
      <div className='vegetables__content'>
        <h1 className='veget__title'>Fresh Meat
          100% Organic</h1>
          <p className='veget__text'>Free Pickup and Delivery Available</p>
          <Stack direction="row">
            <Link to={"/MainProducts/meat"}><Button onClick={f} variant="contained">Shop Now</Button></Link>
          </Stack>
      </div>
      <div className='vegatables__img'>
        <img className='veget__img' src={meat} alt="vegatables" />
      </div>
    </div>
  )
}
