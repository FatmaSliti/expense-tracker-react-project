import './NewExpense.css'
import ExpenseForm from './ExpenseForm'; 

const NewExpense = (props) => {

    const saveExpensesHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData,
        }
        props.onSaveNewExpenseData(expenseData)
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenses= {saveExpensesHandler} />
        </div>
    )
}

export default NewExpense;
