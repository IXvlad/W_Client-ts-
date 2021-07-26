import * as RecordActions from './record';
import * as RecomBookActions from './recomBook';
import * as ImageActions from './image';
import * as MaterialActions from './material';
import * as UserActions from './user';

export default {
  ...RecordActions,
  ...RecomBookActions,
  ...ImageActions,
  ...MaterialActions,
  ...UserActions,
};
