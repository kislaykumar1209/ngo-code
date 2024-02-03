import { createReducer } from '@reduxjs/toolkit';

export const ResourceReducer = createReducer(
    {},
    {
        getResourceRequest: state => {
            state.loading = true;
            state.error = null
        },
        getResourceSuccess: (state, action) => {
            state.loading = false;
            state.points = action.payload.data.result;
            state.Sequence = action.payload.data.sequence;

        },
        getResourceFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        createResourceRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        createResourceSuccess: (state, action) => {
            state.loading = false;
            state.newPoint = action.payload;
            state.message = action.payload.message
        },
        createResourceFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        updateResourceRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        updateResourceSuccess: (state, action) => {
            state.loading = false;
            state.message = "successfully updated"
        },
        updateResourceFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        deleteResourceRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        deleteResourceSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        },
        deleteResourceFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        getCollateralPDFRequest: state => {
            state.loading = true;
            state.error = null
        },
        getCollateralPDFSuccess: (state, action) => {
            state.loading = false;
            state.pdf = action.payload.data;
        },
        getCollateralPDFFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        createCollateralPDFRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        createCollateralPDFSuccess: (state, action) => {
            state.loading = false;
            state.newPDF = action.payload;
            state.message = action.payload.message
        },
        createCollateralPDFFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        deleteCollateralPDFRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        deleteCollateralPDFSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        },
        deleteCollateralPDFFail: (state, action) => {
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
