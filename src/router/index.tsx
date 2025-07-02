import { createBrowserRouter } from "react-router";
import App from "../App";
import User from "@/pages/User";
import Task from "@/pages/Task";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/users",
        Component: User,
      },
      {
        path: "/tasks",
        Component: Task,
      },
    ],
  },
]);

export default router;
