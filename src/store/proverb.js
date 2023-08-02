import {createAsyncThunk, createReducer, createSlice} from "@reduxjs/toolkit";
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
    }),
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

const proverbSlice = createSlice({
    name: "proverb",
    initialState: {
        type: '',
    },
    reducers: {
        setCondition: (state, action) => {
            state.type = action.payload
        },
    },
});

export const { setCondition } = proverbSlice.actions;

export {
    proverbReducer,
    proverbSlice,
};
