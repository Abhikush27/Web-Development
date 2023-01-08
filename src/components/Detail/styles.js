import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
    return {
      // income is the object key and 
      // inside that it contains the styles
      income: {
        borderBottom: '10px solid rgba(0,170,0,1)',
      },
      expense:{
        borderBottom:'10px solid red',
      }
    };
  });
  export default useStyles;