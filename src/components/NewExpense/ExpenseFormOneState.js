import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    const titleChangeHandler = (e) => {
        setUserInput({
            ...userInput, //copy the state of the userInput (initial state)
            enteredTitle: e.target.value,
        });
    };

    const amountChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });
        setUserInput((prevState) => { //we use this method to garantee that the shot is the latest and correct one
            return {
                ...prevState,
                enteredTitle: event.target.value
            };
        })
    }

    const dateChangeHandler = (e) => { 
        setUserInput({
            ...userInput,
            enteredDate: e.target.value,
        })
    }


    //creating a shared handler function

    // const inputChangeHandler = (identifier, value) => {
    //     if (identifier === 'title') {
    //         setEnteredTitle(value);
    //         console.log(value);
    //     } else if (identifier === 'amount') {
    //         setEnteredAmount(value);
    //     } else {
    //         setEnteredDate(value);
    //     }
    // }


    return (
        <form >
            <div className='new-expense__controls'>
                <div className='new-expense__control label'>
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                    {/* <input type="text" onChange={(e) => inputChangeHandler('title', e.target.value)} /> */}

                </div>

                <div className='new-expense__control label'>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                    {/* <input type="number" min="0.01" step="0.01" onChange={(e) => inputChangeHandler('amount', e.target.value)} /> */}
                </div>

                <div className='new-expense__control label'>
                    <label>Date</label>
                    <input type="date" min="2022-01-01" max="2024-12-31" onChange={dateChangeHandler} />
                    {/* <input type="date" min="2022-01-01" max="2024-12-31" onChange={(e) => inputChangeHandler('date', e.target.value)} /> */}
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;
