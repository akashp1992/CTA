import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import API from "../../../API/API";
import ApiClient from "../../../API/ApiClient";


export const getAllProjects = createAsyncThunk('projects/getAllProjects', async (request) => {
    return (
        API.get('project/list/createdby/user/id', request.data)
            // .then((response) => response.json())

            .then((result) => {
                request.onSuccess(result.data);
                console.log("projects", result.data);
                // console.log('LoginMsg', result.data.message);
                //  localStorage.setItem('Token', result.data.token);
                // console.log('resultt', result);
                return result.data
            })
            .catch((error) => {
                // console.log('error', error);
                request.onFail(error);
                console.log("proejct error", error.response.data);
                // if (error.response.status === 401) {
                //     localStorage.setItem("authUser", false)
                //     navigate("/", { replace: true })
                // }
                // console.log('LoginError', error.message);
                // alert(error.message);
            })
    );
});
const AllProjectSlice = createSlice({
    name: 'allproject',
    initialState: {
        projectData: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProjects.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getAllProjects.fulfilled, (state, action) => {
            state.loading = false;
            state.projectData.push(action.payload)
        });
        builder.addCase(getAllProjects.rejected, (state, action) => {
            state.loading = true;
        })
    },
});
export default AllProjectSlice.reducer;
