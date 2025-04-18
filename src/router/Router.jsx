import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../mainLayout/Mainlayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import JobDetails from "../pages/JobDetails";
import PrivateRoute from "../context/Private/PrivateRoute";
import JobApplicationForm from "../pages/JobApplication";
import Myapplication from "../pages/Myapplication";
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
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
      },
      {
        path: "/job-application/:id",
        element: (
          <PrivateRoute>
            <JobApplicationForm />,
          </PrivateRoute>
        ),
      },
      {
        path: "my-application",
        element: <Myapplication></Myapplication>,
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
