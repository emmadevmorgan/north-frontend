import { Dashboard } from "@/pages/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};
