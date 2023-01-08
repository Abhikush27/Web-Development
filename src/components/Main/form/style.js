import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
    return {
      root:{
       color : 'blue',
      },
        radio:{
          display:'flex',
          justifyContent:"center",
          marginBottom:'-10px',

        },
        button:{
          marginTop: '20px',
          marginLeft:'15px',
                },

        };
  });
  export default useStyles;