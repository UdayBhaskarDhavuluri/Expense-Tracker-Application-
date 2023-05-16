import React, { useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";

function GetExpense() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/app/getexpenses")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  console.log("Data" , data)
  return (
    <div>
      {data.map((item) => (
        <ExpenseItem 
        data = {item}></ExpenseItem>
      ))}
    </div>
  );
}

export default GetExpense;
