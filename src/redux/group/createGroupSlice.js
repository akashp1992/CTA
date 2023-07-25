import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import ApiClient from "../../API/ApiClient";
import ApiGroup from "../../API/ApiGroup";
import { toogleSnackbar } from "../client/common/snackbarSlice";



export const createGroup = createAsyncThunk('group/createGroup', async (request) => {
    return (
        ApiClient.post('group_create', request.data)
            .then((result) => {
                request.onSuccess(result.data);
                console.log("creategroup", result.data.data);
            })
            .catch((error) => {
                request.onFail(error.response.data);
                // dispatch(toogleSnackbar({ msg: error.response.data.message, type: 'error', open: true }))
                console.log("create group error", error.response);
            })
    );
});


const CreateGroupSlice = createSlice({
    name: 'createGroup',
    initialState: {
        groupData: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createGroup.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(createGroup.fulfilled, (state, action) => {
            state.loading = false;
            state.groupData = action.payload;
        });
        builder.addCase(createGroup.rejected, (state, action) => {
            state.loading = true;
        });




    },
});
export default CreateGroupSlice.reducer;
