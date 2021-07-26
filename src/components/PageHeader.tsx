import { FC, ReactElement, ComponentType } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import DefaultIcon from '@material-ui/icons/FileCopy';
import { Paper, Card, Typography, Icon } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: theme.palette.background.default,
      transform: 'translateZ(0 )',
      elevation: 0,
    },
    header: {
      padding: theme.spacing(4.25),
      display: 'flex',
      marginBottom: theme.spacing(0),
    },
    icon: {
      display: 'inline-block',
      padding: theme.spacing(2),
      color: theme.palette.primary.dark,
      borderRadius: '12px',
    },
    title: {
      paddingLeft: theme.spacing(4),
      '& .MuiTypography-subtitle2': {
        opacity: '0.6',
      },
    },
  })
);

interface PageHeaderProps {
  title: string;
  subTitle: string;
  icon?: ComponentType;
}
const PageHeader: FC<PageHeaderProps> = ({
  title,
  subTitle,
  icon,
}): ReactElement => {
  const classes = useStyles();
  return (
    <Paper square className={classes.root}>
      <div className={classes.header}>
        <Card className={classes.icon}>
          <Icon component={icon || DefaultIcon} />
        </Card>
        <div className={classes.title}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {subTitle}
          </Typography>
        </div>
      </div>
    </Paper>
  );
};

export default PageHeader;
