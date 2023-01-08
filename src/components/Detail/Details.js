import React from 'react'
import CardHeader from '@mui/material/CardHeader'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import useStyles from './styles'
import { Doughnut } from 'react-chartjs-2'; // for pie-chart
import useTransactions from '../../useTransactions'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);
function Details(props) {
  const { classes } = useStyles()
  const {total,chartData} = useTransactions(props.title)

  // through this we are importing the "income styles" from styles.js in "classes"
  return (
    
    <Card
      className={props.title === 'Income' ? classes.income : classes.expense}
      style={{height: 750}}
    >
      <CardHeader title={props.title} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
      </CardContent>
        <Doughnut data={chartData}  />
    </Card>
  )
}

export default Details

