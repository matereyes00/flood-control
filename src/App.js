import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Layout from "./Components/Layout"; // Make sure this path is correct
import FloodControlBase from "./FloodControlProject/FloodControlBase";

import "./App.css";

// Define all your routes using the modern data API
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // The Layout component wraps all child routes
    children: [
      { path: "/flood-control-budget", element: <FloodControlBase /> },
    ],
  },
], {
    // Add the basename here for deployment (e.g., on GitHub Pages)
    basename: "/",
});

function App() {
    // The App component now only needs to provide the router
    return <RouterProvider router={router} />;
}

export default App;