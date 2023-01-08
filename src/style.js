import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
    return {

      desktop: {
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
      },
      mobile: {
        [theme.breakpoints.down('sm')]: {
          display: 'none',
        },
      },
      main: {
        [theme.breakpoints.up('sm')]: {
          paddingBottom: '5%',
        },
      },
      last: {
        [theme.breakpoints.down('sm')]: {
          marginBottom: theme.spacing(3),
          paddingBottom: '200px',
        },
      },

      // grid: {
      
      //   marginLeft:'12vh',
      //   marginTop:'4vh',
        
      // },
      grid: {
        '& > *': {
          margin: theme.spacing(3),
        },
      },
      };
     });
  export default useStyles;
  