import { FC, ReactElement } from 'react';
import clsx from 'clsx';
import {
  Divider,
  ListItem,
  Icon,
  IconButton,
  Typography,
} from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import DefaultIcon from '@material-ui/icons/FileCopy';
import { useLocation } from 'react-router-dom';

import MenuItem from './MenuItem';
import { routes } from '../../../routes';
import RouteItem from '../../../models/routeItem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginLeft: theme.spacing(-1),
    },
    divider: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    nested: {
      marginLeft: theme.spacing(2.5),
    },
    selected: {
      transition: 'box-shadow',
      transitionDuration: '1s',
      boxShadow: `0 0 3px ${theme.palette.primary.main}, 0 0 9px ${theme.palette.primary.main}, 0 0 11px ${theme.palette.primary.main}, 0 0 30px ${theme.palette.primary.main}`,
    },
    labelIcon: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(3.5),
    },
    parentTreeItem: {
      marginLeft: theme.spacing(-3),
    },
    labelRoot: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(1, 0),
    },
  })
);

const AppMenu: FC<{}> = (): ReactElement => {
  const classes = useStyles();
  const location: any = useLocation();

  return (
    <TreeView className={classes.root}>
      {routes.map((route: RouteItem) => (
        <div key={route.key + '-div'}>
          {route.subRoutes ? (
            <TreeItem
              key={route.key + '-treeItem'}
              nodeId={route.key + '-treeItem'}
              className={classes.parentTreeItem}
              label={
                <ListItem key={route.key} button>
                  <IconButton
                    className={clsx(classes.labelIcon, {
                      [classes.selected]: route.subRoutes.some(
                        (item: RouteItem) => item.path === location.pathname
                      ),
                    })}
                    size="small"
                  >
                    <Icon component={route.icon || DefaultIcon} />
                  </IconButton>
                  <Typography className={classes.labelRoot}>
                    {route.title}
                  </Typography>
                </ListItem>
              }
            >
              <div className={classes.nested}>
                {route.subRoutes.map((sRoute: RouteItem) => (
                  <MenuItem
                    key={sRoute.key}
                    title={sRoute.title}
                    icon={sRoute.icon}
                    tooltip={sRoute.tooltip}
                    path={sRoute.path}
                    enabled={sRoute.enabled}
                    component={sRoute.component}
                    subRoutes={sRoute.subRoutes}
                  />
                ))}
              </div>
            </TreeItem>
          ) : (
            <MenuItem
              key={route.key}
              title={route.title}
              icon={route.icon}
              tooltip={route.tooltip}
              path={route.path}
              enabled={route.enabled}
              component={route.component}
              subRoutes={route.subRoutes}
            />
          )}
          {route.appendDivider && <Divider className={classes.divider} />}
        </div>
      ))}
    </TreeView>
  );
};
export default AppMenu;
