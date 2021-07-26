import axios from 'axios';
import { Dispatch } from 'react';
import { MaterialAction } from '../types/material';

export const fetchMaterials = () => {
  const baseUrl = 'http://localhost:60411/api/';
  return async (dispatch: Dispatch<MaterialAction>) => {
    try {
      dispatch({ type: 'FETCH_MATERIALS' });

      const response = await axios.get(baseUrl + 'materials');

      dispatch({ type: 'FETCH_MATERIALS_SUCCESS', payload: response.data });
    } catch (e) {
      dispatch({
        type: 'FETCH_MATERIALS_ERROR',
        payload: e.message,
      });
    }
  };
};

export const fetchMaterialExcel = (keyMaterial: number) => {
  const baseUrl = 'http://localhost:60411/api/';
  return async (dispatch: Dispatch<MaterialAction>) => {
    try {
      dispatch({ type: 'FETCH_MATERIAL_EXCEL' });

      const response = await axios.get(
        baseUrl + 'materials/getExcel/' + keyMaterial,
        {
          responseType: 'blob',
        }
      );

      dispatch({
        type: 'FETCH_MATERIAL_EXCEL_SUCCESS',
        payload: response.data,
      });

      const file = new Blob([response.data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    } catch (e) {
      dispatch({
        type: 'FETCH_MATERIAL_EXCEL_ERROR',
        payload: e.message,
      });
    }
  };
};

export const fetchMaterialAvailableFiles = () => {
  const baseUrl = 'http://localhost:60411/api/';
  return async (dispatch: Dispatch<MaterialAction>) => {
    try {
      dispatch({ type: 'FETCH_MATERIAL_AVAILABLE_FILES' });

      const response = await axios.get(baseUrl + 'materials/availableFiles');

      dispatch({
        type: 'FETCH_MATERIAL_AVAILABLE_FILES_SUCCESS',
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: 'FETCH_MATERIAL_AVAILABLE_FILES_ERROR',
        payload: e.message,
      });
    }
  };
};
