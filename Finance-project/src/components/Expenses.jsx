import React, {useState} from 'react';
import { useFinance } from '../App';
import './Expenses.css';

const Expenses = () => {

    const { addTransaction } = useFinance();
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        addTransaction({amount: parseFloat(amount), description,category ,date, type:'expense'});
        setAmount('');
        setDescription('');
        setCategory('')
        setDate('');
    }


    return(
        <form onSubmit={handleSubmit}>
            <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder='Amount' required/>
            <input type="text" value={description} onChange={(e)=> setDescription(e.target.value)} placeholder='Description...' required/>
            <input type="text" value={category} onChange={(e)=> setCategory(e.target.value)} placeholder='Category' required/>
            <input type="date" value={date} onChange={(e)=> setDate(e.target.value)} required/>
            <button type="submit">Add Expenses</button>
        </form>
    );
}

export default Expenses;