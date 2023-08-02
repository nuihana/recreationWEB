import { configureStore } from "@reduxjs/toolkit";
import musicReducer from "./music";
import personReducer from "./person";
import {
    proverbReducer,
    proverbSlice,
} from "./proverb";

export const store = configureStore({
    reducer: {
        music: musicReducer,
        person: personReducer,
        proverb: proverbReducer,
        proverbCondition: proverbSlice.reducer,
    },
});
