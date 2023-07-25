import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sleep } from "radash";
import ApiClient from "../../../API/ApiClient";



export const getTeamList = createAsyncThunk('team/getTeams', async (request) => {
    return (
        ApiClient.get('team/list', request.data)
            // .then((response) => response.json())

            .then((result) => {
                 sleep(3000)
                request.onSuccess(result.data);
                console.log("team list", result.data.data);
                // console.log('LoginMsg', result.data.message);
                //  localStorage.setItem('Token', result.data.token);
                // console.log('resultt', result);
            })
            .catch((error) => {
                // console.log('error', error);
                request.onFail(error);
                console.log("team list err", error.response.data);
                // if (error.response.status === 401) {
                //     localStorage.setItem("authUser", false)
                //     navigate("/", { replace: true })
                // }
                // console.log('LoginError', error.message);
                // alert(error.message);
            })
    );
});
const AllTeamListSlice = createSlice({
    name: 'teamList',
    initialState: {
        teamListData: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTeamList.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getTeamList.fulfilled, (state, action) => {
            state.loading = false;
            state.teamListData = action.payload;
        });
        builder.addCase(getTeamList.rejected, (state, action) => {
            state.loading = true;
        })
    },
});
export default AllTeamListSlice.reducer;
