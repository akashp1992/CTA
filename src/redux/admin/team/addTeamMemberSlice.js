import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiClient from "../../../API/ApiClient";



export const addTeamMemberById = createAsyncThunk('team/addTeamsMember', async (request) => {
    return (
        ApiClient.post('create/perticular/team/member', request.data)
            // .then((response) => response.json())

            .then((result) => {
                request.onSuccess(result.data);
                console.log("added team member list", result.data.data);
                // console.log('LoginMsg', result.data.message);
                //  localStorage.setItem('Token', result.data.token);
                // console.log('resultt', result);
            })
            .catch((error) => {
                // console.log('error', error);
                request.onFail(error);
                console.log("added team member list err", error.response.data);
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
    name: 'addTeamMember',
    initialState: {
        addTeamMemberData: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addTeamMemberById.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(addTeamMemberById.fulfilled, (state, action) => {
            state.loading = false;
            state.removeTeamMemberData = action.payload;
        });
        builder.addCase(addTeamMemberById.rejected, (state, action) => {
            state.loading = true;
        })
    },
});
export default AddTeamMemberSlice.reducer;
