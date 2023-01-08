import React, { useContext } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import DeleteIcon from '@mui/icons-material/Delete';
import useStyles from './style';
import { TrackerContext } from '../../../context/Context';



function Lists() {
  const {classes} = useStyles();
  const {deleteTransaction,transaction} = useContext(TrackerContext);  //This is taken from "Context.js"

    
  return (
    
<List className={classes.slider}>
{transaction.map((element) =>(
  
  <ListItem>
        {/* // important */}
        
        <ListItemAvatar>
          <Avatar className={element.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
            {/* important */}
            <MoneyOffIcon />
          </Avatar>
        </ListItemAvatar>

        <ListItemText primary={element.category} secondary={`$${element.amount} - ${element.date}`}/> 
        {/* important */}
      <ListItemSecondaryAction>
        <IconButton aria-label="delete" onClick={() => deleteTransaction(element.id)} >
          <DeleteIcon/>
        </IconButton>
      </ListItemSecondaryAction>

      </ListItem>
  
))}
  </List>
  )
}

export default Lists