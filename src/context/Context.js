import React from 'react'
import { reducer } from './Reducer'
import { useReducer } from 'react'

// either get the Json string or get the empty array i.e. initially the values will be empty
const initialState =  JSON.parse(localStorage.getItem('transactions')) || [{ amount: 500, category: 'Salary', type: 'Income', date: '2020-11-16', id: '44c68123-5b86-4cc8-b915-bb9e16cebe6a' }, { amount: 225, category: 'Investments', type: 'Income', date: '2020-11-16', id: '33b295b8-a8cb-49f0-8f0d-bb268686de1a' }, { amount: 50, category: 'Salary', type: 'Income', date: '2020-11-13', id: '270304a8-b11d-4e16-9341-33df641ede64' }, { amount: 123, category: 'Car', type: 'Expense', date: '2020-11-16', id: '0f72e66e-e144-4a72-bbc1-c3c92018635e' }, { amount: 50, category: 'Pets', type: 'Expense', date: '2020-11-13', id: 'c5647dde-d857-463d-8b4e-1c866cc5f83e' }, { amount: 500, category: 'Travel', type: 'Expense', date: '2020-11-13', id: '365a4ebd-9892-4471-ad55-36077e4121a9' }, { amount: 50, category: 'Investments', type: 'Income', date: '2020-11-23', id: '80cf7e33-fc3e-4f9f-a2aa-ecf140711460' }];
// This is for the local storage
 
export const TrackerContext = React.createContext(initialState)
// important

export const Context = ({ children }) => {
  const [transaction, dispatch] = useReducer(reducer, initialState)
  // useReducer is just like useState but for more complex states

  
// the dispach will call the reducer function and will update the transaction
  const deleteTransaction = (id)=> dispatch({type:'DELETE_TRANSACTION',payload :id}); // This will be called in "list.js"
  const addTransaction = (transaction) =>  dispatch({ type: 'ADD_TRANSACTION', payload: transaction });  // This will be called in "Form.js"


// whenever we are given a set of values like "transation" and we need to add those values we use reducer
const balance = transaction.reduce((acc, currVal) => (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount), 0);



  return (
    <TrackerContext.Provider value={{ transaction, deleteTransaction,addTransaction,balance }}> 
    {/* the "transaction" is called in "list.js".This transaction is the selected one from the "form.js"  */}
      {children}
    </TrackerContext.Provider>
  )
}

export default Context
