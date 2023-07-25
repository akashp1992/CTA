import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    snackbar: {
        open: false,
        type: "",
        msg: ""
    }
}

const SnackbarSlice = createSlice({
    name: 'snackbar',
    initialState: initialState,
    reducers: {
        toogleSnackbar: (state, action) => ({
            ...state.snackbar,
            ...action.payload
        })
    }
});

export const { toogleSnackbar } = SnackbarSlice.actions
export default SnackbarSlice.reducer;
