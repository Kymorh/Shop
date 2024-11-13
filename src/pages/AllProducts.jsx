import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export function AllProducts() {
  const [products, setProducts] = useState()

  useEffect(() => {
    fetch('//dummyjson.com/products?limit=200')
      .then(res => res.json())
      .then(res => setProducts(res.products))

  }, [])

  return (
    <>
      <div className="grid grid-cols-3 gap-4 ">
        {products?.map(el => <div className=' bg-gray-950/20 p-[15px] rounded-xl'>
          <img width="300px" src={el?.thumbnail} alt="" />
          <h4>{el.title}</h4>
          <div className='bot flex justify-between'>
            <span className="price">$ {el?.price}</span>
           <Link to={`/product/${el?.id}`}><button>Buy</button></Link> 
          </div>


        </div>)}

      </div>
    </>
  )
}




