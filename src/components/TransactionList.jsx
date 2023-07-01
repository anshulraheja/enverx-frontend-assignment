import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Typography,
  TextField,
  Select,
  MenuItem,
} from '@mui/material';

const TransactionList = () => {
  const transactions = useSelector(
    (state) => state.transactions.transactions
  );
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredTransactions = transactions.filter((transaction) => {
    const categoryMatch = selectedCategory
      ? transaction.category === selectedCategory
      : true;
    const searchTextMatch = transaction.description
      .toLowerCase()
      .includes(searchText.toLowerCase());
    return categoryMatch && searchTextMatch;
  });

  const calculateTotalBalance = () => {
    return filteredTransactions.reduce(
      (total, transaction) => total + parseFloat(transaction.amount),
      0
    );
  };

  const calculateCategoryTotal = (category) => {
    return filteredTransactions
      .filter((transaction) => transaction.category === category)
      .reduce(
        (total, transaction) =>
          total + parseFloat(transaction.amount),
        0
      );
  };

  const uniqueCategories = [
    ...new Set(
      transactions.map((transaction) => transaction.category)
    ),
  ];

  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Transaction List
      </Typography>
      <div>
        <TextField
          label="Search by description"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          fullWidth
        />
        <Select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          fullWidth
        >
          <MenuItem value="">All Categories</MenuItem>
          {uniqueCategories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </div>
      <ul>
        {filteredTransactions.map((transaction) => (
          <li key={transaction.id}>
            <Typography variant="body1">
              Date: {transaction.date}
            </Typography>
            <Typography variant="body1">
              Description: {transaction.description}
            </Typography>
            <Typography variant="body1">
              Amount: {transaction.amount}
            </Typography>
            <Typography variant="body1">
              Category: {transaction.category}
            </Typography>
          </li>
        ))}
      </ul>
      <Typography variant="h2" gutterBottom>
        Summary
      </Typography>
      <Typography variant="body1">
        Total Balance: {calculateTotalBalance()}
      </Typography>
      <Typography variant="h3" gutterBottom>
        Category Breakdown:
      </Typography>
      <ul>
        {uniqueCategories.map((category) => (
          <li key={category}>
            <Typography variant="body1">
              Category: {category}
            </Typography>
            <Typography variant="body1">
              Total: {calculateCategoryTotal(category)}
            </Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
