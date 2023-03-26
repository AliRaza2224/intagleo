import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import SignUp from "./pages/user/signup/SignUp";
import LogIn from "./pages/user/login/LogIn";
import { ToastContainer } from 'react-toastify';
import ForgotPasswordPage from './pages/user/ForgotPassword/ForgotPasswordPage';
import { useSelector } from "react-redux";
import EmployeeDashboards from './pages/dashBoard/EmployeeDashboards';
function App() {

  const saveToken = useSelector((state) => state.auth.userToken);

  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes>
          {!saveToken ? (
            <>
              <Route exact path="/log-in" element={<LogIn />} />
              <Route exact path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route exact path="/sign-up" element={<SignUp />} />
              <Route
                exact
                path="/"
                element={<Navigate to="/log-in" replace={true} />}
              />
              <Route
                exact
                path="/*"
                element={<Navigate to="/log-in" replace={true} />}
              />
            </>
          ) : (
            <>
               (
                <Route
                  exact
                  path="/log-in"
                  element={<Navigate to="/" replace={true} />}
                />
            ) 
              <Route exact path="/" element={<EmployeeDashboards />} />

             )
              <Route
                exact
                path="/"
                element={<Navigate to="/" replace={true} />}
              />
            </>
          )}
        </Routes>
      </Router>

    </div>
  );
}

export default App;
