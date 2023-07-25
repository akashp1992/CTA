import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../API/API";
import ApiClient from "../../API/ApiClient";
import inMemoryJwtService from "../../services/inMemoryJwtService";

export const doSignup = createAsyncThunk('signup/doSignup', async (request) => {
    return (
        ApiClient.post('register', request.data)
            // .then((response) => response.json())

            .then((result) => {
                request.onSuccess(result.data);
                console.log("slice", result.data.data);
                // console.log('LoginMsg', result.data.message);
                const userData = { success: result.data.success }
                localStorage.setItem('authUser', result.data.success);
                inMemoryJwtService.setToken(result.data.data.token)
                // console.log('resultt', result);
            })
            .catch((error) => {
                // console.log('error', error);
                request.onFail(error);
                console.log("sliceerror", error.response.data);
                // console.log('LoginError', error.message);
                // alert(error.message);
            })
    );
});
const RegisterSlice = createSlice({
    name: 'register',
    initialState: {
        registerData: [],
        loading: false,
    },
    extraReducers: {
        [doSignup.pending]: (state, action) => {
            state.loading = true;
        },
        [doSignup.fulfilled]: (state, action) => {
            state.loading = false;
            state.registerData = action.payload;
        },
        [doSignup.rejected]: (state, action) => {
            state.loading = true;
        },
    },
});
export default RegisterSlice.reducer;