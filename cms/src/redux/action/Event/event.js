import axios from 'axios';

export const getUpcomingEvent = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getUpcominEventsRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/event/event/upcoming`, config);

        dispatch({ type: 'getUpcominEventsSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getUpcominEventsFail',
            payload: error.response.data.message,
        });
    }
};


export const createEvent = (clubData) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'multipart/form-data',
                "Allow-Control-Allow-Origin": "*"

            },
            // withCredentials: true,
        };
        dispatch({ type: 'createUpcominEventsRequest' });

        const { data } = await axios.post(`${process.env.REACT_APP_SERVER}/v1/event/event/create`, clubData, config);

        dispatch({ type: 'createUpcominEventsSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'createUpcominEventsFail',
            payload: error.response.data.message,
        });
    }
};
export const updateEvent = (clubData, id) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'multipart/form-data',
                "Allow-Control-Allow-Origin": "*"

            },
            // withCredentials: true,
        };
        dispatch({ type: 'updateUpcominEventsRequest' });

        const { data } = await axios.put(`${process.env.REACT_APP_SERVER}/v1/event/event/update/${id}`, clubData, config);

        dispatch({ type: 'updateUpcominEventsSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'updateUpcominEventsFail',
            payload: error.response.data.message,
        });
    }
};
export const deleteEvent = (id) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'application/json',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };
        dispatch({ type: 'deleteUpcomingEventsRequest' });

        const { data } = await axios.delete(`${process.env.REACT_APP_SERVER}/v1/event/event/${id}/delete`, config);

        dispatch({ type: 'deleteUpcomingEventsSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'deleteUpcomingEventsFail',
            payload: error.response.data.message,
        });
    }
};

export const getEventCategory = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getEventCategoryRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/event/eventcategory/all`, config);

        dispatch({ type: 'getEventCategorySuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getEventCategoryFail',
            payload: error.response.data.message,
        });
    }
};
export const updateEventCategory = (overviewData, id) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'updateEventCategoryRequest' });

        const { data } = await axios.put(`${process.env.REACT_APP_SERVER}/v1/event/eventcategory/${id}/update`, overviewData, config);

        dispatch({ type: 'updateEventCategorySuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'updateEventCategoryFail',
            payload: error.response.data.message,
        });
    }
};


export const createEventCategory = (eventData) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'multipart/form-data',
            },
            // withCredentials: true,
        };
        dispatch({ type: 'createEventCategoryRequest' });

        const { data } = await axios.post(`${process.env.REACT_APP_SERVER}/v1/event/eventcategory/create`, eventData, config);

        dispatch({ type: 'createEventCategorySuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'createEventCategoryFail',
            payload: error.response.data.message,
        });
    }
};
export const deleteEventCategory = (id) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'application/json',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };
        dispatch({ type: 'deleteEventCategoryRequest' });

        const { data } = await axios.delete(`${process.env.REACT_APP_SERVER}/v1/event/eventcategory/${id}/delete`, config);

        dispatch({ type: 'deleteEventCategorySuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'deleteEventCategoryFail',
            payload: error.response.data.message,
        });
    }
};



export const getComeBeLionPoint = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getComeBeLionPointRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/event/content/all`, config);

        dispatch({ type: 'getComeBeLionPointSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getComeBeLionPointFail',
            payload: error.response.data.message,
        });
    }
};

export const updateComeBeLionPoint = (value, id) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'updateComeBeLionPointRequest' });

        const { data } = await axios.put(`${process.env.REACT_APP_SERVER}/v1/event/content/${id}/update`, value, config);

        dispatch({ type: 'updateComeBeLionPointSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'updateComeBeLionPointFail',
            payload: error.response.data.message,
        });
    }
};


export const createComeBeLionPoint = (point) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'application/json',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };
        dispatch({ type: 'createComeBeLionPointRequest' });

        const { data } = await axios.post(`${process.env.REACT_APP_SERVER}/v1/event/content/create`, point, config);

        dispatch({ type: 'createComeBeLionPointSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'createComeBeLionPointFail',
            payload: error.response.data.message,
        });
    }
};

export const deleteComeBeLionPoint = (id) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'application/json',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };
        dispatch({ type: 'deleteComeBeLionPointRequest' });

        const { data } = await axios.delete(`${process.env.REACT_APP_SERVER}/v1/event/content/${id}/delete`, config);

        dispatch({ type: 'deleteComeBeLionPointSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'deleteComeBeLionPointFail',
            payload: error.response.data.message,
        });
    }
};



export const getAlbum = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getAlbumRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/event/gallery/all`, config);

        dispatch({ type: 'getAlbumSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getAlbumFail',
            payload: error.response.data.message,
        });
    }
};
export const updateAlbum = (body, id) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'updatAlbumRequest' });

        const { data } = await axios.put(`${process.env.REACT_APP_SERVER}/v1/event/gallery/${id}/update`, body, config);

        dispatch({ type: 'updatAlbumSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'updatAlbumFail',
            payload: error.response.data.message,
        });
    }
};


export const createAlbum = (albumData) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'multipart/form-data',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };
        dispatch({ type: 'createAlbumRequest' });

        const { data } = await axios.post(`${process.env.REACT_APP_SERVER}/v1/event/gallery/create`, albumData, config);

        dispatch({ type: 'createAlbumSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'createAlbumFail',
            payload: error.response.data.message,
        });
    }
};

export const deleteAlbum = (id) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'application/json',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };
        dispatch({ type: 'deleteAlbumRequest' });

        const { data } = await axios.delete(`${process.env.REACT_APP_SERVER}/v1/event/gallery/${id}/delete`, config);

        dispatch({ type: 'deleteAlbumSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'deleteAlbumFail',
            payload: error.response.data.message,
        });
    }
};

export const getAlbumImages = (id) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'application/json',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };
        dispatch({ type: 'getAlbumImageRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/event/image/${id}/all`, config);

        dispatch({ type: 'getAlbumImageSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getAlbumImageFail',
            payload: error.response.data.message,
        });
    }
};


export const createAlbumImages = (id, image, heading) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'multipart/form-data',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };
        dispatch({ type: 'createAlbumImageRequest' });

        const { data } = await axios.post(`${process.env.REACT_APP_SERVER}/v1/event/image/${id}/upload`, { id, image, heading }, config);

        dispatch({ type: 'createAlbumImageSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'createAlbumImageFail',
            payload: error.response.data.message,
        });
    }
};

export const deleteAlbumImage = (id) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'application/json',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };
        dispatch({ type: 'deleteAlbumImageRequest' });

        const { data } = await axios.delete(`${process.env.REACT_APP_SERVER}/v1/event/image/${id}/delete`, config);

        dispatch({ type: 'deleteAlbumImageSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'deleteAlbumImageFail',
            payload: error.response.data.message,
        });
    }
};


export const getEventDescription = (id) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getEventsDescriptionRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/event/event/description/${id}`, config);

        dispatch({ type: 'getEventsDescriptionSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getEventsDescriptionFail',
            payload: error.response.data.message,
        });
    }
};


export const updateEventDescription = (eventData, id) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'multipart/form-data',
                "Allow-Control-Allow-Origin": "*"

            },
            // withCredentials: true,
        };
        dispatch({ type: 'updateEventsDescriptionRequest' });

        const { data } = await axios.put(`${process.env.REACT_APP_SERVER}/v1/event/event/description/${id}`, eventData, config);

        dispatch({ type: 'updateEventsDescriptionSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'updateEventsDescriptionFail',
            payload: error.response.data.message,
        });
    }
};