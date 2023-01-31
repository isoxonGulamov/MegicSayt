import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import "./home.scss"
import hero1 from "../../img/hero1.png"
import hero2 from "../../img/hero2.png"
import hero3 from "../../img/hero3.png"
import hero4 from "../../img/hero4.png"
import Button from '@mui/material/Button';
import { HomeCart } from './Home_Cart'
import { data2 } from '../data2'
export const Home = () => {
  const [alignment, setAlignment] = React.useState('web');
const [card,setcard] = React.useState(data2)
console.log(card);
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  
  };
  const setitem = (id,audio) => {

    for (let i of data2) {
      if (i.id == id) {

        let arr = JSON.parse(localStorage.getItem("Products")) || []
        ///
        if (!arr.find(el => el.id === id)) {

          arr.push(i)
          setTimeout(() => {
            audio.play()
          }, 500);

        } else {
          alert("avval qo'shilgan")
        }
        localStorage.setItem("Products", JSON.stringify(arr))

      }
    }
   
  }

  return (
    <div className='container'>
      <div className='hero__box'>
        <div className='hero__navbar'>
          <Link className='link2' to={"/home"}>Fresh Meat</Link>
          <Link className='link2' to={"/home/vegetables"}>Vegetables</Link>
          <Link className='link2' to={"/home/fruits"}>Fruits</Link>
          <Link className='link2' to={"/home/freshberries"}>Food products</Link>
          <Link className='link2' to={"/home/oceanfoods"}>Ocean Foods</Link>
          <Link className='link2' to={"/home/fastfood"}>Fast Food</Link>
          <Link className='link2' to={"/home/water"}>Waters</Link>
        </div>
        <div className='Outlet__Box'>
          <Outlet />
        </div>
      </div>
      <div className='hero__bottom'>
        <div className="glassBox">
          <div className="glassBox__imgBox">
            <img src={hero1} alt="d"/>
            <h3 className="glassBox__title">Fresh Fruit</h3>
          </div>
          <div className="glassBox__content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt veniam adipisci fugit qui quaerat!</div>
        </div>
        <div className="glassBox">
          <div className="glassBox__imgBox">
            <img src={hero2} alt="" />
            <h3 className="glassBox__title">Dried Fruit</h3>
          </div>
          <div className="glassBox__content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt veniam adipisci fugit qui quaerat!</div>
        </div>
        <div className="glassBox">
          <div className="glassBox__imgBox">
            <img src={hero3} alt="" />
            <h3 className="glassBox__title">Vegetables</h3>
          </div>
          <div className="glassBox__content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt veniam adipisci fugit qui quaerat!</div>
        </div>
        <div className="glassBox">
          <div className="glassBox__imgBox">
            <img src={hero4} alt="" />
            <h3 className="glassBox__title">Drink Fruits</h3>
          </div>
          <div className="glassBox__content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt veniam adipisci fugit qui quaerat!</div>
        </div>
      </div>
      <div className='Natural'>
        <div className='Natural__1'>
          <div className='Natural__content'>
            <h2 className='Natural__title'>Summer Fruits
            </h2>
            <p className='Natural__text'> 100% all natural fruit juice</p>
            <Link to={"/MainProducts/fruit"}>
              <Button variant="contained" color="primary">
                Shop Now
              </Button>
            </Link>

          </div>
        </div>
        <div className='Natural__2'>
          <div className='Natural__content'>
            <h2 className='Natural__title'>Dried & Drink Fruits
            </h2>
            <p className='Natural__text'> 100% all natural fruit juice</p>
            <Link to={"/MainProducts/water"}>
              <Button variant="contained" color="primary">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className='Card'>
       {
       card?.map((el)=>{
       return <HomeCart setitem={setitem} {...el}/>
       })
       }
      </div>
    </div>
  )
}
