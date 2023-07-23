import {createAsyncThunk, createReducer} from "@reduxjs/toolkit";
import axios from "axios";

export const action = {
    getMusic: createAsyncThunk("POST/GET_MUSIC", async (request, { rejectWithValue }) => {
        return axios({
            method: "POST",
            url: 'http://192.168.0.200:8080/v1/music/get',
            data: {
                release_year: '',
                genre_code: '',
                usedList: request.usedList,
            }
        }).then(response => response.data)
          .catch(error => rejectWithValue(error.response.data));
    })
}

const initialState = {
    music: {},
};

export const reducer = {
    getMusic: (state, action) => {
        state.music = action.payload;
    }
};

const musicReducer = createReducer(initialState, builder => {
    builder
        .addCase(action.getMusic.fulfilled, reducer.getMusic)
});

export default musicReducer;
