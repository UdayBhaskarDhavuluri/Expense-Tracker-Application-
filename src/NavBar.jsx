import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddExpenseStyles.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-colors fullwidth">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Expense Tracker</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/addexpense">Add Expense</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/getExpenses">All Expenses</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/getFilteredExpenses">Expenses in Month</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/getYearlyExpenses">Expenses in year</Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
