import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiClient from "../../../API/ApiClient";



export const removeTeamMemberById = createAsyncThunk('team/removeTeamsMember', async (request) => {
    return (
        ApiClient.post('delete/team/member', request.data)
            // .then((response) => response.json())

            .then((result) => {
                request.onSuccess(result.data);
                console.log("team member list", result.data.data);
                // console.log('LoginMsg', result.data.message);
                //  localStorage.setItem('Token', result.data.token);
                // console.log('resultt', result);
                return result.data.data
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
const RemoveTeamMemberSlice = createSlice({
    name: 'removeTeamMember',
    initialState: {
        removeTeamMemberData: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(removeTeamMemberById.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(removeTeamMemberById.fulfilled, (state, action) => {
            state.loading = false;
            // state.removeTeamMemberData = action.payload;
            let index = state.removeTeamMemberData.findIndex(({ id }) => id === action.payload.id)
            state.removeTeamMemberData.splice(index, 1)
        });
        builder.addCase(removeTeamMemberById.rejected, (state, action) => {
            state.loading = true;
        })
    },
});
export default RemoveTeamMemberSlice.reducer;
