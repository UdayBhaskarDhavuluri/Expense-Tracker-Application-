import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./AddExpenseStyles.css";
import { FaCalendarAlt } from "react-icons/fa";
import ItemAdded from './ItemAdded'

function AddExpense() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [showItemAdded, setShowItemAdded] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      productname: productName,
      productprice: productPrice,
      date: selectedDate,
    };

    try {
      const response = await fetch("http://localhost:4000/app/addexpense", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Product added successfully");
        setShowItemAdded(true); // Show the ItemAdded component
      } else {
        console.error("Failed to add product");
      }
    } catch (error) {
      console.error(error);
    }

    setProductName("");
    setProductPrice("");
    setSelectedDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="addExpensecontainer">
        <h1>Add your Expense</h1>
        <div className="addExpenseSubContainer">
          <div>
            <label htmlFor="productName">Product Name:</label>
            <br></br>
            <input
              type="text"
              id="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="productPrice">Product Price:</label>
            <br></br>
            <input
              type="text"
              id="productPrice"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </div>
          <div>
            <label>
              Date
              <FaCalendarAlt />
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
              />
            </label>
          </div>
          <button type="submit" className="submitbtn">Submit</button>
        </div>
      </div>
      
      {showItemAdded && <ItemAdded />}
    </form>
  );
}

export default AddExpense;
