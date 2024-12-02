import React from 'react';
import { useFinance } from '../App';
import './Savings.css';

const Savings = () => {
    const { savingGoal, setSavingGoal , transactions} = useFinance();

    const totalIncome = transactions.filter(t=> t.type === "income").reduce((acc, t) => acc + t.amount, 0);
    const totalExpenses = transactions.filter(t=> t.type === "expense").reduce((acc, t) => acc + t.amount, 0);
    const currentSavings = totalIncome - totalExpenses; 

    const handleGoalChange= (e)=> {
        setSavingGoal(e.target.value);
    }

    
    return(
        <div className='savings'>
            <h2>Savings Goal</h2>
            <input type="number" value={savingGoal} onChange={handleGoalChange} placeholder='Set your Savings Goal..'/>
            
            <div className='progress-bar'>
                <p>Current Savings : {currentSavings}</p>
                <p>Savings Goal : {savingGoal}</p>
                <p>Progress: {Math.min((currentSavings / savingGoal)*100, 100 )}%</p> 
            </div>
        </div>
    );
}

export default Savings;