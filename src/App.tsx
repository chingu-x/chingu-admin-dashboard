import { Navigate, Route, Routes } from "react-router";
import DataTable from "./pages/DataTable";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const routes = [
  {
    label: "Applications",
    path: "applications",
    key: 1,
  },
  {
    label: "Solo Projects",
    path: "solo-projects",
    key: 2,
  },
  {
    label: "Voyage Signups",
    path: "voyage-signups",
    key: 3,
  },
  {
    label: "Voyage Team Status",
    path: "voyage-team-status",
    key: 4,
  },
  {
    label: "Voyage Checkins",
    path: "voyage-checkins",
    key: 5,
  },
  {
    label: "Voyage Projects",
    path: "voyage-projects",
    key: 6,
  },
  {
    label: "Pair Programming Signups",
    path: "pair-programming-signups",
    key: 7,
  },
  {
    label: "Pair Programming Feedback",
    path: "pair-programming-feedback",
    key: 8,
  },
];

function App() {
  return (
    <Routes>
      {/* Main Layout */}
      <Route element={<MainLayout routes={routes} />}>
        <Route path="/" element={<Navigate to="/applications" replace />} />
        {routes.map((route) => (
          <Route
            key={route.key}
            path={`/${route.path}`}
            element={<DataTable data={route.label} />}
          />
        ))}
      </Route>

      {/* Auth Layout */}
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
