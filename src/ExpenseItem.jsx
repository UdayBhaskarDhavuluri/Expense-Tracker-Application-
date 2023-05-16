import React from "react";
import "./ExpenseItemStyles.css";
import { FaCalendarAlt } from "react-icons/fa";

const ExpenseItem = ({ data }) => {
  const date = new Date(data.date);
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "short" });

  const day = date.getDate();

  return (
    <div className="itemContainer">
      <div className="dateContainer">
        <FaCalendarAlt className="cal"/>
        <p>{year}</p>
        <p>{month}</p>
        <p>{day}</p>
      </div>

      <div className = "productContainer" >{data.productname}</div>
      <p className="productContainer"> &#8377;{data.productprice}</p>
    </div>
  );
};

export default ExpenseItem;
