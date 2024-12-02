import React, { useState , useContext , useEffect } from 'react'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import {fetchData, createData , updateData , deleteData} from './firebase'
import Home from './components/Home.jsx' ;
import Income from './components/Income.jsx' ;
import Expenses from './components/Expenses.jsx' ;
import Transactions from './components/Transactions.jsx' ;
import Savings from './components/Savings.jsx' ;
import './App.css'


const FinanceContext = React.createContext();

export const useFinance = () => useContext(FinanceContext)

const App= () => {
  const [transactions, setTransactions] = useState([])
  const [savingGoal, setSavingGoal] = useState(0)

  // Fetch data from firebase 
  useEffect(() => {
    const loadData = async() =>{
      const data = await fetchData()
      if(data){
        setTransactions(Object.entries(data).map(([id, value]) => ({id, ...value})));
      }
    };
    loadData();
  }, []);

  // Add a new transaction
  const addTransaction = async (transaction) => {
    const newTransaction = await createData(transaction)
    setTransactions([...transactions, newTransaction])
  };

  // Delete a transaction
  const removeTransaction = async (id) => {
    await deleteData(id)
    setTransactions(transactions.filter(t => t.id!== id))
  };

   

  return (
    <FinanceContext.Provider value = {{transactions , addTransaction, removeTransaction, savingGoal , setSavingGoal}}>
      <Router>
        <div className="App">
          <h1> Finance Manager </h1>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/income" element={<Income/>} />
            <Route exact path="/expenses" element={<Expenses/>} />
            <Route exact path="/transactions" element={<Transactions/>} />
            <Route exact path="/savings" element={<Savings/>} />
          </Routes>
        </div>
      </Router>
     
    </FinanceContext.Provider>
  )
}

export default App
