import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./components/protectedRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import TestLogin from "./pages/testLogin";
import TestProfile from "./pages/testProfile";
import Tests from "./pages/tests";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TestLogin />}></Route>
        <Route
          path="/testProfile"
          element={
            <ProtectedRoute>
              <TestProfile />
            </ProtectedRoute>
          }
        />
        <Route path="tests" element={<Tests />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
