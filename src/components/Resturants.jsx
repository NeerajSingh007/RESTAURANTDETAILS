import React, { useEffect, useState } from "react";
import Button from "./Button";
import Cards from "./Cards";
import Form from "./Form";
import axios from "axios";

const RestaurantDetails = () => {
   const [data, setData] = useState([]);
   const[page,setPage] =useState(1);

   const getData = async () => {
      let fetched = await fetch(`http://localhost:8080/resturants?_page${page}&_limit=5`);
      fetched = await fetched.json();
      setData([...fetched, ...data]);
      return fetched;
   };

   useEffect(() => {
      getData();
   }, [page]);

   return (
      <div>
         <Form />
         <Button getData={getData} setData={setData} data={data} />
         <button  disabled={page === 1} onClick={()=>setPage(page-1)}>PREV</button>
         <button   onClick={()=>setPage(page+1)}>NEXT</button>
         <Cards data={data} />
        
      </div>
   );
};

export default RestaurantDetails;