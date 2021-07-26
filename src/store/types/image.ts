export interface ImageState {
  image: Blob | null;
  isLoading: boolean;
  error: string | null;
}

export type ImageAction =
  | { type: 'FETCH_IMAGE' }
  | { type: 'FETCH_IMAGE_SUCCESS'; payload: Blob }
  | { type: 'FETCH_IMAGE_ERROR'; payload: string };
