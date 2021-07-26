import { IMaterialDTO } from '../../models/DTO/materialDTO';

export interface MaterialState {
  materials: IMaterialDTO[];
  excel: Blob | null;
  availableFiles: number[];
  isLoading: boolean;
  error: string | null;
}

export type MaterialAction =
  | { type: 'FETCH_MATERIALS' }
  | { type: 'FETCH_MATERIALS_SUCCESS'; payload: IMaterialDTO[] }
  | { type: 'FETCH_MATERIALS_ERROR'; payload: string }
  | { type: 'FETCH_MATERIAL_EXCEL' }
  | { type: 'FETCH_MATERIAL_EXCEL_SUCCESS'; payload: Blob }
  | { type: 'FETCH_MATERIAL_EXCEL_ERROR'; payload: string }
  | { type: 'FETCH_MATERIAL_AVAILABLE_FILES' }
  | { type: 'FETCH_MATERIAL_AVAILABLE_FILES_SUCCESS'; payload: number[] }
  | { type: 'FETCH_MATERIAL_AVAILABLE_FILES_ERROR'; payload: string };
