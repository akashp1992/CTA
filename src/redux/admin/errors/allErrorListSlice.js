import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiClient from "../../../API/ApiClient";



export const getErrorsList = createAsyncThunk('error/getErrors', async (request) => {
    return (
        ApiClient.get('error/list', request.data)
            // .then((response) => response.json())

            .then((result) => {
                request.onSuccess(result.data);
                console.log("error list", result.data.data);
                // console.log('LoginMsg', result.data.message);
                //  localStorage.setItem('Token', result.data.token);
                // console.log('resultt', result);
                return result.data
            })
            .catch((error) => {
                // console.log('error', error);
                request.onFail(error);
                console.log("error list err", error.response.data);
                // if (error.response.status === 401) {
                //     localStorage.setItem("authUser", false)
                //     navigate("/", { replace: true })
                // }
                // console.log('LoginError', error.message);
                // alert(error.message);
            })
    );
});
const AllErrorListSlice = createSlice({
    name: 'errorList',
    initialState: {
        errorListData: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getErrorsList.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getErrorsList.fulfilled, (state, action) => {
            state.loading = false;
            state.errorListData = action.payload;
        });
        builder.addCase(getErrorsList.rejected, (state, action) => {
            state.loading = true;
        })
    },
});
export default AllErrorListSlice.reducer;
