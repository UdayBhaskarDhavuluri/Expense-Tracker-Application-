import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddExpense from './AddExpense'
import GetExpense from './GetExpense'
import Home from './Home';
import Navbar from './NavBar';
import MonthYearExpense from './MonthYearExpense';
import YearChartBar from './YearChartBar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addexpense" element={<AddExpense />} />
        <Route path="/getExpenses" element={<GetExpense />} />
        <Route path='/getYearlyExpenses' element = {<YearChartBar/>}/>
        <Route path = "/getFilteredExpenses" element = {<MonthYearExpense/>}/>
      </Routes>
    </Router>
  );
};
export default App;
