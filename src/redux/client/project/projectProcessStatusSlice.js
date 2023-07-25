import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiClient from "../../../API/ApiClient";

export const getProjectStatus = createAsyncThunk('project/getProjectStatus', async (request) => {
    return (
        ApiClient.get(`user/project/updated/process/list`, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((result) => {
                request.onSuccess(result.data);
                console.log("getProjectStatus", result.data.data["Review By CTA"]                );
            })
            .catch((error) => {
                request.onFail(error);
                console.log("getProjectStatus Error", error.response.data);
            })
    );
});

const ProjectProcessStatusSlice = createSlice({
    name: 'projectStatus',
    initialState: {
        projectStatusData: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProjectStatus.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getProjectStatus.fulfilled, (state, action) => {
            state.loading = false;
            state.projectStatusData.push(action.payload)
        });
        builder.addCase(getProjectStatus.rejected, (state, action) => {
            state.loading = true;
        })


    },
});

export default ProjectProcessStatusSlice.reducer;