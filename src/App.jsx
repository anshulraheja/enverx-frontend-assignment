import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grid, Typography } from '@mui/material';
import TransactionList from './components/TransactionList';
import TransactionForm from './components/TransactionForm';
import { getTransactions } from './redux/actions/transactionActions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  return (
    <Container maxWidth="md">
      <Typography variant="h1" align="center" gutterBottom>
        Expense Tracker
      </Typography>
      <Grid container spacing={3}>
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
