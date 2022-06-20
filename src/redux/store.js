import {configureStore} from "@reduxjs/toolkit";
import headerReducer from "./headerSlice";
import mainReducer from "./mainSlice";

let store = configureStore({
    reducer: {
        header: headerReducer,
        main: mainReducer,
    },
});

export default store