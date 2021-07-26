import { MaterialAction, MaterialState } from '../types/material';

const initialState: MaterialState = {
  materials: [],
  excel: null,
  availableFiles: [],
  isLoading: false,
  error: null,
};

export const materialReducer = (
  state = initialState,
  action: MaterialAction
): MaterialState => {
  switch (action.type) {
    case 'FETCH_MATERIALS':
      return { ...state, isLoading: true, error: null, materials: [] };
    case 'FETCH_MATERIALS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        error: null,
        materials: action.payload,
      };
    case 'FETCH_MATERIALS_ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case 'FETCH_MATERIAL_AVAILABLE_FILES':
      return { ...state, isLoading: true, error: null, availableFiles: [] };
    case 'FETCH_MATERIAL_AVAILABLE_FILES_SUCCESS':
      return {
        ...state,
        isLoading: true,
        error: null,
        availableFiles: action.payload,
      };
    case 'FETCH_MATERIAL_AVAILABLE_FILES_ERROR':
      return {
        ...state,
        isLoading: true,
        error: action.payload,
      };

    case 'FETCH_MATERIAL_EXCEL':
      return { ...state, isLoading: true, error: null, excel: null };
    case 'FETCH_MATERIAL_EXCEL_SUCCESS':
      return {
        ...state,
        isLoading: true,
        error: null,
        excel: action.payload,
      };
    case 'FETCH_MATERIAL_EXCEL_ERROR':
      return {
        ...state,
        isLoading: true,
        error: action.payload,
      };

    default:
      return state;
  }
};
