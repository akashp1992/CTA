import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import ApiClient from "../../API/ApiClient";
import { toogleSnackbar } from "../client/common/snackbarSlice";



export const createSupport = createAsyncThunk('support/createSupport', async (request) => {
    return (
        ApiClient.post('support/create', request.data)
            .then((result) => {
                request.onSuccess(result.data);
                console.log("support", result.data.data);
            })
            .catch((error) => {
                request.onFail(error.response.data);
                // dispatch(toogleSnackbar({ msg: error.response.data.message, type: 'error', open: true }))
                console.log("support error", error.response);
            })
    );
});


const CreateSupportSlice = createSlice({
    name: 'support',
    initialState: {
        supportData: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createSupport.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(createSupport.fulfilled, (state, action) => {
            state.loading = false;
            state.supportData = action.payload;
        });
        builder.addCase(createSupport.rejected, (state, action) => {
            state.loading = true;
        });




    },
});
export default CreateSupportSlice.reducer;
