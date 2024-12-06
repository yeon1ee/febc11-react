import Layout from '@components/layout'

import { createBrowserRouter } from 'react-router-dom';
import List from './pages/board/List';
import New from './pages/board/New';
import Edit from './pages/board/Edit';
import Detail from './pages/board/Detail';
import Signup from './pages/user/SignUp'
import Login from './pages/user/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <mainPage /> },
      { path: ':type', element: <List /> },
      { path: ':type/new', element: <New /> },
      { path: ':type/:_id', element: <Detail /> },
      { path: ':type/:_id/edit', element: <Edit /> },
      { path: 'users/signup', element: <Signup /> },
      { path: 'users/login', element: <Login /> },
    ]
  },
]);

export default router;