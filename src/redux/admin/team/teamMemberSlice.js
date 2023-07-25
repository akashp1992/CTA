import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiClient from "../../../API/ApiClient";



export const getTeamMemberList = createAsyncThunk('team/getTeamsMember', async (request) => {
    return (
        ApiClient.get('team/member/list', request.data)
            // .then((response) => response.json())

            .then((result) => {
                request.onSuccess(result.data);
                console.log("team member list", result.data.data);
                // console.log('LoginMsg', result.data.message);
                //  localStorage.setItem('Token', result.data.token);
                // console.log('resultt', result);
            })
            .catch((error) => {
                // console.log('error', error);
                request.onFail(error);
                console.log("team member list err", error.response.data);
                // if (error.response.status === 401) {
                //     localStorage.setItem("authUser", false)
                //     navigate("/", { replace: true })
                // }
                // console.log('LoginError', error.message);
                // alert(error.message);
            })
    );
});
const TeamMemberListSlice = createSlice({
    name: 'teamMemberList',
    initialState: {
        teamMemberData: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTeamMemberList.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getTeamMemberList.fulfilled, (state, action) => {
            state.loading = false;
            state.teamMemberData = action.payload;
        });
        builder.addCase(getTeamMemberList.rejected, (state, action) => {
            state.loading = true;
        })
    },
});
export default TeamMemberListSlice.reducer;
