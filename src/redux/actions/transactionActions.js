import { firestore } from '../../firebase';
import {
  ADD_TRANSACTION,
  GET_TRANSACTIONS,
} from '../actionTypes/transactionActionTypes';

// Action creators
export const addTransaction = (transaction) => async (dispatch) => {
  try {
    const docRef = await firestore
      .collection('transactions')
      .add(transaction);
    const newTransaction = {
      id: docRef.id,
      ...transaction,
    };
    dispatch({ type: ADD_TRANSACTION, payload: newTransaction });
  } catch (error) {
    console.log(error);
  }
};

export const getTransactions = () => async (dispatch) => {
  try {
    const snapshot = await firestore.collection('transactions').get();
    const transactions = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dispatch({ type: GET_TRANSACTIONS, payload: transactions });
  } catch (error) {
    console.log(error);
  }
};
