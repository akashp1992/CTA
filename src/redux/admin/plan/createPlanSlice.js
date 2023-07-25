import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiClient from "../../../API/ApiClient";



export const createPlan = createAsyncThunk('plan/createPlan', async (request) => {
    return (
        ApiClient.post('plan', request.data)
            // .then((response) => response.json())

            .then((result) => {
                request.onSuccess(result.data);
                console.log("create Plan", result.data.data);
                // console.log('LoginMsg', result.data.message);
                //  localStorage.setItem('Token', result.data.token);
                // console.log('resultt', result);
            })
            .catch((error) => {
                // console.log('error', error);
                request.onFail(error);
                console.log("create Plan err", error.response.data);
                // if (error.response.status === 401) {
                //     localStorage.setItem("authUser", false)
                //     navigate("/", { replace: true })
                // }
                // console.log('LoginError', error.message);
                // alert(error.message);
            })
    );
});
const CreatePlanSlice = createSlice({
    name: 'createPlan',
    initialState: {
        createPlanData: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createPlan.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(createPlan.fulfilled, (state, action) => {
            state.loading = false;
            state.createPlanData = action.payload;
        });
        builder.addCase(createPlan.rejected, (state, action) => {
            state.loading = true;
        })
    },
});
export default CreatePlanSlice.reducer;
