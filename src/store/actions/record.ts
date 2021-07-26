import axios from 'axios';
import { Dispatch } from 'react';
import { IRecord } from '../../models/record';
import { RecordAction } from '../types/record';

export const fetchRecords = (props: string[]) => {
  const baseUrl = 'http://localhost:60411/api/';
  return async (dispatch: Dispatch<RecordAction>) => {
    try {
      dispatch({ type: 'FETCH_RECORDS' });
      const response = await axios.get(baseUrl + 'records/all', {
        params: {
          fields: props,
        },
      });
      dispatch({ type: 'FETCH_RECORDS_SUCCESS', payload: response.data });
    } catch (e) {
      dispatch({
        type: 'FETCH_RECORDS_ERROR',
        payload: e.message,
      });
    }
  };
};

export const fetchResWelding = (props: string, keysMaterials: number[]) => {
  const baseUrl = 'http://localhost:60411/api/';
  return async (dispatch: Dispatch<RecordAction>) => {
    try {
      dispatch({ type: 'FETCH_RESULT_WELDING' });
      const response = await axios.post(
        baseUrl + 'records/welding',
        keysMaterials,
        {
          params: {
            typeWelding: props,
          },
        }
      );
      dispatch({
        type: 'FETCH_RESULT_WELDING_SUCCESS',
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: 'FETCH_RESULT_WELDING_ERROR',
        payload: e.message,
      });
    }
  };
};

export const updateArticle = (id: number, newArticle: IRecord) => {
  const baseUrl = 'http://localhost:60411/api/';
  return async (dispatch: Dispatch<RecordAction>) => {
    try {
      dispatch({ type: 'UPDATE_ARTICLE' });
      const response = await axios.put(
        baseUrl + 'records/articles/' + id,
        newArticle
      );
      dispatch({ type: 'UPDATE_ARTICLE_SUCCESS', payload: response.data });
    } catch (e) {
      dispatch({ type: 'UPDATE_ARTICLE_ERROR', payload: e.message });
    }
  };
};

export const updatePatent = (id: number, newPatent: IRecord) => {
  const baseUrl = 'http://localhost:60411/api/';
  return async (dispatch: Dispatch<RecordAction>) => {
    try {
      dispatch({ type: 'UPDATE_PATENT' });
      const response = await axios.put(
        baseUrl + 'records/patents/' + id,
        newPatent
      );
      dispatch({ type: 'UPDATE_PATENT_SUCCESS', payload: response.data });
    } catch (e) {
      dispatch({ type: 'UPDATE_PATENT_ERROR', payload: e.message });
    }
  };
};

export const updateBook = (id: number, newBook: IRecord) => {
  const baseUrl = 'http://localhost:60411/api/';
  return async (dispatch: Dispatch<RecordAction>) => {
    try {
      dispatch({ type: 'UPDATE_BOOK' });
      const response = await axios.put(
        baseUrl + 'records/books/' + id,
        newBook
      );
      dispatch({ type: 'UPDATE_BOOK_SUCCESS', payload: response.data });
    } catch (e) {
      dispatch({ type: 'UPDATE_BOOK_ERROR', payload: e.message });
    }
  };
};
