import { FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
    },
  })
);

interface RegistrationFormProps {
  size: string;
}
const RegistrationForm: FC<RegistrationFormProps> = ({ size }) => {
  const classes = useStyles();
  return <div className={classes.root}></div>;
};
export default RegistrationForm;
