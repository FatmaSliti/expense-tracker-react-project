import React from 'react'
import ExpenseItem from './ExpenseItem'
import './expensesList.css'

const expensesList = props => {

    // let expenseContent = <p>No expenses found.</p>
    // if (props.items.length > 0) {
    //     expenseContent = 
    // }

    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses</h2>
    }


    return <ul className='expenses-list'>
        {props.items.map((expense) => (
            <ExpenseItem 
                key={expense.id}
                title={expense.title} 
                amount={expense.amount}
                date={expense.date}
            />
        ))}
    </ul>
}

export default expensesList
