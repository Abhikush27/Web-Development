import React,{useState,useContext, useEffect} from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button'
import useStyles from './style';
import { v4 as uuidv4 } from 'uuid';       //This will create unique simple id every time                                                                                                                                                                                                                  
import {TrackerContext} from '../../../context/Context';
import { incomeCategories,expenseCategories } from '../../../categories/Categories';
import { useSpeechContext } from '@speechly/react-client';
// import { color } from '@mui/system';


const initialState={
  amount:'',
  category:'',
  date: new Date(),
  type:'',
}
  // transaction will contain this data ,amount and id for that transaction

const Form = () => {
    const {classes} = useStyles();

const [formData,setFormData] = useState(initialState);
const {addTransaction} = useContext(TrackerContext);
// (important) this addtransaction function is called from "Context.js" through the "Provider"
const {segment} = useSpeechContext();
    

    const createTransaction =()=>{

      const transaction = { ...formData, amount: Number(formData.amount), id: uuidv4()}
      addTransaction(transaction); 
      //this function accepts the parameter as defined in "context.js"
      // this "addTransaction" function will be called in "Reducer.js" and that will update the "transaction" in "Context.js"
      setFormData(initialState);                    
      // after work setting all the data back to the initial state so that can be set again for the new id
   
    }


// this "useEffect" is used to set the value in form through speechly
useEffect(() => {
  if (segment) {
    if (segment.intent.intent === 'add_expense') {
      setFormData({ ...formData, type: 'Expense' });
    } else if (segment.intent.intent === 'add_income') {
      setFormData({ ...formData, type: 'Income' });
    } else if (segment.isFinal && segment.intent.intent === 'create_transaction') { 
      return createTransaction();
    } else if (segment.isFinal && segment.intent.intent === 'cancel_transaction') {
      return setFormData(initialState);
    }

    segment.entities.forEach((s) => {
      const category = `${s.value.charAt(0)}${s.value.slice(1).toLowerCase()}`;

      switch (s.type) {
        case 'amount':
          setFormData({ ...formData, amount: s.value });
          break;
        case 'category':
          if (incomeCategories.map((iC) => iC.type).includes(category)) { //it will check weather the spoken category comes under the given type if not then change the type according to the category
            setFormData({ ...formData, type: 'Income', category });
          } else if (expenseCategories.map((iC) => iC.type).includes(category)) {
            setFormData({ ...formData, type: 'Expense', category });
          }
          break;
        case 'date':
          setFormData({ ...formData, date: s.value });
          break;
        default:
          break;
      }
    });

    if (segment.isFinal && formData.amount && formData.category && formData.type && formData.date) {
      createTransaction();
    }
  }
}, [segment]);


    const selectedCategory = formData.type === 'Income' ? incomeCategories : expenseCategories

  return (
    
    <Grid container spacing={2}>
      {/* important */}
        <Grid item xs={12}>
         <Typography className = {classes.root} align="center" variant="subtitle2" gutterBottom >
           {segment && segment.words.map((w) => w.value).join(" ")}
         </Typography>
        </Grid>

        <Grid item xs={6}>
        <FormControl fullWidth>
          {/* important */}
          <InputLabel>Type</InputLabel>
          <Select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
            {/* important */}
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
         {selectedCategory.map((e) => <MenuItem key={e.type} value={e.type}>{e.type}</MenuItem>)}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
      <TextField type="number" label="Amount" value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} fullWidth />
        {/* important */}
      </Grid>
      <Grid item xs={6}>
      <TextField fullWidth label="Date" type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
      </Grid>
      <Button className={classes.button} variant='outlined' color='primary' fullWidth onClick={createTransaction}>Create</Button>
      {/* calling the function "createTransaction" on clicking the button */}
    </Grid>


  )
}

export default Form