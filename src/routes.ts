import MenuBookIcon from '@material-ui/icons/MenuBook';
import DescriptionIcon from '@material-ui/icons/Description';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import UserIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

import Records from './pages/Records';
import Expert from './pages/Expert';

import RouteItem from './models/routeItem';

export const routes: Array<RouteItem> = [
  {
    key: 'route-article',
    title: 'Статьи',
    tooltip: 'Статьи',
    path: '/',
    enabled: true,
    component: Records,
    appendDivider: true,
    icon: DescriptionIcon,
  },
  {
    key: 'route-auth',
    title: 'Вход в систему',
    tooltip: 'Вход в систему',
    path: '/auth',
    enabled: true,
    component: Expert,
    appendDivider: true,
    icon: UserIcon,
    subRoutes: [
      {
        key: 'route-auth-login',
        title: 'Войти',
        tooltip: 'Войти',
        path: '/auth/login',
        enabled: false,
        component: Expert,
        icon: AccountBoxIcon,
      },
      {
        key: 'route-auth-registration',
        title: 'Регистрация',
        tooltip: 'Регистрация',
        path: '/auth/registration',
        enabled: true,
        component: Expert,
        icon: PersonAddIcon,
      },
      {
        key: 'route-auth-logout',
        title: 'Выход',
        tooltip: 'Выход',
        path: '/auth/logout',
        enabled: false,
        component: Expert,
        icon: ExitToAppIcon,
      },
    ],
  },
  {
    key: 'route-expert',
    title: 'Эксперт',
    tooltip: 'Эксперт',
    path: '/expert',
    enabled: true,
    icon: SupervisedUserCircleIcon,
    appendDivider: true,
    subRoutes: [
      {
        key: 'route-expert-book',
        title: 'Книги',
        tooltip: 'Редактирование книг',
        path: '/expert/book',
        enabled: false,
        component: Expert,
        icon: MenuBookIcon,
      },
      {
        key: 'route-expert-article',
        title: 'Статьи',
        tooltip: 'Редактирование статей',
        path: '/expert/article',
        enabled: false,
        component: Expert,
        icon: DescriptionIcon,
      },
      {
        key: 'route-expert-patent',
        title: 'Патенты',
        tooltip: 'Редактирование патентов',
        path: '/expert/patent',
        enabled: false,
        component: Expert,
        icon: DescriptionIcon,
      },
    ],
  },
  {
    key: 'route-settings',
    title: 'Настройки',
    tooltip: 'Настройки',
    path: '/settings',
    enabled: false,
    component: Expert,
    icon: SettingsIcon,
  },
];
