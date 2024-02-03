import { createReducer } from '@reduxjs/toolkit';

export const WhatWeDoReducer = createReducer(
    {},
    {
        getOverviewRequest: state => {
            state.loading = true;
            state.error = null
        },
        getOverviewSuccess: (state, action) => {
            state.loading = false;
            state.overview = action.payload.data.result;
            state.sequence = action.payload.data.Sequence;
        },
        getOverviewFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        createOverviewRequest: state => {
            state.loading = true;
            state.error = null
        },
        createOverviewSuccess: (state, action) => {
            state.loading = false;
            state.newOverview = action.payload;
            state.message = action.payload.message
        },
        createOverviewFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        updateOverviewRequest: state => {
            state.loading = true;
            state.error = null
        },
        updateOverviewSuccess: (state, action) => {
            state.loading = false;
            state.updatedOverview = action.payload;
            state.message = action.payload.message
        },
        updateOverviewFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        updateCauseRequest: state => {
            state.loading = true;
            state.error = null
        },
        updateCauseSuccess: (state, action) => {
            state.loading = false;
            // state.updatedOvervie = action.payload;
            state.message = action.payload.message
        },
        updateCauseFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        deleteOverviewRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        deleteOverviewSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        },
        deleteOverviewFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        getCauseExplainRequest: state => {
            state.loading = true;
            state.error = null
        },
        getCauseExplainSuccess: (state, action) => {

            state.loading = false;
            state.explain = action.payload.data.result;
            state.Sequence = action.payload.data.Sequence;

        },
        getCauseExplainFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },




        createCauseExplainRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        createCauseExplainSuccess: (state, action) => {
            state.loading = false;
            state.newExplain = action.payload;
            state.message = action.payload.message
        },
        createCauseExplainFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        deleteCauseExplainRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        deleteCauseExplainSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        },
        deleteCauseExplainFail: (state, action) => {
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
