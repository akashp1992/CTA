import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ApiClient from "../../../API/ApiClient";
import inMemoryJwtService from "../../../services/inMemoryJwtService";


export const getCount = createAsyncThunk('count/getCount', async (request) => {
    return (
        ApiClient.get('user/dashboard/project/process/count', request.data)
            // .then((response) => response.json())

            .then((result) => {
                request.onSuccess(result.data);
                console.log("count", result.data.data);
                // console.log('LoginMsg', result.data.message);
                //  localStorage.setItem('Token', result.data.token);
                // console.log('resultt', result);
            })
            .catch((error) => {
                // console.log('error', error);
                request.onFail(error);
                console.log("sliceerror", error.response.data);
                // if (error.response.status === 401) {
                //     localStorage.setItem("authUser", false)
                //     navigate("/", { replace: true })
                // }
                // console.log('LoginError', error.message);
                // alert(error.message);
            })
    );
});
const CountSlice = createSlice({
    name: 'count',
    initialState: {
        countData: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCount.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getCount.fulfilled, (state, action) => {
            state.loading = false;
            state.registerData = action.payload;
        });
        builder.addCase(getCount.rejected, (state, action) => {
            state.loading = true;
        })
    },
});
export default CountSlice.reducer;
