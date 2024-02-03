import { createReducer } from '@reduxjs/toolkit';

export const HomeReducer = createReducer(
    {},
    {
        getHomeAboutInfoRequest: state => {
            state.loading = true;
            state.error = null
        },
        getHomeAboutInfoSuccess: (state, action) => {
            state.loading = false;
            state.about = action.payload.data;
        },
        getHomeAboutInfoFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        updateHomeAboutInfoRequest: state => {
            state.loading = true;
            state.message = null
            state.error = null

        },
        updateHomeAboutInfoSuccess: (state, action) => {
            state.loading = false;
            state.newHomeAboutInfo = action.payload;
            state.message = action.payload.message
        },
        updateHomeAboutInfoFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },




        getHomeWhatWeDoRequest: state => {
            state.loading = true;
            state.error = null
        },
        getHomeWhatWeDoSuccess: (state, action) => {
            state.loading = false;
            state.whatwedo = action.payload.data;
        },
        getHomeWhatWeDoFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        updateHomeWhatWeDoRequest: state => {
            state.loading = true;
            state.message = null
            state.error = null

        },
        updateHomeWhatWeDoSuccess: (state, action) => {
            state.loading = false;
            state.newHomeWhatWeDo = action.payload;
            state.message = action.payload.message
        },
        updateHomeWhatWeDoFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        deleteExtraInfoRequest: state => {
            state.loading = true;
            state.message = null
            state.error = null

        },
        deleteExtraInfoSuccess: (state, action) => {
            state.loading = false;
            // state.new = action.payload;
            state.message = action.payload.message
        },
        deleteExtraInfoFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        getHomeOtherInfoRequest: state => {
            state.loading = true;
            state.error = null
        },
        getHomeOtherInfoSuccess: (state, action) => {
            state.loading = false;
            state.others = action.payload.data;
        },
        getHomeOtherInfoFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },



        updateOtherInfoRequest: state => {
            state.loading = true;
            state.message = null
            state.error = null

        },
        updateOtherInfoSuccess: (state, action) => {
            state.loading = false;
            state.newOtherInfo = action.payload;
            state.message = action.payload.message
        },
        updateOtherInfoFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        getFooterInfoRequest: state => {
            state.loading = true;
            state.error = null
        },
        getFooterInfoSuccess: (state, action) => {
            state.loading = false;
            state.footer = action.payload.data;
        },
        getFooterInfoFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },



        updateFooterRequest: state => {
            state.loading = true;
            state.message = null
            state.error = null

        },
        updateFooterSuccess: (state, action) => {
            state.loading = false;
            state.footer = action.payload;
            state.message = action.payload.message
        },
        updateFooterFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        getHomeExtraInfoRequest: state => {
            state.loading = true;
            state.error = null
        },
        getHomeExtraInfoSuccess: (state, action) => {
            state.loading = false;
            state.extra = action.payload.data;
        },
        getHomeExtraInfoFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },



        updateExtraInfoRequest: state => {
            state.loading = true;
            state.message = null
            state.error = null

        },
        updateExtraInfoSuccess: (state, action) => {
            state.loading = false;
            // state.new = action.payload;
            state.message = action.payload.message
        },
        updateExtraInfoFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        registerExtraInfoRequest: state => {
            state.loading = true;
            state.message = null
            state.error = null

        },
        registerExtraInfoSuccess: (state, action) => {
            state.loading = false;
            state.new = action.payload;
            state.message = action.payload.message
        },
        registerExtraInfoFail: (state, action) => {
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
