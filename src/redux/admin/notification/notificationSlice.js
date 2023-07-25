import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ApiClient from "../../../API/ApiClient";


export const setTypeNotification = createAsyncThunk('notification/setNotification', async (request) => {
    return (
        ApiClient.get(`notification/list/auth?type=${request.data.type}`)
            // .then((response) => response.json())
            .then((result) => {
                request.onSuccess(result.data);
                console.log("notification", result.data.data);
             
                // console.log('LoginMsg', result.data.message);
                //  localStorage.setItem('Token', result.data.token);
                // console.log('resultt', result);
                return result.data.data
            })
            .catch((error) => {
                // console.log('error', error);
                request.onFail(error);
                console.log("notification error", error.response.data);
                // if (error.response.status === 401) {
                //     localStorage.setItem("authUser", false)
                //     navigate("/", { replace: true })
                // }
                // console.log('LoginError', error.message);
                // alert(error.message);
            })
    );
});
const NotificationSlice = createSlice({
    name: 'notification',
    initialState: {
        notificationList: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(setTypeNotification.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(setTypeNotification.fulfilled, (state, action) => {
            state.loading = false;
            state.notificationList.push(action.payload)
        });
        builder.addCase(setTypeNotification.rejected, (state, action) => {
            state.loading = true;
        })
    },
});
export default NotificationSlice.reducer;
