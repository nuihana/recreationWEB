import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const action = {
    getProverb: createAsyncThunk("POST/GET_PROVERB", async (request, { rejectWithValue }) => {
        return axios({
            method: "POST",
            url: 'http://192.168.0.200:8080/v1/proverb/get',
            data: {
                usedList: request.usedList,
            }
        }).then(response => response.data)
            .catch(error => rejectWithValue(error.response.data));
    })
}

const initialState = {
    proverb: {},
};

export const reducer = {
    getProverb: (state, action) => {
        state.proverb = action.payload;
    }
};

const proverbReducer = createReducer(initialState, builder => {
    builder
        .addCase(action.getProverb.fulfilled, reducer.getProverb)
});

export default proverbReducer;
