import React, { useEffect } from 'react'
import { useState } from 'react'
import Result from './Result'


const Input = ({values,handleonChange}) => {
   
    //want to update the state whenever this gets rendered
    // useEffect(()=>{
    //     setData( ()=> calculateInvestmentResults(values));
    // },[values]);
  return (
    <section id='user-input'>
      <div className='input-group'>
        <p>
        <label>Initial Investment</label>
        <input type='number' onChange={(e)=>handleonChange("initialInvestment",e.target.value)} value={values.initialInvestment} required/>
        </p>
        <p>
        <label>Annual Investment</label>
        <input type='number'onChange={(e)=>handleonChange("annualInvestment",e.target.value)}  value={values.annualInvestment} required/>
        </p>        
      </div>
      <div className='input-group'>
      <p>
        <label>Expected Return</label>
        <input type='number'onChange={(e)=>handleonChange("expectedReturn",e.target.value)}  value={values.expectedReturn} required/>
        </p>
        <p>
        <label>Duration</label>
        <input type='number' onChange={(e)=>handleonChange("duration",e.target.value)} value={values.duration} required/>
        </p>        
      </div>
    </section>
  )
}

export default Input
