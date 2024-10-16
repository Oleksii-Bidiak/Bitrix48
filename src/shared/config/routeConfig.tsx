import { type RouteProps } from 'react-router-dom';
import { HomePage } from '../../pages/HomePage';
import { RegistrationPage, LoginPage } from '../../pages/Auth';
import { FilesPage } from '../../pages/FilesPage';
import { NotFoundPage } from '../../pages/NotFoundPage';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  // roles?: UserRole[]
};

export enum AppRoutes {
  // Стрічка подій
  HOME = 'home',
  //	Dashboard	Головна панель після входу
  //   DASHBOADR = 'dashboard',
  // /tasks	TasksBoard	Список задач або канбан-дошка
  //   TASKS = 'tasks',
  // /tasks/:id	TaskDetails	Детальна інформація про задачу
  //   TASKS_DETAILS = 'tasks_details',
  // /chat	Chat	Вікно чату (список розмов)
  //   CHATS = 'chats',
  // /chat/:id	ChatRoom	Вікно конкретного чату
  //   CHATS_DETAILS = 'chats_details',
  // /crm	CRM	Сторінка зі списком контактів та лідів
  //   CRM = 'crm',
  // /crm/:id	ContactDetails	Детальна інформація про контакт
  //   CRM_DETAILS = 'crm_details',
  // /calendar	Calendar	Календар з подіями
  //   CALENDAR = 'calendar',
  // /files	Files	Список файлів та папок
  FILES = 'files',
  // /profile	UserProfile	Профіль користувача
  //   PROFILE = 'profile',
  // /login	Login	Сторінка входу
  LOGIN = 'login',
  // /register	Register	Сторінка реєстрації
  REGISTRATION = 'registration',
  //   last
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  //   [AppRoutes.DASHBOADR]: '/dashboard',
  //   [AppRoutes.TASKS]: '/tasks',
  //   [AppRoutes.TASKS_DETAILS]: '/tasks/',
  //   [AppRoutes.CHATS]: '/chats',
  //   [AppRoutes.CHATS_DETAILS]: '/chats/',
  //   [AppRoutes.CRM]: '/crm',
  //   [AppRoutes.CRM_DETAILS]: '/crm/',
  //   [AppRoutes.CALENDAR]: '/calendar',
  [AppRoutes.FILES]: '/files',
  //   [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.REGISTRATION]: '/registration',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: RoutePath.home,
    element: <HomePage />,
  },
  [AppRoutes.REGISTRATION]: {
    path: RoutePath.registration,
    element: <RegistrationPage />,
  },
  [AppRoutes.LOGIN]: {
    path: RoutePath.login,
    element: <LoginPage />,
  },
  [AppRoutes.FILES]: {
    path: RoutePath.files,
    element: <FilesPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
