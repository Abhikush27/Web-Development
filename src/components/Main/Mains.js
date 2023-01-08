import React, { useContext } from 'react';
import CardHeader from '@mui/material/CardHeader';
import Card from '@mui/material/Card';
import useStyles from './style'
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Form from './form/Form';
import Lists from './Lists/Lists';
import { TrackerContext } from '../../context/Context';


function Main() {
  const {classes} = useStyles();

const {balance} = useContext(TrackerContext);
console.log(balance);

    return (
        <Card className={classes.root}>
            <CardHeader title="Expense tracker" subheader="The Best you can get" />
            <CardContent>

                <Typography align='center' variant='h5'>
                  Total Balance ${balance}
                </Typography>
                <Typography variant='subtitle1' sx={{mt:2}}>
                  ajbd sabajs   sfahas ashfa
                </Typography>
                <Divider/>

                  <Form />

            </CardContent>
            
            <CardContent className={classes.CardContent}>
             <Grid container spacing={2}>
               <Grid item xs={12}>

                 <Lists />
                 
               </Grid>
             </Grid>
            </CardContent>

            </Card>
      )
    }
    
export default Main


