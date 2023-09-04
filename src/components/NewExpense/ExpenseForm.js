import React, {useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState(''); 
    const [enteredDate, setEnteredDate] = useState('');
    const [value, setValue] = useState(false);


    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
        // console.log(enteredTitle)
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        // console.log(expenseData);
        props.onSaveExpenses(expenseData);
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    const handleNewExpenseClick = () => {
        setValue(true)
    }
    
    const handleCancelButton = () => {
        setValue(false)
    }

    return value ? (
        <form onSubmit={submitHandler} >
            <div className='new-expense__controls'>
                <div className='new-expense__control label'>
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control label'>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                </div>

                <div className='new-expense__control label'>
                    <label>Date</label>
                    <input type="date" min="2021-01-01" max="2024-12-31" value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick = {handleCancelButton}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
        ) : (
            <div>
                <button onClick={handleNewExpenseClick}>Add New Expense</button>
            </div>
        )
}       

export default ExpenseForm;
