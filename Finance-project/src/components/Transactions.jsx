import React from 'react';
import { useFinance } from '../App';
import './Transactions.css';

const Transactions = () => {
    const { transactions, removeTransaction} = useFinance();


    return(
        <div>
            <h2>Transactions</h2>
            <ul>
                {transactions.map(transaction =>(
                    <li key={transaction.id}>
                        {transaction.type==='income' ? 'Income': 'Expense'} - {transaction.amount} - {transaction.date}
                        <button onClick={() => removeTransaction(transaction.id)}>Remove 🗑️</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Transactions;