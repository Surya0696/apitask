import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './Cards.css'
const Cards = () => {
 
  const [Objects, setUsers] = useState([]); 

  const getUsers = async () => {
         const response = await fetch('https://api.xentice.com/api/postadSelect');
         
         setUsers(await response.json());
         
  }



  useEffect( () => {
   getUsers();
  }, []); 






  return (


    <>
    <section id='CardsApi'>
      <div className="container-fluid mt-5 mb-5">
            <h6>Commercial Shop</h6>
        <div className="row">
        
        {

        Objects.map((curElem) => {
          console.log(curElem)
          return(
            <div className="col-3 mt-5">
          <div className="card">
  {/* img */}
  <img src={curElem.images} className="card-img-top" alt="..."/>
  <div class="card-body">
  {/* title */}
    <h5 class="card-title">{curElem.userid}</h5>
  {/* location */}
    <p className="card-price">{curElem.location}</p>
  {/* pricelist */}
    <p class="card-text">{curElem.priceRange}</p>
  </div>
</div>
 </div>
          )

        })

        }

        
        </div>
      </div>
    </section>
    </>
  )
}

export default Cards