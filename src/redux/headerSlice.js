import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    language: {
        value: 'UA',
        isOpen: false,
        allValues: ['UA', 'EN', 'PL'],
    },
    currency: {
        value: 'ГРН',
        isOpen: false,
        allValues: ['ГРН', 'USD', 'PLN'],
    },
};

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        changeIsLanguageOpen: (state) => {
            state.language.isOpen = !state.language.isOpen
        },
        changeIsCurrencyOpen: (state) => {
            state.currency.isOpen = !state.currency.isOpen
        },
        setNewValue: (state, action) => {
            state[action.payload.type].isOpen = false
            state[action.payload.type].value = action.payload.value
        },
    },
})
export const {changeIsLanguageOpen, changeIsCurrencyOpen, setNewValue} = headerSlice.actions

export default headerSlice.reducer
