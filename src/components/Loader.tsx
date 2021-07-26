import { FC } from 'react';
import {
  CircularProgress,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
    },
    progress: {
      color: theme.palette.primary.light,
    },
  })
);

interface LoaderProps {
  size: string;
}
const Loader: FC<LoaderProps> = ({ size }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress className={classes.progress} size={size} />
    </div>
  );
};
export default Loader;
