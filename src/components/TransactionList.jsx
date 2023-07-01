import React, { useState } from 'react';
import { useSelector } from 'react-redux';

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
      <h2>Transaction List</h2>
      <div>
        <input
          type="text"
          placeholder="Search by description"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {uniqueCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <ul>
        {filteredTransactions.map((transaction) => (
          <li key={transaction.id}>
            <p>Date: {transaction.date}</p>
            <p>Description: {transaction.description}</p>
            <p>Amount: {transaction.amount}</p>
            <p>Category: {transaction.category}</p>
          </li>
        ))}
      </ul>
      <h2>Summary</h2>
      <p>Total Balance: {calculateTotalBalance()}</p>
      <h3>Category Breakdown:</h3>
      <ul>
        {uniqueCategories.map((category) => (
          <li key={category}>
            <p>Category: {category}</p>
            <p>Total: {calculateCategoryTotal(category)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
