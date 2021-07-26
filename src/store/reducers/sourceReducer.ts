import { RecomBookAction, RecomBookState } from '../types/recomBook';
import { ImageAction, ImageState } from '../types/image';

const initialRecomBookState: RecomBookState = {
  book: null,
  books: [],
  isLoading: false,
  error: null,
};

const initialImageState: ImageState = {
  image: null,
  isLoading: false,
  error: null,
};

export const recomBookReducer = (
  state = initialRecomBookState,
  action: RecomBookAction
): RecomBookState => {
  switch (action.type) {
    case 'FETCH_RECOMBOOK':
      return { ...state, isLoading: true, error: null, book: null };
    case 'FETCH_RECOMBOOK_SUCCESS':
      return { ...state, isLoading: false, error: null, book: action.payload };
    case 'FETCH_RECOMBOOK_ERROR':
      return { ...state, isLoading: false, error: action.payload, book: null };

    case 'FETCH_ALL_RECOMBOOKS':
      return { ...state, isLoading: true, error: null, books: [] };
    case 'FETCH_ALL_RECOMBOOKS_SUCCESS':
      return { ...state, isLoading: false, error: null, books: action.payload };
    case 'FETCH_ALL_RECOMBOOKS_ERROR':
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export const imageReducer = (
  state = initialImageState,
  action: ImageAction
): ImageState => {
  switch (action.type) {
    case 'FETCH_IMAGE':
      return { isLoading: true, error: null, image: null };
    case 'FETCH_IMAGE_SUCCESS':
      return { isLoading: false, error: null, image: action.payload };
    case 'FETCH_IMAGE_ERROR':
      return { isLoading: false, error: action.payload, image: null };
    default:
      return state;
  }
};
