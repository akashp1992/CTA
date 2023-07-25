import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiClient from "../../../API/ApiClient";


export const createProject = createAsyncThunk('project/createProject', async (request) => {
    return (
        ApiClient.post('project/create', request.data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
            // .then((response) => response.json())

            .then((result) => {
                request.onSuccess(result.data);
                console.log("createProject", result.data.data);
                // console.log('LoginMsg', result.data.message);
                //  localStorage.setItem('Token', result.data.token);
                // console.log('resultt', result);
            })
            .catch((error) => {
                // console.log('error', error);
                request.onFail(error);
                console.log("createProject", error.response.data);
                // console.log('LoginError', error.message);
                // alert(error.message);
                // if (error.response.status === 401) {
                //     localStorage.setItem("authUser", false)
                //      navigate("/", { replace: true })
                // }
            })
    );
});


const CreateProjectSlice = createSlice({
    name: 'project',
    initialState: {
        countData: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createProject.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(createProject.fulfilled, (state, action) => {
            state.loading = false;
            state.registerData = action.payload;
        });
        builder.addCase(createProject.rejected, (state, action) => {
            state.loading = true;
        });




    },
});
export default CreateProjectSlice.reducer;
