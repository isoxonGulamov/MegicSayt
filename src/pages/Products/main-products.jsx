import React, { useState } from 'react'
import { data } from '../data';
import { useParams } from 'react-router-dom';
import { ProductsCart } from './productsCart';
import UncontrolledExample from '../../components/header/Slick/slick';
import { CountContext } from '../../korzinkaCount';
import { useContext } from 'react';
export const MainProducts = () => {
const {first,setfirst} = useContext(CountContext)
  const param = useParams()
  const [qiymat, setqiymat] = React.useState([])
  const [korzinka,setKorzinka] = useState(0)
  let arr = []
  for (let i of data) {
    if (i.by == param.id) {
      arr.push(i)
    }
  }
  React.useEffect(() => {
    setqiymat(arr)
  }, [])
  const setitem = (id,audio) => {

    for (let i of data) {
      if (i.id == id) {

        let arr = JSON.parse(localStorage.getItem("Products")) || []
        ///
        if (!arr.find(el => el.id === id)) {
            
          arr.push(i)
          setTimeout(() => {
            audio.play()
          }, 500);
          setfirst(first + 1)
          console.log(first);
        } else {
          alert("avval qo'shilgan")
        }
        localStorage.setItem("Products", JSON.stringify(arr))
        
      }
    }
    
  }

  console.log(qiymat);
  return (
    <div className='container'>
      <UncontrolledExample/>
      <div className='CartBox'>
        {qiymat?.map((el) => {
          return <ProductsCart setitem={setitem} key={el.id} {...el} />
        })}
      </div>
    </div>

  )
}
