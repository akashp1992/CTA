import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ApiClient from "../../../API/ApiClient";


export const getAllProjectsWithStatus = createAsyncThunk('projects/getAllProjects', async (request) => {
    return (
        ApiClient.get('get/all/project', request.data)
            // .then((response) => response.json())

            .then((result) => {
                request.onSuccess(result.data);
                console.log("projectswithstatus", result.data.data);
                // console.log('LoginMsg', result.data.message);
                //  localStorage.setItem('Token', result.data.token);
                // console.log('resultt', result);
                return result.data
            })
            .catch((error) => {
                // console.log('error', error);
                request.onFail(error);
                console.log("projectswithstatus error", error.response.data);
                // if (error.response.status === 401) {
                //     localStorage.setItem("authUser", false)
                //     navigate("/", { replace: true })
                // }
                // console.log('LoginError', error.message);
                // alert(error.message);
            })
    );
});
const AllProjectWithStatusSlice = createSlice({
    name: 'allProjectWithStatus',
    initialState: {
        projectData: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProjectsWithStatus.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getAllProjectsWithStatus.fulfilled, (state, action) => {
            state.loading = false;
            state.projectData.push(action.payload)
        });
        builder.addCase(getAllProjectsWithStatus.rejected, (state, action) => {
            state.loading = true;
        })
    },
});
export default AllProjectWithStatusSlice.reducer;
