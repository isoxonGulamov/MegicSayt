import React from 'react'
import { BuyCart } from './buyCart'
import gif from "../../img/giphy.gif"
import { CountContext } from '../../korzinkaCount'
import { useContext } from 'react'

export const Buyproducts = () => {
  const {first,setfirst} = useContext(CountContext)
  console.log(first);
  let mahsulot = JSON.parse(localStorage.getItem("Products"))
  const [data, setdata] = React.useState(mahsulot)

  const deleteitem = (id) => {
    let el = data.filter((el) => el.id !== id)
    setdata((data) => el)
    localStorage.setItem("Products", JSON.stringify(el))

    
  }
  const [number, setnumber] = React.useState(0)
  const [allCount, setallCount] = React.useState()
  let all = 0
  let t = 20
  const AllPrice = (price, count, natija) => {
    let n = price * count
    React.useEffect(() => {
      setnumber(n)

    }, [count])

    all += natija
    console.log(all);
    React.useEffect(() => {
      setallCount(all)
    }, [all])
  }

  console.log(allCount);
  return (
    <div className='container'>
      <div>
        {!data.length ? <img className="gif" src={gif} alt="sdf" />
        :
        data?.map((el) => {
          return <BuyCart AllPrice={AllPrice} deleteitem={deleteitem} key={el.id} {...el} />
        })
        }
         <div className='Total__Box'>
          <h2 className='total__title'><span className='sp'>All Price:</span>{allCount}.000Uzs</h2>
          <h2 className='total__title'><span className='sp'>Delivery:</span>{t}.000Uzs</h2>
          <h2 className='total__title'><span className='sp'>Result:</span>{allCount + t}.000Uzs</h2>
          <h2 className='total__title'><span className='sp'>Company:</span>Ninja Developers 👈🏿</h2>
        </div>
      </div>
    </div>
  )
}
