import { configureStore } from "@reduxjs/toolkit";
import musicReducer from "./music";
import personReducer from "./person";

export const store = configureStore({
    reducer: {
        music: musicReducer,
        person: personReducer,
    },
});
