import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {collection, getDocs} from "firebase/firestore";
import db from "../firestoreConnect/initFirebase";

export const fetchFlats = createAsyncThunk(
    'main/fetchFlats',
    async () => {
        console.log('Here!)')
        let res = []
        let loadedData = await getDocs(collection(db, "flats"))
        loadedData.forEach((currentElement) => {
            res.push({id: currentElement.id, ...currentElement.data()})
        })
        return res
    }
)

const initialState = {
    mapBounds: [],
    flats: [],
    center: {
        lat: 50.5,
        lng: 25,
    },
    isCenterSet: false,
    isLoaded: false
};

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setMapBounds: (state, action) => {
            state.mapBounds = action.payload.mapBounds
        },
        setNewCenter: (state, action) => {
            state.center = {
                lat: action.payload.lat,
                lng: action.payload.lng,
            }
            state.isCenterSet = true
        }
    },
    extraReducers: {
        [fetchFlats.fulfilled]: (state, action) => {
            state.flats = action.payload
            state.isLoaded = true
        },
    },
})

export const {setNewCenter, setMapBounds} = mainSlice.actions

export default mainSlice.reducer
