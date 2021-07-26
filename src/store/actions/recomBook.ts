import axios from 'axios';
import { Dispatch } from 'react';
import { RecomBookAction } from '../types/recomBook';

const baseUrl = 'http://localhost:60411/api/';

export const fetchRecomBook = (id: number) => {
  return async (dispatch: Dispatch<RecomBookAction>) => {
    try {
      dispatch({ type: 'FETCH_RECOMBOOK' });

      const response = await axios.get(baseUrl + 'sources/book/' + id, {
        responseType: 'blob',
      });

      dispatch({
        type: 'FETCH_RECOMBOOK_SUCCESS',
        payload: response.data,
      });

      const file = new Blob([response.data], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    } catch (e) {
      dispatch({
        type: 'FETCH_RECOMBOOK_ERROR',
        payload: e.message,
      });
    }
  };
};

export const fetchAllRecomBooks = () => {
  return async (dispatch: Dispatch<RecomBookAction>) => {
    try {
      dispatch({ type: 'FETCH_ALL_RECOMBOOKS' });

      const response = await axios.get(baseUrl + 'sources/books/');

      dispatch({
        type: 'FETCH_ALL_RECOMBOOKS_SUCCESS',
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: 'FETCH_ALL_RECOMBOOKS_ERROR',
        payload: e.message,
      });
    }
  };
};
