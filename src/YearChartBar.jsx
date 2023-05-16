import React from 'react'
import { useState,useEffect } from 'react';
import YearExpense from './YearExpense'
import './YearExpenseChartBarStyles.css'
// Total of Each and every month I need 
//Post Request to get Total of each month 
// Get The values from each Month 
const YearChartBar = () => {
    const [year,setYear] = useState();
    const years = [2022, 2023, 2024, 2025];
    const [monthlyExpenses, setMonthlyExpenses] = useState([]);
    const data = { year };

useEffect(() => {
  fetch('http://localhost:4000/app/getYearlyExpenses', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {

    setMonthlyExpenses(data);
    console.log("Yearly Expenses ",data )
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}, [year]);

  return (
    <div className='yearExpensebarchart'>
      <div>
        <h1>Choose the year</h1>
        <select className='optionContainer' value={year} onChange={(e)=>setYear(e.target.value)}>
           { years.map((iyear)=>{
                return <option key = {iyear} value={iyear} >{iyear}</option>
            })}
        </select>

        </div>
    <div className='BarContainer' >
    <YearExpense expenses = {monthlyExpenses}/>
    </div>
    
    </div>
  )
}
export default YearChartBar