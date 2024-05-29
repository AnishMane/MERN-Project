import React from 'react'
import { useEffect, useState } from 'react';

const Read = () => {

  const [data, setData] = useState();
  const [error,setError] = useState("");


  async function getData()
  {
    const response = await fetch("http://localhost:5000");

    const result = await response.json();

if(!response.ok)
  {
    console.log(result.error);
    setError(result.error)
  }
  else{
    setError("");
    setData(result);
  }
  }
  useEffect(()=>{
      getData();
  },[]);

  console.log(data)

  return (
    <div className='container my-2'>
        <h2 className='text-center'>All data</h2>

        <div className='row'>
        {data.map((ele)=>{
          <div key={ele._id} className='col-3'>
          <div className="card">
  <div className="card-body">
    <h5 className="card-title">{ele.name}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
    <p classNameName='text-muted'> {ele.age}</p>
    <a href="#" className="card-link">Delete</a>
    <a href="#" className="card-link">Edit</a>
  </div>
</div>
          </div>
        })}
          
        </div>
    </div>
  )
}

export default Read