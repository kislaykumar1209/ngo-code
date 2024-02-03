import { createReducer } from '@reduxjs/toolkit';

export const DescriptionReducer = createReducer(
    {},
    {
        getDescriptionRequest: state => {
            state.loading = true;
            state.error = null
        },
        getDescriptionSuccess: (state, action) => {


            state.description = action.payload.data;
            state.loading = false;
        },
        getDescriptionFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        updateDescriptionRequest: state => {
            state.loading = true;
            state.message = null
            state.error = null

        },
        updateDescriptionSuccess: (state, action) => {
            state.loading = false;
            state.newDescription = action.payload.data;
            state.message = action.payload.message
        },
        updateDescriptionFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        clearError: state => {
            state.error = null;
        },
        clearMessage: state => {
            state.message = null;
        },
    }
);
