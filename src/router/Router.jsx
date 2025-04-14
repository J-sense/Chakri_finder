import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../mainLayout/Mainlayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import JobDetails from "../pages/JobDetails";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs/:id",
        element: <JobDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "signIn",
        element: <SignIn />,
      },
    ],
  },
]);
