import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import ApiClient from "../../../API/ApiClient";
import inMemoryJwtService from "../../../services/inMemoryJwtService";



export const getProfile = createAsyncThunk('profile/getProfile', async (request) => {
    return (
        ApiClient.get('profile', request.data)
            // .then((response) => response.json())

            .then((result) => {
                request.onSuccess(result.data);
                console.log("profile", result.data.data);
                return result.data
                // console.log('LoginMsg', result.data.message);
                //  localStorage.setItem('Token', result.data.token);
                // console.log('resultt', result);
            })
            .catch((error) => {
                // console.log('error', error);
                request.onFail(error);
                console.log("profileError", error.response.status);

                // console.log('LoginError', error.message);
                // alert(error.message);
               
            })
    );
});

export const editProfile = createAsyncThunk('profile/editProfile', async (request) => {
    return (
        ApiClient.post('profile/edit', request.data)
            // .then((response) => response.json())

            .then((result) => {
                request.onSuccess(result.data);
                console.log("edit profile", result.data.data);
                return result.data
                // console.log('LoginMsg', result.data.message);
                //  localStorage.setItem('Token', result.data.token);
                // console.log('resultt', result);
            })
            .catch((error) => {
                // console.log('error', error);
                request.onFail(error);
                console.log("edit profileError", error.response.data);
                // console.log('LoginError', error.message);
                // alert(error.message);
            
            })
    );
});

export const changePassword = createAsyncThunk('password/changePassword', async (request) => {
    return (
        ApiClient.post('change/password', request.data)
            // .then((response) => response.json())

            .then((result) => {
                request.onSuccess(result.data);
                console.log("change password", result.data.data);
                return result.data
                // console.log('LoginMsg', result.data.message);
                //  localStorage.setItem('Token', result.data.token);
                // console.log('resultt', result);
            })
            .catch((error) => {
                // console.log('error', error);
                request.onFail(error.response.data);
                console.log("change password error", error.response.data.message);
                // console.log('LoginError', error.message);
            })
    );
});
const ProfileSlice = createSlice({
    name: 'profile',
    initialState: {
        profileData: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProfile.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getProfile.fulfilled, (state, action) => {
            state.loading = false;
            state.profileData = action.payload.data
        });
        builder.addCase(getProfile.rejected, (state, action) => {
            state.loading = true;
        })
        builder.addCase(editProfile.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(editProfile.fulfilled, (state, action) => {
            state.loading = false;
            state.profileData = action.payload.data
        });
        builder.addCase(editProfile.rejected, (state, action) => {
            state.loading = true;
        })
        builder.addCase(changePassword.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(changePassword.fulfilled, (state, action) => {
            state.loading = false;
            state.profileData = action.payload.data
        });
        builder.addCase(changePassword.rejected, (state, action) => {
            state.loading = true;
        })
    },
});
export default ProfileSlice.reducer;
