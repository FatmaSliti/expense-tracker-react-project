import './ExpenseItem.css'
import Card from './Card'
import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);

    // const clickHandler = () => {
    //     setTitle('updated!')
    // }

    return (
        <li>    
            <Card className='expense-item'>
                {/* <div>{props.date.toISOString()}</div> */}
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                </div>
                {/* <button onClick={clickHandler}>Change Title</button> we call the function without () because it'll be executed too early (when the jsx is evaluated) */}
            </Card>
        </li>
    )
}

export default ExpenseItem
