import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
    return {
        divider: {
            margin: '20px 0',
          },
          cartContent: {
            paddingTop: 0,
          },
        };
  });
  export default useStyles;