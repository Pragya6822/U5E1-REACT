import React, {useState} from 'react';
import { useFinance } from '../App';
import './Income.css';

const Income = () => {

    const { addTransaction } = useFinance();
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        addTransaction({amount: parseFloat(amount), description, date, type:'income'});
        setAmount('');
        setDescription('');
        setDate('');
        alert('Income added successfully!');
        
    }


    return(
        <form onSubmit={handleSubmit}>
            <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder='Amount' required/>
            <input type="text" value={description} onChange={(e)=> setDescription(e.target.value)} placeholder='Description...' required/>
            <input type="date" value={date} onChange={(e)=> setDate(e.target.value)} required/>
            <button type="submit">Add Income</button>
        </form>
    );
}

export default Income;