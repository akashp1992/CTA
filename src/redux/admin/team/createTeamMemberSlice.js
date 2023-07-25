import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiClient from "../../../API/ApiClient";



export const createTeamMember = createAsyncThunk('team/createTeamsMember', async (request) => {
    return (
        ApiClient.post('create/team/member', request.data)
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
const CreateTeamMemberSlice = createSlice({
    name: 'createTeamMember',
    initialState: {
        createTeamMemberData: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createTeamMember.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(createTeamMember.fulfilled, (state, action) => {
            state.loading = false;
            state.createTeamMemberData = action.payload;
        });
        builder.addCase(createTeamMember.rejected, (state, action) => {
            state.loading = true;
        })
    },
});
export default CreateTeamMemberSlice.reducer;
