import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
    return {
        avatarIncome: {
          background:'rgba(0,170,0,1)',
          },
          
          avatarExpense: {
           background:'rgba(190,0,0,1)',
          },

     list:{

        overflow:"auto",
     },
    slider:{
      width: '430px',
  height: '200px',
  overflow: 'auto',
  
    }
      };
     });
  export default useStyles;