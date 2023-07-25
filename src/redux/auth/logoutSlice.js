import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import API from "../../API/API";
import ApiClient from "../../API/ApiClient";

export const doLogout = createAsyncThunk('logout/doLogout', async (request) => {
    const navigate = useNavigate()
    return (
        ApiClient.get('logout')
            // .then((response) => response.json())

            .then((result) => {
                request.onSuccess(result.data);
                console.log("logout", result.data);
               
                localStorage.removeItem('user')
                localStorage.removeItem('token')
                // console.log('LoginMsg', result.data.message);
                //const userData = { token: result.data.data.token, success: result.data.success }
                //localStorage.setItem('user', JSON.stringify(userData));
                // console.log('resultt', result);
            })
            .catch((error) => {
                // console.log('error', error);
                //request.onFail(error);
                console.log("sliceerror", error.response.data);
                // console.log('LoginError', error.message);
                // alert(error.message);
            })
    );
});
const LogoutSlice = createSlice({
    name: 'logout',
    initialState: {
        registerData: null,
        loading: false,
    },
    extraReducers: {
        [doLogout.pending]: (state, action) => {
            state.loading = true;
        },
        [doLogout.fulfilled]: (state, action) => {
            state.loading = false;
            state.registerData = action.payload;
        },
        [doLogout.rejected]: (state, action) => {
            state.loading = true;
        },
    },
});
export default LogoutSlice.reducer;