import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Layout from "./Components/Layout"; 
import FloodControlBudget from "./FloodControlProject/FloodControlBudget";
import "./App.css";
import DataAnalysisPage from "./FloodControlProject/FloodControlAnalysis/FloodDataAnalysis";
import FloodControlTimelinePage from "./FloodControlProject/FloodTimeline"
import Landing from "./FloodControlProject/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      { index: true, element: <Landing /> },
      { path: "flood-control", element: <Landing /> },
      { path: "flood-control/flood-control-budget", element: <FloodControlBudget /> },
      { path: "flood-control/flood-control-analysis", element: <DataAnalysisPage /> },
      { path: "flood-control/flood-control-timeline", element: <FloodControlTimelinePage /> },
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