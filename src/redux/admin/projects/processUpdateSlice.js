import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiClient from "../../../API/ApiClient";



export const doUpdateProcessStatus = createAsyncThunk('project/processUpdate', async (request) => {
    return (
        ApiClient.post('project/process/edit', request.data)
            // .then((response) => response.json())

            .then((result) => {
                request.onSuccess(result.data);
                console.log("update process", result.data.data);
                return result.data;
            })
            .catch((error) => {
                request.onFail(error);
                console.log("update process err", error.response.data);
            })
    );
});
const ProcessUpdateSlice = createSlice({
    name: 'createPlan',
    initialState: {
        updateProcessData: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(doUpdateProcessStatus.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(doUpdateProcessStatus.fulfilled, (state, action) => {
            state.loading = false;
            state.updateProcessData = action.payload;
        });
        builder.addCase(doUpdateProcessStatus.rejected, (state, action) => {
            state.loading = true;
        })
    },
});
export default ProcessUpdateSlice.reducer;
