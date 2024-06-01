//App.jsx, Syed Kazmi, 301330922, 2024/05/31
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//import { ThemeProvider } from '@material-ui/styles';
import MainRouter from '../MainRouter';
//import Contact from './contact'
//import theme from '../theme';
//import { hot } from 'react-hot-loader'
const App = () => {
  return (
    <Router>
      
        <MainRouter />
     
    </Router>
  );
};
export default App;
