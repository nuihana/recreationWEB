import { configureStore } from "@reduxjs/toolkit";
import musicReducer from "./music";
import personReducer from "./person";
import proverbReducer from "./proverb";

export const store = configureStore({
    reducer: {
        music: musicReducer,
        person: personReducer,
        proverb: proverbReducer,
    },
});
