import React from 'react'
import { formatter } from '../util/investment';
import { calculateInvestmentResults } from '../util/investment';

const Result = ({values}) => {

    const resultData=calculateInvestmentResults(values);
    const initialInvestment=resultData[0].valueEndOfYear - resultData[0].interest 
    console.log(resultData);

  return (
    <div>
        <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
      </thead>
      <tbody>
            {resultData.map(yearData =>{
                const totalInterest=yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
                const totalAmountInvested=yearData.valueEndOfYear-totalInterest;
                return (
                    <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                )
            })}
      </tbody>
        </table>
      
    </div>
  )
}

export default Result
