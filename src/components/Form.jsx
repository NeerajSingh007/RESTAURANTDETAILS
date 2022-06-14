import React,{useState} from 'react'


const Form = () =>{
    const [form , setForm] = useState({
        name:"",
        cat:"",
        costforone:"",
        paymentMethods:"",
        rating:"",
        votes:"",
        reviews:"",
        image:"",
    });

 const handleChange = (e) =>{
     const {name,value} = e.target;

     setForm({
         ...form,
         [name] : value,
     });
 };

const handleSubmit = (e) =>{
    fetch("http://localhost:8080/resturants",{
        method : "POST",
        headers:{
            "content-type": "application/json",
        },
        body: JSON.stringify(form),
    });
};
return (
    <div>
        <div className='formCont'>
            <h1> Enter Resturant Details</h1>
            <form   onSubmit={handleSubmit} className="form">
            <input onChange={handleChange} type="text" name="name" placeholder='Enter Name'/>
                <input onChange={handleChange} type="text" name="cat" placeholder='Enter Category'/>
                <input  onChange={handleChange} type="text" name="costforone" placeholder='Enter Price'/>
                <select onChange={handleChange} name="paymentMethods">
                    <option value="">Payment Methods</option>
                    <option value ="Accepts Card and COD Payments">
                    Accepts Card and COD Payments
                    </option>
                    <option value ="Accepts Card  Payments Only">
                    Accepts Card  Payments Only
                    </option>
                </select>
                <input onChange={handleChange} type='text' name='rating' placeholder='Enter Rating'></input>
                <input onChange={handleChange} type='text' name='votes' placeholder='Number of Votes'></input>
                <input onChange={handleChange} type='text' name='reviews' placeholder='Number of Reviews'></input>
                <input onChange={handleChange} type='text' name='image' placeholder='Enter url'></input>
                <input type="submit" className='submit'/>
                </form>
        </div>
         </div>
);
};

export default Form;