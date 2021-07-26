import { RecordAction, RecordState } from '../types/record';

const initialState: RecordState = {
  records: [],
  articles: [],
  patents: [],
  books: [],
  resWelding: null,
  isLoading: false,
  error: null,
};

export const recordReducer = (
  state = initialState,
  action: RecordAction
): RecordState => {
  switch (action.type) {
    case 'FETCH_RECORDS':
      return { ...state, isLoading: true, error: null };
    case 'FETCH_RECORDS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        error: null,
        records: action.payload,
      };
    case 'FETCH_RECORDS_ERROR':
      return { ...state, isLoading: false, error: action.payload };
    case 'FETCH_RESULT_WELDING':
      return { ...state, isLoading: true, error: null };
    case 'FETCH_RESULT_WELDING_SUCCESS':
      return {
        ...state,
        isLoading: false,
        error: null,
        // TO DO
        // Необходимо согласовать IRecordDTO и IRecord
        // на строне клиента и api
        //
        //records: action.payload.records,
        resWelding: action.payload.materials,
      };
    case 'FETCH_RESULT_WELDING_ERROR':
      return { ...state, isLoading: false, error: action.payload };
    case 'UPDATE_ARTICLE':
      return { ...state, isLoading: true, error: null };
    case 'UPDATE_ARTICLE_SUCCESS':
      return {
        ...state,
        isLoading: true,
        error: null,
        articles: state.articles.map((article) =>
          article.Id === action.payload.Id ? action.payload : article
        ),
      };
    case 'UPDATE_ARTICLE_ERROR':
      return { ...state, isLoading: false, error: action.payload };
    case 'UPDATE_PATENT':
      return { ...state, isLoading: true, error: null };
    case 'UPDATE_PATENT_SUCCESS':
      return {
        ...state,
        isLoading: true,
        error: null,
        patents: state.patents.map((patent) =>
          patent.Id === action.payload.Id ? action.payload : patent
        ),
      };
    case 'UPDATE_PATENT_ERROR':
      return { ...state, isLoading: false, error: action.payload };
    case 'UPDATE_BOOK':
      return { ...state, isLoading: true, error: null };
    case 'UPDATE_BOOK_SUCCESS':
      return {
        ...state,
        isLoading: true,
        error: null,
        books: state.books.map((book) =>
          book.Id === action.payload.Id ? action.payload : book
        ),
      };
    case 'UPDATE_BOOK_ERROR':
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
