import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DashboardPage from "./pages/DashboardPage";
import ArchivePage from "./pages/ArchivePage";
import AuthPage from "./pages/AuthPage";
import Invoices from "./pages/Invoices"; // <-- Invoice page imported
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import CollectionsPage from "./pages/Collections"

function App() {
  const theme = createTheme({
    palette: {
      silver: {
        main: "#e6e8ec",
        light: "#e6e8ec",
        dark: "#e6e8ec",
        contrastText: "#e6e8ec",
      },

      primary: {
        main: "#0336FF",
        light: "#0336FF",
        dark: "#0336FF",
        contrastText: "#0336FF",
      },
    },
  });
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/login" element={<AuthPage />} />
            <Route exact element={<ProtectedRoute />}>
              <Route
                exact
                path="/:org_id/dashboard"
                element={<DashboardPage />}
              />
              <Route exact path="/:org_id/archive" element={<ArchivePage />} />
              <Route exact path="/organizations" element={<DashboardPage />} />
              <Route
                exact
                path="/:org_id/collection"
                element={<CollectionsPage />}
              />
              <Route
                exact
                path="/:org_id/collection/:collection_id"
                element={<CollectionsPage />}
              />
              {/* New Invoice Page Route */}
              <Route
                exact
                path="/:org_id/invoices"
                element={<Invoices />}
              />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Route>
            <Route />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
