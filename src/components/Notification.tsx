import { FC, useState } from 'react';
import { makeStyles, createStyles, Theme, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      top: theme.spacing(9),
    },
  })
);

interface NotificationProps {
  notify: any;
  setNotify: any;
}
const Notification: FC<NotificationProps> = ({ notify, setNotify }) => {
  const classes = useStyles();
  const CloseHandle = () => {
    setNotify({
      ...notify,
      isOpen: false,
    });
  };
  return (
    <Snackbar
      className={classes.root}
      open={notify.isOpen}
      autoHideDuration={2000}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      onClose={CloseHandle}
    >
      <Alert severity={notify.type} onClose={CloseHandle}>
        {notify.message}
      </Alert>
    </Snackbar>
  );
};
export default Notification;
