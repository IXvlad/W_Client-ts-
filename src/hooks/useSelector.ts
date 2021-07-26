import { TypedUseSelectorHook, useSelector as selector } from 'react-redux';
import { RootState } from '../store/reducers';

export const useSelector: TypedUseSelectorHook<RootState> = selector;
