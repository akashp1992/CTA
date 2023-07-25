import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import ApiClient from "../../../API/ApiClient";
import inMemoryJwtService from "../../../services/inMemoryJwtService";

export const getNotification = createAsyncThunk('notification/getNotification', async (request) => {
    return (
        ApiClient.get('notification/list', request.data)
            .then((result) => {
                request.onSuccess(result.data);
                console.log("notification", result.data.data);
                // console.log('LoginMsg', result.data.message);
                //  localStorage.setItem('Token', result.data.token);
                // console.log('resultt', result);
            })
            .catch((error) => {
                // console.log('error', error);
                request.onFail(error);
                console.log("notificationError", error.response.data);
                // console.log('LoginError', error.message);
                // alert(error.message);
                // if (error.response.status === 401) {
                //     localStorage.setItem("authUser", false)
                //     navigate("/", { replace: true })
                // }
            })
    );
});
const NotificationSlice = createSlice({
    name: 'notification',
    initialState: {
        notificationData: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getNotification.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getNotification.fulfilled, (state, action) => {
            state.loading = false;
            state.registerData = action.payload;
        });
        builder.addCase(getNotification.rejected, (state, action) => {
            state.loading = true;
        })
    },
});
export default NotificationSlice.reducer;
