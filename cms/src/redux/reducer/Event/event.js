import { createReducer } from '@reduxjs/toolkit';

export const EventReducer = createReducer(
    {},
    {
        getUpcominEventsRequest: state => {
            state.loading = true;
            state.error = null
        },
        getUpcominEventsSuccess: (state, action) => {
            state.loading = false;
            state.Events = action.payload.data;
        },
        getUpcominEventsFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        createUpcominEventsRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        createUpcominEventsSuccess: (state, action) => {
            state.loading = false;
            state.newEvents = action.payload.data;
            state.message = action.payload.message;
        },
        createUpcominEventsFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        updateUpcominEventsRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        updateUpcominEventsSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        },
        updateUpcominEventsFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        deleteUpcomingRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        deleteUpcomingSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        },
        deleteUpcomingFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        getEventCategoryRequest: state => {
            state.loading = true;
            state.error = null
        },
        getEventCategorySuccess: (state, action) => {
            state.loading = false;
            state.EventCategory = action.payload.data.result;
            state.Sequence = action.payload.data.sequence;
        },
        getEventCategoryFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        updateEventCategoryRequest: state => {
            state.loading = true;
            state.error = null
        },
        updateEventCategorySuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        },
        updateEventCategoryFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        createEventCategoryRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        createEventCategorySuccess: (state, action) => {
            state.loading = false;
            state.newEventcategory = action.payload;
            state.message = action.payload.message
        },
        createEventCategoryFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        deleteEventCategoryRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        deleteEventCategorySuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        },
        deleteEventCategoryFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        getComeBeLionPointRequest: state => {
            state.loading = true;
            state.error = null
        },
        getComeBeLionPointSuccess: (state, action) => {
            state.loading = false;
            state.LionPoint = action.payload.data.result;
            state.Sequence = action.payload.data.sequence;
        },
        getComeBeLionPointFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        updateComeBeLionPointRequest: state => {
            state.loading = true;
            state.error = null
        },
        updateComeBeLionPointSuccess: (state, action) => {
            state.loading = false;
            state.message = "successfully updated";
        },
        updateComeBeLionPointFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        createComeBeLionPointRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        createComeBeLionPointSuccess: (state, action) => {
            state.loading = false;
            state.newLionPoint = action.payload;
            state.message = action.payload.message
        },
        createComeBeLionPointFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        deleteComeBeLionPointRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        deleteComeBeLionPointSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        },
        deleteComeBeLionPointFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        getAlbumRequest: state => {
            state.loading = true;
            state.error = null
        },
        getAlbumSuccess: (state, action) => {
            state.loading = false;
            state.album = action.payload.data.final;
            state.sequence = action.payload.data.Sequence;
        },
        getAlbumFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        updateAlbumRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        updateAlbumSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message
        },
        updateAlbumFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        createAlbumRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        createAlbumSuccess: (state, action) => {
            state.loading = false;
            state.newAlbum = action.payload;
            state.message = action.payload.message
        },
        createAlbumFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        deleteAlbumRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        deleteAlbumSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        },
        deleteAlbumFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        getAlbumImageRequest: state => {
            state.loading = true;
            state.error = null
        },
        getAlbumImageSuccess: (state, action) => {
            state.loading = false;
            state.Images = action.payload.data;
        },
        getAlbumImageFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        createAlbumImageRequest: (state) => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        createAlbumImageSuccess: (state, action) => {
            state.loading = false;
            state.newImage = action.payload;
            state.message = action.payload.message
        },
        createAlbumImageFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },



        deleteAlbumImageRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        deleteAlbumImageSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        },
        deleteAlbumImageFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },



        getEventsDescriptionRequest: state => {
            state.loading = true;
            state.error = null
        },
        getEventsDescriptionSuccess: (state, action) => {
            state.loading = false;
            state.eventDescription = action.payload.data;
        },
        getEventsDescriptionFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        updateEventsDescriptionRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
        },
        updateEventsDescriptionSuccess: (state, action) => {
            state.loading = false;
            state.newEventDescription = action.payload.data;
            state.message = action.payload.message;
        },
        updateEventsDescriptionFail: (state, action) => {
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
