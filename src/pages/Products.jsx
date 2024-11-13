import { Link } from 'react-router-dom'
export const Products = () => {
    const id = Math.floor(Math.random()*130)
    return (
        <div className='m-auto flex gap-2 hover:text-violet-600'>
            <Link to="/product/6" className=' text-red-200' >Product</Link> 
            <ul className='flex gap-2 text-red-200 '>
                <li><Link to="/product/1" className=' text-red-200'>1</Link> </li>
                <li><Link to="/product/10" className=' text-red-200' >10</Link></li>
                <li><Link to="/product/125" className=' text-red-200' >125</Link></li>
                <li><Link to={`/product/${id}`} className=' text-red-200' >{id}</Link></li>
            </ul>       
            
            
            
            </div>
            
    )

}
