import axios from 'axios';
import { Dispatch } from 'react';
import { ImageAction } from '../types/image';

export const fetchImage = (id: number) => {
  const baseUrl = 'http://localhost:60411/api/';
  return async (dispatch: Dispatch<ImageAction>) => {
    try {
      dispatch({ type: 'FETCH_IMAGE' });

      const response = await axios.get(baseUrl + 'sources/image/' + id, {
        responseType: 'blob',
      });

      dispatch({
        type: 'FETCH_IMAGE_SUCCESS',
        payload: response.data,
      });

      const file = new Blob([response.data], { type: 'image/PNG' });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    } catch (e) {
      dispatch({
        type: 'FETCH_IMAGE_ERROR',
        payload: e.message,
      });
    }
  };
};
