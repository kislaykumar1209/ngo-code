import { createReducer } from '@reduxjs/toolkit';

export const clubReducer = createReducer(
    {},
    {
        getClubInfoRequest: state => {
            state.loading = true;
            state.error = null
        },
        getClubInfoSuccess: (state, action) => {
            state.loading = false;
            state.info = action.payload;
        },
        getClubInfoFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        updateClubInfoRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        updateClubInfoSuccess: (state, action) => {
            state.loading = false;
            state.updatedInfo = action.payload;
            state.message = action.payload.message
        },
        updateClubInfoFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        getLogoInfoRequest: state => {
            state.loading = true;
            state.error = null
        },
        getLogoInfoSuccess: (state, action) => {
            state.loading = false;
            state.logo = action.payload.data;

        },
        getLogoInfoFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        updateLogoInfoRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        updateLogoInfoSuccess: (state, action) => {
            state.loading = false;
            state.logoUpdated = action.payload.data;
            state.message = action.payload.message
        },
        updateLogoInfoFail: (state, action) => {
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
