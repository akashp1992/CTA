import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiClient from "../../../API/ApiClient";

export const getProjectById = createAsyncThunk('project/getProject', async (request) => {
    return (
        ApiClient.get(`get/perticular/project?project_id=${request.data.id}`)
            .then((result) => {
                request.onSuccess(result.data);
                console.log("getProject", result.data.data);
            })
            .catch((error) => {
                request.onFail(error);
                //localStorage.setItem("authUser", false)
                console.log("getProject", error.response.data);
            })
    );
});

const GetProjectByIdSlice = createSlice({
    name: 'projectById',
    initialState: {
        projectData: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProjectById.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getProjectById.fulfilled, (state, action) => {
            state.loading = false;
            state.projectData.push(action.payload)
        });
        builder.addCase(getProjectById.rejected, (state, action) => {
            state.loading = true;
        })


    },
});

export default GetProjectByIdSlice.reducer;