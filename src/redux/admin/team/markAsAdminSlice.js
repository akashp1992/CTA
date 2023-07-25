import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiClient from "../../../API/ApiClient";



export const doAdminTeamMember = createAsyncThunk('team/doAdminTeamMember', async (request) => {
    return (
        ApiClient.post('add/remove/admin/team/member', request.data)
            // .then((response) => response.json())

            .then((result) => {
                request.onSuccess(result.data);
                console.log("admin as team member list", result.data.data);
                // console.log('LoginMsg', result.data.message);
                //  localStorage.setItem('Token', result.data.token);
                // console.log('resultt', result);
                return result.data
            })
            .catch((error) => {
                // console.log('error', error);
                request.onFail(error);
                console.log("admin as team member list err", error.response.data);
                // if (error.response.status === 401) {
                //     localStorage.setItem("authUser", false)
                //     navigate("/", { replace: true })
                // }
                // console.log('LoginError', error.message);
                // alert(error.message);
            })
    );
});
const AddTeamMemberSlice = createSlice({
    name: 'markToAdmin',
    initialState: {
        addRemoveAdmin: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(doAdminTeamMember.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(doAdminTeamMember.fulfilled, (state, action) => {
            state.loading = false;
            state.addRemoveAdmin = action.payload;
        });
        builder.addCase(doAdminTeamMember.rejected, (state, action) => {
            state.loading = true;
        })
    },
});
export default AddTeamMemberSlice.reducer;
