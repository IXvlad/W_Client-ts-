import { IRecomBookDTO } from '../../models/DTO/recomBookDTO';

export interface RecomBookState {
  book: Blob | null;
  books: IRecomBookDTO[];
  isLoading: boolean;
  error: string | null;
}

export type RecomBookAction =
  | { type: 'FETCH_RECOMBOOK' }
  | { type: 'FETCH_RECOMBOOK_SUCCESS'; payload: Blob }
  | { type: 'FETCH_RECOMBOOK_ERROR'; payload: string }
  | { type: 'FETCH_ALL_RECOMBOOKS' }
  | { type: 'FETCH_ALL_RECOMBOOKS_SUCCESS'; payload: IRecomBookDTO[] }
  | { type: 'FETCH_ALL_RECOMBOOKS_ERROR'; payload: string };
