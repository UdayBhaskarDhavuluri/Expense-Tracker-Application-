import React from 'react'
import { useState, useEffect } from 'react';
import ExpensesPieChart from './ExpensesPieChart'

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/app/getexpenses")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
       <ExpensesPieChart 
       data = {data}/>
    </div>
  )
}

export default Home