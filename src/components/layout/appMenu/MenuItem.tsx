import React, { FC, ReactElement } from 'react';
import clsx from 'clsx';
import {
  ListItem,
  Icon,
  Tooltip,
  IconButton,
  Typography,
} from '@material-ui/core';
import DefaultIcon from '@material-ui/icons/FileCopy';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { NavLink, useLocation } from 'react-router-dom';

import RouteItem from '../../../models/routeItem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    selected: {
      transition: 'box-shadow',
      transitionDuration: '1s',
      boxShadow: `0 0 3px ${theme.palette.primary.main}, 0 0 9px ${theme.palette.primary.main}, 0 0 11px ${theme.palette.primary.main}, 0 0 30px ${theme.palette.primary.main}`,
    },
    nested: {
      marginLeft: theme.spacing(2),
    },
    listItemDisabled: {
      cursor: 'not-allowed',
    },
    navLink: {
      textDecoration: 'none',
      color: 'inherit',
    },
    labelRoot: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(1, 0),
    },
    labelIcon: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(3.5),
    },
  })
);

const MenuItem: FC<RouteItem> = (route: RouteItem): ReactElement => {
  const classes = useStyles();
  const location: any = useLocation();

  const handleNavigate = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ): void => {
    if (!route.enabled) e.preventDefault();
  };

  return (
    <div key={route.title}>
      <NavLink
        to={`${route.path}`}
        key={route.title + '-navLink'}
        onClick={handleNavigate}
        className={clsx(classes.navLink, {
          [classes.listItemDisabled]: !route.enabled,
        })}
      >
        <Tooltip title={route.tooltip || ''} placement="right">
          <ListItem button disabled={!route.enabled}>
            <IconButton
              className={clsx(classes.labelIcon, {
                [classes.selected]: location.pathname === route.path,
              })}
              size="small"
            >
              <Icon component={route.icon || DefaultIcon} />
            </IconButton>
            <Typography className={classes.labelRoot}>{route.title}</Typography>
          </ListItem>
        </Tooltip>
      </NavLink>
    </div>
  );
};

export default MenuItem;
