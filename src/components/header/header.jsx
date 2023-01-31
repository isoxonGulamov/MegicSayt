
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import olma from "../../img/Help.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./header.scss"
import Badge from '@mui/material/Badge';
import { Favorite } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import {CountContext} from "../../korzinkaCount"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export const Header = () => {
const {first} = useContext(CountContext)
console.log(first);
  return (
    <>

      <div className="container">
        <div className="header__box">
          <div className='Header-box'>
            <div className='logo_ox'>
              <img src={olma} alt="" />
            </div>
            <div className='menu__box'>
              <ul className='header__list'>
                <li className='header__item'><Link className='link' to={"/home"}>Home👈🏿</Link></li>
                <li className='header__item'><Link className='link' to={"/about"}>About</Link></li>
                <li className='header__item'><Link className='link' to={"/contact"}>Contact</Link></li>
                <li className='header__item'>Bags</li>
                <li className='header__item'></li>
              </ul>
            </div>
            <div className='icon__box'>
              <span className='icon'>
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                    <Favorite />
                  </StyledBadge>
                </IconButton>
              </span>
              <Link to={"/BuyProducts"}>
                <span className='icon'>
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={first} color="secondary">
                      <ShoppingCartIcon />
                    </StyledBadge>
                  </IconButton>
                </span>
              </Link>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}


