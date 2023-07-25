import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiClient from "../../../API/ApiClient";



export const getUsersPlanList = createAsyncThunk('users/getUsersPlan', async (request) => {
    return (
        ApiClient.get('all/plan/list', request.data)
            // .then((response) => response.json())

            .then((result) => {
                request.onSuccess(result.data);
                console.log("plan list", result.data.data);
                // console.log('LoginMsg', result.data.message);
                //  localStorage.setItem('Token', result.data.token);
                // console.log('resultt', result);
            })
            .catch((error) => {
                // console.log('error', error);
                request.onFail(error);
                console.log("plan list err", error.response.data);
                // if (error.responplanse.status === 401) {
                //     localStorage.setItem("authUser", false)
                //     navigate("/", { replace: true })
                // }
                // console.log('LoginError', error.message);
                // alert(error.message);
            })
    );
});
const AllUsersPlanListSlice = createSlice({
    name: 'userPlanList',
    initialState: {
        userPlanListData: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUsersPlanList.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getUsersPlanList.fulfilled, (state, action) => {
            state.loading = false;
            state.userPlanListData = action.payload;
        });
        builder.addCase(getUsersPlanList.rejected, (state, action) => {
            state.loading = true;
        })
    },
});
export default AllUsersPlanListSlice.reducer;
