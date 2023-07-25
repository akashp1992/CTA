import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../API/API";
import ApiClient from "../../API/ApiClient";

export const doEligibility = createAsyncThunk('eligibility/doEligibility', async (request) => {
    return (
        ApiClient.post('create/cta/eligibility', request.data)
            // .then((response) => response.json())

            .then((result) => {
                request.onSuccess(result.data);
                console.log("slice", result.data.data);
                // console.log('LoginMsg', result.data.message);
                localStorage.setItem('Token', result.data.token);
                // console.log('resultt', result);
            })
            .catch((error) => {
                // console.log('error', error);
                request.onFail(error);
                console.log("sliceerror", error.response.data);
                // console.log('LoginError', error.message);
                // alert(error.message);
            })
    );
});
const EligibilitySlice = createSlice({
    name: 'eligibility',
    initialState: {
        eligibiltyData: [],
        loading: false,
    },
    extraReducers: {
        [doEligibility.pending]: (state, action) => {
            state.loading = true;
        },
        [doEligibility.fulfilled]: (state, action) => {
            state.loading = false;
            state.registerData = action.payload;
        },
        [doEligibility.rejected]: (state, action) => {
            state.loading = true;
        },
    },
});
export default EligibilitySlice.reducer;