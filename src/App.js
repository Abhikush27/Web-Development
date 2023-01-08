import './App.css'
import Details from './components/Detail/Details'
import Grid from '@mui/material/Grid'
import Main from './components/Main/Mains'
import useStyles from './style'
import {PushToTalkButton, PushToTalkButtonContainer} from '@speechly/react-ui';
// import { useContext} from 'react'
// import { TrackerContext } from './context/Context'
// import { ADD_TRANSACTION,DEL_TRANSACTION } from './context/actions'

function App() {

  

// const global = useContext(TrackerContext);
// console.log(global);    to use the "Provider" function

  const { classes } = useStyles()
  return (
    <div className="App">
     
     <Grid className={classes.grid} container spacing={5} alignItems="center" justifyContent="center" style={{ height: '100vh'}}>
        <Grid item xs={12} sm={3.5} className={classes.mobile}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3.5} className={classes.last}>
          <Details title="Expense" />
        </Grid>
        
        <PushToTalkButtonContainer >
          <PushToTalkButton />
        </PushToTalkButtonContainer>
      </Grid>

    </div>
  )
}

export default App
