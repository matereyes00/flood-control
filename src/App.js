import {
    createBrowserRouter,
    RouterProvider,
    createHashRouter,
} from "react-router-dom";
import Layout from "./Components/Layout"; 
import FloodControlBudget from "./FloodControlProject/FloodControlBudget";
import "./App.css";
import DataAnalysisPage from "./FloodControlProject/FloodControlAnalysis/FloodDataAnalysis";
import FloodControlTimelinePage from "./FloodControlProject/FloodTimeline"
import Landing from "./FloodControlProject/Landing";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      { index: true, element: <Landing /> },
      { path: "budget", element: <FloodControlBudget /> },
      { path: "analysis", element: <DataAnalysisPage /> },
      { path: "timeline", element: <FloodControlTimelinePage /> },
    ],
  },
], {
    // Add the basename here for deployment (e.g., on GitHub Pages)
});

function App() {
    // The App component now only needs to provide the router
    return <RouterProvider router={router} />;
}

export default App;