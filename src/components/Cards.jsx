import React from 'react'

const Cards = ({data}) => {
  return (
    <div className='conTainer'>
      {data.map((e) => {
        return(
            <div className='card'>
                <div className='upper'>
                <div className='imageCont'>
                        <img src={e.image} alt=""/>
                </div>
             <div className='data'>
              <p className='name'>{e.name}</p>
              <p className='cat'>{e.cat}</p>
              <p className='cost'>{e.costforone}</p>
              <p className='payment'>{e.paymentMethods}</p>

             </div>
             <div className='ratingcont'>
              <p> Rating : {e.rating}</p>
              <p>Votes : {e.votes} </p>
              <p>Reviews : {e.reviews} </p>
               </div>
                </div>

              <div>
              <p>Order</p>

              </div>


            </div>
        )
      })}
    </div>
  );
};

export default Cards
