import React from 'react';
import { Provider } from 'react-redux';
// import { Container, Grid } from '@material-ui/core';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TransactionList from './components/TransactionList';
import TransactionForm from './components/TransactionForm';
import configureStore from './redux/store/configureStore';

const store = configureStore();

const App = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Expense Tracker</h1>
        </Grid>
        <Grid item xs={12} md={8}>
          <TransactionList />
        </Grid>
        <Grid item xs={12} md={4}>
          <TransactionForm />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
