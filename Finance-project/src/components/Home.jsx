import React from 'react';
import {Link } from 'react-router-dom';
import {useFinance} from '../App'
import './Home.css';


const Home= () => {
    const {transactions} = useFinance();

    const totalIncome = transactions.filter(t=> t.type === "income").reduce((acc, t) => acc + t.amount, 0);
    const totalExpenses = transactions.filter(t=> t.type === "expense").reduce((acc, t) => acc + t.amount, 0);
    const currentSavings = totalIncome - totalExpenses;

    return (
        <div className='summary'>
            <h2 >Welcome to your Financial Summary</h2>
            <p>Total Income : {totalIncome}</p>
            <p>Total Expenses : {totalExpenses}</p>
            <p>Current Savings : {currentSavings}</p>
            <div className='quick-links'>
                <Link to="/income" >Add Income</Link>
                <Link to="/expenses" >Add Expenses</Link>
                <Link to="/transactions" >View Transaction</Link>
                <Link to="/savings" >Savings Goal</Link>
            </div>
        </div>
    );
};

export default Home;