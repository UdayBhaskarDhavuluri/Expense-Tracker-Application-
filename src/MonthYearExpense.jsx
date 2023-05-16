import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesPieChart from './ExpensesPieChart';
import YearExpense from './YearExpense';
import YearChartBar from './YearChartBar';
import './MonthYearExpenseStyles.css'


function MonthYearExpense() {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [isPie, setIsPie] = useState(false);
  const months = [
    { label: 'January', value: '01' },
    { label: 'February', value: '02' },
    { label: 'March', value: '03' },
    { label: 'April', value: '04' },
    { label: 'May', value: '05' },
    { label: 'June', value: '06' },
    { label: 'July', value: '07' },
    { label: 'August', value: '08' },
    { label: 'September', value: '09' },
    { label: 'October', value: '10' },
    { label: 'November', value: '11' },
    { label: 'December', value: '12' },
  ];

  const years = [2022, 2023, 2024, 2025];

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { month, year };
    fetch('http://localhost:4000/app/getFilteredExpenses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setExpenses(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <form className='formCss' onSubmit={handleSubmit}>
        <label>
          Month:
          <select className='optionstyles' value={month} onChange={handleMonthChange}>
            <option  value="">Select Month</option>
            {months.map((m) => (
              <option key={m.value} value={m.value}>
                {m.label}
              </option>
            ))}
          </select>
        </label>
        <label>
          Year:
          <select  className='optionstyles' value={year} onChange={handleYearChange}>
            <option value="">Select Year</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </label>
        <button className='btnStyles'onClick={(e)=>{setIsPie(!isPie)}}> PieChart</button> 
        <button  className = "btnStyles" type="submit">Filter</button>
        
      </form>
      {expenses.map((expense) => (
        <ExpenseItem data = {expense}
          
        />
        
      ))}
      {isPie ?  <ExpensesPieChart data = {expenses}/> : '' }
       
        
        
    </>
  );
}

export default MonthYearExpense;
