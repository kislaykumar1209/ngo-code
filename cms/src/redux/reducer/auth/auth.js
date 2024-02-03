import { createReducer } from '@reduxjs/toolkit';

export const authReducer = createReducer(
    {},
    {
        registerRequest: state => {
            state.loading = true;
            state.error = null
            state.message = null
            state.isAuthenticated = false
        },
        registerSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.message = action.payload.message
            state.isAuthenticated = true
        },
        registerFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.isAuthenticated = false
        },

        loginRequest: state => {
            state.loading = true;
            state.error = null
            state.isAuthenticated = false
            state.message = null
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.message = action.payload.message
            state.isAuthenticated = true
        },
        loginFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.user = null
            state.isAuthenticated = false
        },

        LoadUserRequest: state => {
            state.loading = true;
            // state.error = null
            state.isAuthenticated = false
            state.message = null
        },
        LoadUserSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload.data;
            state.isAuthenticated = true

        },
        LoadUserFail: (state, action) => {
            state.loading = false;
            state.user = null;
            state.isAuthenticated = false
        },
        LogoutRequest: state => {
            state.loading = true;
            // state.error = null
            state.isAuthenticated = true
            state.message = null
        },
        LogoutSuccess: (state, action) => {
            state.loading = false;
            state.user = null;
            state.isAuthenticated = false
            state.message = "logged out"
        },
        LogoutFail: (state, action) => {
            state.loading = false;
            // state.error = action.payload;
            state.message = null
        },



        clearError: state => {
            state.error = null;
        },
        clearMessage: state => {
            state.message = null;
        },
    }
);
