import React from "react";

const Buttons = ({ getData, setData }) => {
   

   const handleFilter = async (stars) => {
      let fetchedData = await getData();

      let filtered = fetchedData.filter((e) => {
         return e.rating >= stars;
      });
     
      setData(filtered);
   };

   

   const handlePayment = async (type) => {
      let fetchedData = await getData();

      let filtered = fetchedData.filter((e) => {
         return e.paymentMethods === type;
      });
      
      setData(filtered);
   };


   const handleSort = async (type) => {
      let fetchedData = await getData();

      if (type === 0) {
         let sorted = fetchedData.sort((a, b) => {
            return a.costforone - b.costforone;
         });
         
         let newData = [...sorted];
         setData(newData);
      } else {
         let sorted = fetchedData.sort((a, b) => {
            return b.costforone - a.costforone;
         });
         
         let newData = [...sorted];
         setData(newData);
      }
   };

   return (
      <div>
        

         <div className="allBtns">
           

            <div className="btnDiv">
               <h3>Sort as per rating:</h3>
               <button
                  className="oneBtn"
                  onClick={() => {
                     handleFilter(1);
                  }}
               >
                  1 star
               </button>
               <button
                  className="twoBtn"
                  onClick={() => {
                     handleFilter(2);
                  }}
               >
                  2 star
               </button>
               <button
                  className="threeBtn"
                  onClick={() => {
                     handleFilter(3);
                  }}
               >
                  3 star
               </button>
               <button
                  className="fourBtn"
                  onClick={() => {
                     handleFilter(4);
                  }}
               >
                  4 star
               </button>
            </div>

      

            <div className="btnDiv">
               <h3>Sort as per payment methods:</h3>
               <button
                  className="oneBtn"
                  onClick={() => {
                     handlePayment("Accepts card payments only");
                  }}
               >
                  Card
               </button>
               <button
                  className="twoBtn"
                  onClick={() => {
                     handlePayment("Accepts COD payments only");
                  }}
               >
                  COD
               </button>
               <button
                  className="threeBtn"
                  onClick={() => {
                     handlePayment("Accepts card and COD payments");
                  }}
               >
                  All
               </button>
            </div>

            

            <div className="btnDiv">
               <h3>Sort as per cost:</h3>
               <button
                  className="oneBtn"
                  onClick={() => {
                     handleSort(0);
                  }}
               >
                  
                  Low to High
               </button>
               <button
                  className="twoBtn"
                  onClick={() => {
                     handleSort(1);
                  }}
               >
               
               High to Low
               </button>
            </div>
         </div>
      </div>
   );
};

export default Buttons;