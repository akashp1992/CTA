import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiClient from "../../../API/ApiClient";


export const getAllProjectsAdmin = createAsyncThunk('projects/getAllProjects', async (request) => {
    return (
        ApiClient.get('admin/dashboard/recent/project', request.data)
            // .then((response) => response.json())

            .then((result) => {
                request.onSuccess(result.data);
                console.log("all projectsadmin", result.data.data);
                // console.log('LoginMsg', result.data.message);
                //  localStorage.setItem('Token', result.data.token);
                // console.log('resultt', result);
                return result.data.data
            })
            .catch((error) => {
                // console.log('error', error);
                request.onFail(error);
                console.log("all proejct admin error", error.response.data);
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
    name: 'allprojectAdmin',
    initialState: {
        projectData: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProjectsAdmin.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getAllProjectsAdmin.fulfilled, (state, action) => {
            state.loading = false;
            state.projectData.push(action.payload)
        });
        builder.addCase(getAllProjectsAdmin.rejected, (state, action) => {
            state.loading = true;
        })
    },
});
export default AllProjectSlice.reducer;
