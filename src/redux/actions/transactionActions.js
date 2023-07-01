import { ADD_TRANSACTION } from '../actionTypes/transactionActionTypes';

export const addTransaction = (transaction) => {
  return {
    type: ADD_TRANSACTION,
    payload: transaction,
  };
};
