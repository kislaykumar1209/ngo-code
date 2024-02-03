import { createReducer } from '@reduxjs/toolkit';

export const SponserReducer = createReducer(
    {},
    {
        getGlobalSponserPointRequest: state => {
            state.loading = true;
            state.error = null
        },
        getGlobalSponserPointSuccess: (state, action) => {
            state.loading = false;
            state.sponser = action.payload.data.result;
            state.Sequence = action.payload.data.Sequence;
        },
        getGlobalSponserPointFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        updateGlobalSponserPointRequest: state => {
            state.loading = true;
            state.error = null
        },
        updateGlobalSponserPointSuccess: (state, action) => {
            state.loading = false;
            state.message = "successfully updated";
        },
        updateGlobalSponserPointFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        createGlobalSponserPointRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        createGlobalSponserPointSuccess: (state, action) => {
            state.loading = false;
            state.newSponser = action.payload;
            state.message = action.payload.message
        },
        createGlobalSponserPointFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        deleteGlobalSponserPointRequest: (state) => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        deleteGlobalSponserPointSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        },
        deleteGlobalSponserPointFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        getPartnerWithUsOppourtunityRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        getPartnerWithUsOppourtunitySuccess: (state, action) => {
            state.loading = false;
            state.Oppourtunity = action.payload.data.result;
            state.SequenceOppourtunity = action.payload.data.Sequence;
        },
        getPartnerWithUsOppourtunityFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        updatePartnerWithUsOppourtunityRequest: state => {
            state.loading = true;
            state.error = null
        },
        updatePartnerWithUsOppourtunitySuccess: (state, action) => {
            state.loading = false;
            state.message = "successfully updated";
        },
        updatePartnerWithUsOppourtunityFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        createPartnerWithUsOppourtunityRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        createPartnerWithUsOppourtunitySuccess: (state, action) => {
            state.loading = false;
            state.newOppourtunity = action.payload;
            state.message = action.payload.message
        },
        createPartnerWithUsOppourtunityFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        deletePartnerWithOppourtunityRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        deletePartnerWithOppourtunitySuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        },
        deletePartnerWithOppourtunityFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        getPartnerWithUsBenefitRequest: state => {
            state.loading = true;
            state.error = null
        },
        getPartnerWithUsBenefitSuccess: (state, action) => {
            state.loading = false;
            state.benefits = action.payload.data.result;
            state.SequenceBenefit = action.payload.data.Sequence;
        },
        getPartnerWithUsBenefitFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        updatePartnerWithUsBenefitRequest: state => {
            state.loading = true;
            state.error = null
        },
        updatePartnerWithUsBenefitSuccess: (state, action) => {
            state.loading = false;
            state.message = "successfully updated";
        },
        updatePartnerWithUsBenefitFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        createPartnerWithUsBenefitRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        createPartnerWithUsBenefitSuccess: (state, action) => {
            state.loading = false;
            state.newBenefits = action.payload;
            state.message = action.payload.message
        },
        createPartnerWithUsBenefitFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        deletePartnerWithBenefitRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        deletePartnerWithBenefitSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        },
        deletePartnerWithBenefitFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },



        getLocalSponserPointRequest: state => {
            state.loading = true;
            state.error = null
        },
        getLocalSponserPointSuccess: (state, action) => {
            state.loading = false;
            // state.localsponser = action.payload.data;
            state.localsponser = action.payload.data.result;
            state.SequenceSponser = action.payload.data.Sequence;
        },
        getLocalSponserPointFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        createLocalSponserPointRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        createLocalSponserPointSuccess: (state, action) => {
            state.loading = false;
            state.newSponser = action.payload;
            state.message = action.payload.message
        },
        createLocalSponserPointFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        updateLocalSponserPointRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        updateLocalSponserPointSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message
        },
        updateLocalSponserPointFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        deleteLocalSponserPointRequest: (state) => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        deleteLocalSponserPointSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        },
        deleteLocalSponserPointFail: (state, action) => {
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
