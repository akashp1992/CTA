import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiClient from "../../../API/ApiClient";



export const doAssignProject = createAsyncThunk('project/assignProject', async (request) => {
    return (
        ApiClient.post('project/assign/member', request.data)
            // .then((response) => response.json())

            .then((result) => {
                request.onSuccess(result.data);
                console.log("assign project", result.data.data);
                return result.data;
            })
            .catch((error) => {
                request.onFail(error);
                console.log("assign project err", error.response.data);
            })
    );
});
const AssignProjectSlice = createSlice({
    name: 'assignProject',
    initialState: {
        updateProcessData: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(doAssignProject.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(doAssignProject.fulfilled, (state, action) => {
            state.loading = false;
            state.updateProcessData = action.payload;
        });
        builder.addCase(doAssignProject.rejected, (state, action) => {
            state.loading = true;
        })
    },
});
export default AssignProjectSlice.reducer;
