import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import user from '../../public/user4.png'
const Marks = () => {

const location = useLocation();
  const { username } = location.state || {};
  const [mark1,setmark1]=useState('');
  const [mark2,setmark2]=useState('');
  const [mark3,setmark3]=useState('');
  const [mark4,setmark4]=useState('');
  const [mark5,setmark5]=useState('');
  const [total,settotal]=useState(0);
  function totalcal()
  {
    const dtotal = parseFloat(mark1) + parseFloat(mark2) + parseFloat(mark3) + parseFloat(mark4) + parseFloat(mark5);
    settotal(isNaN(dtotal) ? 0 : dtotal);
  }
  return (
    
    <div className='marks'>
        <div className='user'>
            <img src={user}></img>
           <h1>Hello {username}!</h1>
        <div className='userdiv'>
           <h2>Welcome back,</h2>
          <p>Email: {username}@bitsathy.com</p>
           <button>Logout</button>
        </div>
        </div>
      <div className='markcontent'>
        <label>
            Mark1 <input placeholder='Enter your marks for 100'
            type='number'
            value={mark1}
            onChange={(e)=> setmark1(e.target.value) }/>
        </label>
        <label>
            Mark2 <input  placeholder='Enter your marks for 100'
            value={mark2}
            type='number'
            onChange={(e)=>setmark2(e.target.value)}/>
        </label>
        <label>
            Mark3 <input  placeholder='Enter your marks for 100'
            type='number'
            value={mark3}
            onChange={(e)=>setmark3(e.target.value)}/>
    
        </label>
        <label>
            Mark4 <input  placeholder='Enter your marks for 100'
            type='number'
            value={mark4}
            onChange={(e)=>setmark4(e.target.value)}
            />
        </label>
        <label>
           Mark5 <input  placeholder='Enter your marks for 100'
           type='number'
           value={mark5}
           onChange={(e)=>setmark5(e.target.value)}/>
        </label>
        <button onClick={totalcal}>Calculate Total</button>
        Total:{total}
      </div>
      <div className='userdiv2'>
      <h3>Your Recent Marks:</h3>
    <p>Mark 1: {mark1}</p>
    <p>Mark 2: {mark2}</p>
    <p>Mark 3: {mark3}</p>
    <p>Mark 4: {mark4}</p>
    <p>Mark 5: {mark5}</p>
    <h4>Average Marks: {(total / 5).toFixed(2)}</h4>
      </div>
    </div>
  )
}

export default Marks