import { combineReducers } from 'redux';
import { recordReducer } from './recordReducer';
import { materialReducer } from './materialReducer';
import { recomBookReducer, imageReducer } from './sourceReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  record: recordReducer,
  source_recomBook: recomBookReducer,
  source_Image: imageReducer,
  material: materialReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
