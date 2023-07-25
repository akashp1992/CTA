import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import ApiClient from "../../../API/ApiClient";
export const getFavouriteProject = createAsyncThunk('project/getFavouriteProject', async (request) => {
    return (
        ApiClient.get(`project/favourite/list`, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((result) => {
                request.onSuccess(result.data);
                console.log("getFavouriteProject", result.data.data);
                return result.data;
            })
            .catch((error) => {
                request.onFail(error);
                console.log("getFavouriteProject Error", error.response.data);
                // if (error.response.status === 401) {
                //     localStorage.setItem("authUser", false)
                //      navigate("/", { replace: true })
                //  }
                
            })
    );
});


export const AddFavouriteProject = createAsyncThunk('project/AddFavouriteProject', async (request) => {
    return (
        ApiClient.post(`project/add/remove/favourite`, request.data, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((result) => {
                request.onSuccess(result.data);
                console.log("add Or Remove FavouriteProject", result.data.data);
                return result.data.data;
            })
            .catch((error) => {
                request.onFail(error);
                console.log("add Or Remove FavouriteProject Error", error.response.data);
            })
    );
});

export const RemoveFavouriteProject = createAsyncThunk('project/RemoveFavouriteProject', async (request) => {
    return (
        ApiClient.post(`project/add/remove/favourite`, request.data, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((result) => {
                request.onSuccess(result.data);
                console.log("add Or Remove FavouriteProject", result.data.data);
                return result.data.data;
            })
            .catch((error) => {
                request.onFail(error);
                console.log("add Or Remove FavouriteProject Error", error.response.data);
            })
    );
});
const FavouriteProjectSlice = createSlice({
    name: 'favourite',
    initialState: {
        favouriteProjectData: [],
        count: 0,
        loading: false,
        url: "",
    },
    reducers: {},
    extraReducers: (builder) => {
        //Get Favourite Project List
        builder.addCase(getFavouriteProject.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getFavouriteProject.fulfilled, (state, action) => {
            state.loading = false;
            state.count = action.payload.data.length
            state.favouriteProjectData.push(action.payload.data)
        });
        builder.addCase(getFavouriteProject.rejected, (state, action) => {
            state.loading = true;
        })
        ///Add Project From Favourite
        builder.addCase(AddFavouriteProject.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(AddFavouriteProject.fulfilled, (state, action) => {
            state.loading = false;
            state.count = state.count + 1
            state.favouriteProjectData.push(action.payload)

        });
        builder.addCase(AddFavouriteProject.rejected, (state, action) => {
            state.loading = true;
        })

        ///Remove Project From Favourite
        builder.addCase(RemoveFavouriteProject.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(RemoveFavouriteProject.fulfilled, (state, action) => {
            const navigate = useNavigate()
            state.loading = false;
            state.count = state.count - 1
            state.count === 0 ? state.url = "/Project" : state.url = "/Favorite"
            state.favouriteProjectData.push(action.payload)

        });
        builder.addCase(RemoveFavouriteProject.rejected, (state, action) => {
            state.loading = true;
        })


    },
});

export default FavouriteProjectSlice.reducer;