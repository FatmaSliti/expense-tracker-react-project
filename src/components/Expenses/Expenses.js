import './Expenses.css'
import Card from './Card'
import ExpensesFilter from './ExpensesFilter'
import React from "react"
import ExpensesList from "./expensesList"
import ExpensesChart from './ExpensesChart'

function Expenses(props) {

    const [filteredYear, setFilteredYear] = React.useState('2024');

    //the concept of derived/computed state/values (the extent is the if stat)
    let filterInfoText = '2023, 2022 & 2021';

        if (filteredYear === '2024') {
            filterInfoText = '2023, 2022 & 2021';
        } else if (filteredYear === "2023") {
            filterInfoText = '2024, 2022 & 2021';
        } else if (filteredYear === "2022") {
            filterInfoText = '2024, 2023 & 2021';
        }else {
            filterInfoText = '2024, 2023 & 2022';
        }

    const saveYearHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        // console.log(selectedYear);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onSaveYear={saveYearHandler} />
            <p>Data for years {filterInfoText} is hidden </p>
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />


















            {/* the third method */}
            {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
            {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
                <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
            ))} */}


            {/* the second method which is a bit hard to read that's why we used the && operator */}
            {/* {filteredExpenses.length === 0 ?
            (<p>No expenses found.</p>) :
            filteredExpenses.map((expense) => (
                <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
            ))} */}



            {/* before adding the not found msg and using the ternary operator */}
            {/* {props.expenses.map((expense) => (<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />))} */}
            {/* {filteredExpenses.map((expense) => (
                <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
            ))} */}

            {/* <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date}></ExpenseItem>
            <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date}></ExpenseItem>
            <ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date}></ExpenseItem>
            <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date}></ExpenseItem> */}
        </Card>
    )
}

export default Expenses
