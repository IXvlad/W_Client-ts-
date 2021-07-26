import React, { FC } from 'react';
import { Button } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 0,
      margin: theme.spacing(0.5),
    },
    secondary: {
      backgroundColor: theme.palette.secondary.light,
      '& .MuiButton-label': {
        color: theme.palette.secondary.dark,
      },
    },
    primary: {
      backgroundColor: '#F8F9FA',
      '& .MuiButton-label': {
        color: theme.palette.primary.dark,
      },
    },
    success: {
      backgroundColor: '#28A745',
      '& .MuiButton-label': {
        color: 'gray',
      },
    },
  })
);

interface ActionButtonProps {
  color: 'root' | 'secondary' | 'primary' | 'success';
  type?: 'submit' | 'reset' | 'button';
  //onClick: (e: React.MouseEvent) => void;
}
const ActionButton: FC<ActionButtonProps> = ({ color, type, children }) => {
  const classes = useStyles();

  return (
    <Button type={type} className={`${classes.root} ${classes[color]}`}>
      {children}
    </Button>
  );
};
export default ActionButton;
