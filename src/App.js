import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Layout from "./Components/Layout"; 
import FloodControlBase from "./FloodControlProject/FloodControlBase";

import "./App.css";
import DataAnalysisPage from "./FloodControlProject/FloodDataAnalysis";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      { index: true, element: <FloodControlBase /> },
      { path: "/flood-control-budget", element: <FloodControlBase /> },
      { path: "/flood-control-analysis", element: <DataAnalysisPage /> },
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