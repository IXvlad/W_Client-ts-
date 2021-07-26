import { IRecordDTO } from '../../models/DTO/recordDTO';
import { IResWeldWithRecDTO } from '../../models/DTO/ResWeldWithRecDTO';
import { IRecord } from '../../models/record';
import { IResWeldMaterials } from '../../models/resWeldMaterials';

export interface RecordState {
  records: IRecordDTO[];
  articles: IRecord[];
  patents: IRecord[];
  books: IRecord[];
  resWelding: IResWeldMaterials | null;
  isLoading: boolean;
  error: string | null;
}

export type RecordAction =
  | { type: 'FETCH_RECORDS' }
  | { type: 'FETCH_RECORDS_SUCCESS'; payload: IRecordDTO[] }
  | { type: 'FETCH_RECORDS_ERROR'; payload: string }
  | { type: 'FETCH_RESULT_WELDING' }
  | { type: 'FETCH_RESULT_WELDING_SUCCESS'; payload: IResWeldWithRecDTO }
  | { type: 'FETCH_RESULT_WELDING_ERROR'; payload: string }
  | { type: 'FETCH_ARTICLES' }
  | { type: 'FETCH_ARTICLES_SUCCESS'; payload: IRecord[] }
  | { type: 'FETCH_ARTICLES_ERROR'; payload: string }
  | { type: 'UPDATE_ARTICLE' }
  | { type: 'UPDATE_ARTICLE_SUCCESS'; payload: IRecord }
  | { type: 'UPDATE_ARTICLE_ERROR'; payload: string }
  | { type: 'FETCH_PATENTS' }
  | { type: 'FETCH_PATENTS_SUCCESS'; payload: IRecord[] }
  | { type: 'FETCH_PATENTS_ERROR'; payload: string }
  | { type: 'UPDATE_PATENT' }
  | { type: 'UPDATE_PATENT_SUCCESS'; payload: IRecord }
  | { type: 'UPDATE_PATENT_ERROR'; payload: string }
  | { type: 'FETCH_BOOKS' }
  | { type: 'FETCH_BOOKS_SUCCESS'; payload: IRecord[] }
  | { type: 'FETCH_BOOKS_ERROR'; payload: string }
  | { type: 'UPDATE_BOOK' }
  | { type: 'UPDATE_BOOK_SUCCESS'; payload: IRecord }
  | { type: 'UPDATE_BOOK_ERROR'; payload: string };
