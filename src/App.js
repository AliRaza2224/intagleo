import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import SignUp from "./pages/user/signup/SignUp";
import LogIn from "./pages/user/login/LogIn";
import ForgotPassword from './pages/user/ForgotPassword/ForgotPassword';

function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<LogIn />} />
          <Route path="/forget-password" element={<ForgotPassword />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
