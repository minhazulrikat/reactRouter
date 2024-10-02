import React from 'react';
import { useState,useEffect } from 'react';

const Home = () => {
    const [store, setStore] = useState([]);
  
    useEffect(() => {
     (async()=>{
     let res = await fetch("https://dummyjson.com/products")
      let data = await res.json();
      setStore(data.products)
     })()
    }, []);
  
    return (
      <>
      <div className="container">
         <div className="row">
            <h1 className='my-5 text-center'>Here's some dummy JSON  </h1>
         {
          store.map((item,index)=>{
              return(
                  <div key={index} className="col-lg-4">
                      <div className="card">
                      <div className="card-header">
                          <h4>{item.title}</h4>
                      </div>
                      <div className="card-body">
                          <p>{item.description}</p>
                          <h5> Price: {item.price}$</h5>
                      </div>
                      </div>
                  </div>
              )
          })
         }
         </div>
      </div>
      </>
    );
  };

export default Home;