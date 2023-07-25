import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const action = {
    getPerson: createAsyncThunk("POST/GET_PERSON", async (request, { rejectWithValue }) => {
        return axios({
            method: "POST",
            url: 'http://192.168.0.200:8080/v1/person/get',
            data: {
                usedList: request.usedList,
            }
        }).then(response => response.data)
          .catch(error => rejectWithValue(error.response.data));
    })
}

const initialState = {
    person: {},
};

export const reducer = {
    getPerson: (state, action) => {
        state.person = action.payload;
    }
};

const personReducer = createReducer(initialState, builder => {
    builder
        .addCase(action.getPerson.fulfilled, reducer.getPerson)
});

export default personReducer;
