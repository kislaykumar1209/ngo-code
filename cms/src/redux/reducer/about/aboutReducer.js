import { createReducer } from '@reduxjs/toolkit';

export const AboutReducer = createReducer(
    {},
    {
        getOverviewPointRequest: state => {
            state.loading = true;
            state.error = null
        },
        getOverviewPointSuccess: (state, action) => {
            state.loading = false;
            state.overview = action.payload.data.result;
            state.sequence = action.payload.data.Sequence;

        },
        getOverviewPointFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        updateOverviewPointRequest: state => {
            state.loading = true;
            state.error = null
        },
        updateOverviewPointSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;

        },
        updateOverviewPointFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        createOverviewPointRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        createOverviewPointSuccess: (state, action) => {
            state.loading = false;
            state.overviewPoint = action.payload.data;
            state.message = action.payload.message;
        },
        createOverviewPointFail: (state, action) => {
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


        getTeamInfoRequest: state => {
            state.loading = true;
            state.error = null
        },
        getTeamInfoSuccess: (state, action) => {
            state.loading = false;
            state.team = action.payload.data;
        },
        getTeamInfoFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        createTeamInfoRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        createTeamInfoSuccess: (state, action) => {
            state.loading = false;
            state.member = action.payload.data;
            state.message = action.payload.message;
        },
        createTeamInfoFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        updateTeamInfoRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        updateTeamInfoSuccess: (state, action) => {
            state.loading = false;
            state.updatedInfo = action.payload;
            state.message = action.payload.message
        },
        updateTeamInfoFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        deleteTeamInfoRequest: state => {

            state.loading = true;
            state.error = null
            state.message = null
        },
        deleteTeamInfoSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        },
        deleteTeamInfoFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        getTestimonialRequest: state => {
            state.loading = true;
            state.error = null
        },
        getTestimonialSuccess: (state, action) => {
            state.loading = false;
            state.testimonial = action.payload.data;
        },
        getTestimonialFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        deleteTestimonialRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        deleteTestimonialSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        },
        deleteTestimonialFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        createTestimonialRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        createTestimonialSuccess: (state, action) => {
            state.loading = false;
            state.logoUpdated = action.payload.data;
            state.message = action.payload.message
        },
        createTestimonialFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        deleteTestimonialRequest: state => {

            state.loading = true;
            state.error = null
            state.message = null
        },
        deleteTestimonialSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        },
        deleteTestimonialFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        getMissonAndDreamRequest: state => {
            state.loading = true;
            state.error = null
        },
        getMissonAndDreamSuccess: (state, action) => {
            state.loading = false;
            state.mission = action.payload.data;
        },
        getMissonAndDreamFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        updateMissonAndDreamRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        updateMissonAndDreamSuccess: (state, action) => {
            state.loading = false;
            state.updatedMission = action.payload;
            state.message = action.payload.message
        },
        updateMissonAndDreamFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },





        getDreamsPointRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        getDreamsPointSuccess: (state, action) => {
            state.loading = false;
            state.dreamsPoint = action.payload.data.result;
            state.Sequence = action.payload.data.Sequence;
        },
        getDreamsPointFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        updateDreamsPointRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        updateDreamsPointSuccess: (state, action) => {
            state.loading = false;
            state.message = "updated";
        },
        updateDreamsPointFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        createDreamsPointRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        createDreamsPointSuccess: (state, action) => {
            state.loading = false;
            state.newdreamspoint = action.payload.data;
            state.message = action.payload.message
        },
        createDreamsPointFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        deleteDreamsPointRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        deleteDreamsPointSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        },
        deleteDreamsPointFail: (state, action) => {
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
