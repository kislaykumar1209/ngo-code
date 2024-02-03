import { createReducer } from '@reduxjs/toolkit';

export const OtherReducer = createReducer(
    {},
    {
        getAllBannerRequest: state => {
            state.loading = true;
            state.error = null
        },
        getAllBannerSuccess: (state, action) => {
            state.loading = false;
            state.Allbanner = action.payload.data;
        },
        getAllBannerFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        getBannerRequest: state => {
            state.loading = true;
            state.error = null
        },
        getBannerSuccess: (state, action) => {
            state.loading = false;
            state.banner = action.payload.data;
        },
        getBannerFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        getSectionBannerRequest: state => {
            state.loading = true;
            state.error = null
        },
        getSectionBannerSuccess: (state, action) => {
            state.loading = false;
            state.sectionBanner = action.payload.data.result;
            state.sequence = action.payload.data.Sequence;
        },
        getSectionBannerFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        deleteBannerRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        deleteBannerSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        },
        deleteBannerFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        createBannerRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        createBannerSuccess: (state, action) => {
            state.loading = false;
            state.newBanner = action.payload;
            state.message = action.payload.message
        },
        createBannerFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        updateBannerRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        updateBannerSuccess: (state, action) => {
            state.loading = false;
            state.updatedBanner = action.payload;
            state.message = action.payload.message
        },
        updateBannerFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        createMemberFormRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        createMemberFormSuccess: (state, action) => {
            state.loading = false;
            state.newMemberForm = action.payload.data;
            state.message = action.payload.message
        },
        createMemberFormFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        getMemberFormRequest: state => {
            state.loading = true;
            state.error = null
        },
        getMemberFormSuccess: (state, action) => {
            state.loading = false;
            state.memberForm = action.payload.data;
        },
        getMemberFormFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },




        getLionBannerRequest: state => {
            state.loading = true;
            state.error = null
        },
        getLionBannerSuccess: (state, action) => {
            state.loading = false;
            state.lionbanner = action.payload.data;
        },
        getLionBannerFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        deletedLionBannerRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        deletedLionBannerSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        },
        deleteLionBannerFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        createLionBannerRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        createLionBannerSuccess: (state, action) => {
            state.loading = false;
            state.newBanner = action.payload;
            state.message = action.payload.message
        },
        createLionBannerFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },




        getWhatweDOCategoryRequest: state => {
            state.loading = true;
            state.error = null
        },
        getWhatweDOCategorySuccess: (state, action) => {
            state.loading = false;
            state.whatweDoCategory = action.payload.data;
        },
        getWhatweDOCategoryFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        getTitleRequest: state => {
            state.loading = true;
            state.error = null
        },
        getTitleSuccess: (state, action) => {
            state.loading = false;
            state.title = action.payload.data;
        },
        getTitleFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        updateTitleRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        updateTitleSuccess: (state, action) => {
            state.loading = false;
            state.updatedTitle = action.payload;
            state.message = action.payload.message
        },
        updateTitleFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        getActivePageRequest: state => {
            state.loading = true;
            state.error = null
        },
        getActivePageSuccess: (state, action) => {
            state.loading = false;
            state.activePage = action.payload.data;
        },
        getActivePageFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        updateActivePageRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        updateActivePageSuccess: (state, action) => {
            state.loading = false;
            state.updatedPageStatus = action.payload;
            state.message = action.payload.message
        },
        updateActivePageFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        updateOthersRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        updateOthersSuccess: (state, action) => {
            state.loading = false;
            state.other = action.payload;
            state.message = action.payload.message
        },
        updateOthersFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        getOtherInfoRequest: state => {
            state.loading = true;
            state.error = null
        },
        getOtherInfoSuccess: (state, action) => {
            state.loading = false;
            state.detail = action.payload.data;
        },
        getOtherInfoFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        updateDonateRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        updateDonateSuccess: (state, action) => {
            state.loading = false;
            // state.other = action.payload;
            state.message = action.payload.message
        },
        updateDonateFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        getDonateInfoRequest: state => {
            state.loading = true;
            state.error = null
        },
        getDonateInfoSuccess: (state, action) => {
            state.loading = false;
            state.donate = action.payload.data;
        },
        getDonateInfoFail: (state, action) => {
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
