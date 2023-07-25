import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ApiClient from "../../API/ApiClient";


export const getGroupList = createAsyncThunk('grouplist/getGroupList', async (request) => {
    return (
        ApiClient.get('group_list', request.data)
            // .then((response) => response.json())

            .then((result) => {
                request.onSuccess(result.data);
                console.log("grouplist", result.data.data);
                // console.log('LoginMsg', result.data.message);
                //  localStorage.setItem('Token', result.data.token);
                // console.log('resultt', result);
            })
            .catch((error) => {
                // console.log('error', error);
                request.onFail(error);
                console.log("sliceerror", error.response.data);
                // if (error.response.status === 401) {
                //     localStorage.setItem("authUser", false)
                //     navigate("/", { replace: true })
                // }
                // console.log('LoginError', error.message);
                // alert(error.message);
            })
    );
});
const GetGroupSlice = createSlice({
    name: 'group',
    initialState: {
        groupData: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getGroupList.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getGroupList.fulfilled, (state, action) => {
            state.loading = false;
            state.groupData = action.payload;
        });
        builder.addCase(getGroupList.rejected, (state, action) => {
            state.loading = true;
        })
    },
});
export default GetGroupSlice.reducer;
