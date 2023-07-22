import {configureStore} from "@reduxjs/toolkit";
import musicReducer from "./music";

export const store = configureStore({
    reducer: {
        music: musicReducer,
    },
});
