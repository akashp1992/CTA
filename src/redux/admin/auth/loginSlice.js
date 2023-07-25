import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiGroup from "../../../API/ApiGroup";

import inMemoryJwt from "../../../services/inMemoryJwtService";

export const doAdminLogin = createAsyncThunk('login/doLogin', async (request) => {
    // const [authUser, setAuthUser] = useLocalStorage("authUser", "")
    // const [token, setToken] = useLocalStorage("token", "")
    return (
        ApiGroup.post('login', request.data)
            // .then((response) => response.json())

            .then((result) => {
                request.onSuccess(result.data);
                console.log("logindata", result.data.data);
                //localStorage.setItem("authUser", true)
                //localStorage.setItem('token', result.data.data.token)
                // setAuthUser(true)
                // setToken(result.data.data.token)
                localStorage.setItem("authUser", true)
                inMemoryJwt.setToken(result.data.data.token)
                return result.data
            })
            .catch((error) => {
                // console.log('error', error);
                request.onFail(error);
                console.log("sliceerror", error.response.data);
                // setAuthUser(false)
                // console.log('LoginError', error.message);
                // alert(error.message);
            })
    );
});
const LoginSlice = createSlice({
    name: 'login',
    initialState: {
        loginData: [],
        loading: false,
    },
    extraReducers: {
        [doAdminLogin.pending]: (state, action) => {
            state.loading = true;
        },
        [doAdminLogin.fulfilled]: (state, action) => {
            state.loading = false;
            state.loginData = { ...action.payload }
        },
        [doAdminLogin.rejected]: (state, action) => {
            state.loading = true;
        },
    },
});
export default LoginSlice.reducer;