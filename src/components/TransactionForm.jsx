import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../redux/actions/transactionActions';
import { TextField, Button } from '@mui/material';
// import Button from '@mui/material/Button';

const TransactionForm = () => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      description,
      amount,
      category,
    };
    dispatch(addTransaction(newTransaction));
    setDescription('');
    setAmount('');
    setCategory('');
  };

  return (
    <div>
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <TextField
          label="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <TextField
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Add
        </Button>
      </form>
    </div>
  );
};

export default TransactionForm;
