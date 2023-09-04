//App.js is the root component
import React from 'react';
import Expenses from './components/Expenses/Expenses.js';
import NewExpense from './components/NewExpense/NewExpense.js';
// import ExpensesFilter from './expensesFilter/ExpensesFilter';

const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2025, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2023, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2024, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2023, 5, 12),
    },
  ];

function App() {

  const [expenses, setExpenses] = React.useState(DUMMY_EXPENSES);
  // console.log(expenses)
  
  const newExpenseDataHandler = (enteredData) => {
    setExpenses((prevState) => {
        return [enteredData, ...prevState]; // Add enteredData to the beginning of the array
    });
  }

  return (
    <div>
        <NewExpense onSaveNewExpenseData= {newExpenseDataHandler} />
        <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
