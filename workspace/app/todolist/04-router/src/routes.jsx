import Layout from "@components/Layout";
import About from "@pages/About";
import Home from "@pages/Home";
import TodoList from "@pages/TodoList";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: 'home', element: <Home />},
      { path: 'about', element: <About />},
      { path: 'list', element: <TodoList />}
    ],
  }], {
    future: {
      // 없으면 콘솔에 경고 표시
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export default router;