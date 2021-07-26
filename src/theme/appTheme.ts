import { createMuiTheme, Theme } from '@material-ui/core/styles';
import { grey, blue, pink } from '@material-ui/core/colors/';

export const lightTheme: Theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: blue[800],
    },
    secondary: {
      main: pink[300],
    },
  },
});

export const darkTheme: Theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: grey[900],
    },
    secondary: {
      main: blue[600],
    },
  },
});
