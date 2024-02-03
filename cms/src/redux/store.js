import { configureStore } from '@reduxjs/toolkit';
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { AboutReducer } from './reducer/about/aboutReducer';
import { clubReducer } from './reducer/club/clubReducer';
import { DescriptionReducer } from './reducer/description/description';
import { EventReducer } from './reducer/Event/event';
import { HomeReducer } from './reducer/Home/home';
import { OtherReducer } from './reducer/others/others';
import { ResourceReducer } from './reducer/resources/resource';
import { SponserReducer } from './reducer/sponser/sponserReducer';
import { WhatWeDoReducer } from './reducer/whatwedo/whatwedo';
import { authReducer } from './reducer/auth/auth';
// const store = configureStore({
const reducer = combineReducers({
    club: clubReducer,
    auth: authReducer,
    about: AboutReducer,
    sponser: SponserReducer,
    resource: ResourceReducer,
    event: EventReducer,
    others: OtherReducer,
    whatwedo: WhatWeDoReducer,
    description: DescriptionReducer,
    home: HomeReducer

});


let initialState = {};

const middleWare = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)))


export default store;



