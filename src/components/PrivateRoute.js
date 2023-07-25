import Client from "../client/Client";
import Public from "./public/Public";
import crypto from 'crypto-js'
import { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMediaQuery, useTheme } from "@mui/material";
import Swal from "sweetalert2";

function PrivateRoute() {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("authUser"))
    const theme = useTheme()
    const isTablet = useMediaQuery(theme.breakpoints.down("sm"))
    const [isValid, setIsValid] = useState(false)
    useEffect(() => {
        if (isTablet) {
            setIsValid(true)
        }
    }, [isValid])
    return isValid ? Swal.fire(
        'Currently your CTAF dashboard is accessible just on Desktop Version!',
        'We will soon launch on other devices and you will be first one to know :)',
        'success'
    ) : isAuth ? <Outlet /> : <Navigate to="/" replace={true} />;
}

export default PrivateRoute;