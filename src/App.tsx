import React, { ReactElement, useReducer, FC } from 'react';
import {
  createMuiTheme,
  Theme,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import { lightTheme, darkTheme } from './theme/appTheme';
import { routes } from './routes';
import RouteItem from './models/routeItem';

const AppContext = React.createContext(null);
const DefaultComponent: FC<{}> = (): ReactElement => (
  <div>{`No Component Defined.`}</div>
);

export default function App() {
  const [useDefaultTheme, toggle] = useReducer((theme) => !theme, true);

  let theme: Theme = createMuiTheme(useDefaultTheme ? lightTheme : darkTheme);
  theme = responsiveFontSizes(theme);

  return (
    <AppContext.Provider value={null}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Layout toggleTheme={toggle} useDefaultTheme={useDefaultTheme}>
              {routes.map((route: RouteItem) =>
                route.subRoutes ? (
                  route.subRoutes.map((item: RouteItem) => (
                    <Route
                      key={`${item.key}`}
                      path={`${item.path}`}
                      component={item.component || DefaultComponent}
                      exact
                    />
                  ))
                ) : (
                  <Route
                    key={`${route.key}`}
                    path={`${route.path}`}
                    component={route.component || DefaultComponent}
                    exact
                  />
                )
              )}
            </Layout>
          </Switch>
        </Router>
      </ThemeProvider>
    </AppContext.Provider>
  );
}
