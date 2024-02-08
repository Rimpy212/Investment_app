import React,{useState} from "react"
import Input from "./Components/Input"
import myImage from './assets/investment-calculator-logo.png'
import Result from "./Components/Result"
const INITIAL_VALUES={
  initialInvestment:10000,
  annualInvestment:300,
  expectedReturn:5.5,
  duration:12
}

function App() {
  const[data,setData]=useState([]);
  const[values,setValues]=useState({
      initialInvestment:INITIAL_VALUES.initialInvestment,
      annualInvestment:INITIAL_VALUES.annualInvestment,
      expectedReturn:INITIAL_VALUES.expectedReturn,
      duration:INITIAL_VALUES.duration,
  });

  const inputisValid= values.duration >=1;


  const handleonChange=(key,newValue)=>{
      setValues((prevValues)=>{
          return{
              ...prevValues,
               [key]: +newValue
          }
      });
  }

  return (
    <div id="header">
    <img src={myImage}/>
    <h1>Investment Calculator</h1>
    <Input values={values} handleonChange={handleonChange}/>
    {!inputisValid && <p className="center">Please enter a duration greater than 0</p>}
    {inputisValid && <Result values={values}/>}
    </div>
    
  )
}

export default App
