import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../API/API";
import ApiClient from "../../API/ApiClient";
import inMemoryJwt from "../../services/inMemoryJwtService";

export const doLogin = createAsyncThunk('login/doLogin', async (request,admin) => {
    // const [authUser, setAuthUser] = useLocalStorage("authUser", "")
    // const [token, setToken] = useLocalStorage("token", "")
    return (
        ApiClient.post('login', request.data)
            // .then((response) => response.json())

            .then((result) => {
                request.onSuccess(result.data);
                console.log("logindata", result.data.data);
                //localStorage.setItem("authUser", true)
                //localStorage.setItem('token', result.data.data.token)
                // setAuthUser(true)
                // setToken(result.data.data.token)
                localStorage.setItem("authUser", true)
                if(result.data.data.is_root_user===0){
                    localStorage.setItem("isAdmin",false)
                }
                if(result.data.data.is_root_user===1){
                    localStorage.setItem("isAdmin",true)
                }
                
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
        [doLogin.pending]: (state, action) => {
            state.loading = true;
        },
        [doLogin.fulfilled]: (state, action) => {
            state.loading = false;
            state.loginData = { ...action.payload }
        },
        [doLogin.rejected]: (state, action) => {
            state.loading = true;
        },
    },
});
export default LoginSlice.reducer;