import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiClient from "../../../API/ApiClient";



export const getTeamMemberByTeamId = createAsyncThunk('team/getTeamsById', async (request) => {
    return (
        ApiClient.get(`get/team/member/by/team?team_id=${request.data.team_id}`)
            // .then((response) => response.json())

            .then((result) => {
                request.onSuccess(result.data);
                console.log("team list", result.data.data);
                // console.log('LoginMsg', result.data.message);
                //  localStorage.setItem('Token', result.data.token);
                // console.log('resultt', result);
                return result.data
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
const TeamMemberByTeamIdSlice = createSlice({
    name: 'teamMemberByIdList',
    initialState: {
        teamMemberfromTeamId: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTeamMemberByTeamId.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getTeamMemberByTeamId.fulfilled, (state, action) => {
            state.loading = false;
            state.teamMemberfromTeamId = action.payload
        });
        builder.addCase(getTeamMemberByTeamId.rejected, (state, action) => {
            state.loading = true;
        })
    },
});
export default TeamMemberByTeamIdSlice.reducer;
