
import { Link, useParams } from "react-router-dom";
import "./App.css";
import React, { useState, useEffect } from "react";


function App() {
  
  const [data, setData] = useState([]);
  const {id} = useParams()
  const fetchInfo = () => {
  const url = `https://dummyjson.com/products/${id}`
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
  }
  console.log(data)

  useEffect(() => {
    fetchInfo();
  }, []);

  return ( 
  <div className="all">
  <Link to="/" className="mb-20">⌂</Link>
    <div className="m-auto flex flex-col bg-gray-950/20 p-[15px] rounded-xl">
       
         <img width="300px" src={data?.thumbnail} alt=""/>
      <span className="price">$ {data?.price}</span>
       <span className="title"> {data?.title}</span>
       <span className="dis"> {data?.discription}</span>
       {/* <span>{data?.}</span> */}
       <button className="but">Buy now</button>

    </div> </div>
  );
}

export default App;