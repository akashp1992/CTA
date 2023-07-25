import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import AboutUs from "./components/About/AboutUs";
import { Route, BrowserRouter as Router, Routes, Navigate, Outlet } from "react-router-dom";
import Calculate from "./components/Calculate";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material";
import LandingPage from "./components/Landing/LandingPage";
import Banner from "./components/FreezeBanner/FreezBanner";
import FormDialog from "./components/Login/FormDialog";
import { Provider } from "react-redux";
import store from "./redux/store";
import Client from "./client/Client";
import PrivateRoute from "./components/PrivateRoute";
import Public from "./components/public/Public";
import { useEffect, useState } from "react";
import Admin from "./admin/Admin";

function App() {
  const theme = createTheme();
  useEffect(() => {
    if (!("Notification" in window)) {
        console.log("Browser does not support desktop notification");
    } else {
        Notification.requestPermission();
    }
}, [])
  // const [user, setUser] = useState()
  // useEffect(() => {
  //   setUser(localStorage.getItem('authUser'))
  // }, [])
  const ProtectedRoute = ({
    isAllowed,
    redirectPath = '/',
    children,
  }) => {
    const [user, setUser] = useState(localStorage.getItem('authUser'))

    if (user) {
      return <Navigate to="/dashboard/Home" replace />;
    }

    return children ? children : <Outlet />;
  };
  return (
    <div>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <Routes>
              <Route path="/*" element={<Public />} />
              <Route element={<PrivateRoute />}>
                <Route path="/dashboard/*" element={<Client />} />
              </Route>
              <Route element={<PrivateRoute />}>
                <Route path="/dashboard/Admin/*" element={<Admin />} />
              </Route>
            </Routes>
          </Router>
        </ThemeProvider>
      </Provider>

    </div>
  );
}

// <SecondBanner />
// <SignupBanner />
// <CorporateAct />
// <FAQ />
// <Blog />
// <Contact />
export default App;
