import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Form from './Form'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
    // background: {default: '#071626', paper: '#05111c', border:'yellow'},
    // borderColor: {default: 'pink' }
  },
  spacing: [0, 4, 8, 16, 32, 64],
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Form />
    </ThemeProvider>
  </React.StrictMode >
);