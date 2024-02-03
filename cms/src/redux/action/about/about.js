import axios from 'axios';



export const getOverviewPoint = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getOverviewPointRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/about/overview/all`, config);

        dispatch({ type: 'getOverviewPointSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getOverviewPointFail',
            payload: error.response.data.message,
        });
    }
};
export const updateOverviewPoint = (body, id) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'updateOverviewPointRequest' });

        const { data } = await axios.put(`${process.env.REACT_APP_SERVER}/v1/about/overview/update/${id}`, body, config);

        dispatch({ type: 'updateOverviewPointSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'updateOverviewPointFail',
            payload: error.response.data.message,
        });
    }
};


export const createOverviewPoint = (overviewData) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'multipart/form-data',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'createOverviewPointRequest' });

        const { data } = await axios.post(`${process.env.REACT_APP_SERVER}/v1/about/overview/add`, (overviewData), config);

        dispatch({ type: 'createOverviewPointSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'createOverviewPointFail',
            payload: error.response.data.message,
        });
    }
};

export const deleteOverviewPoint = (id) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'deleteOverviewRequest' });

        const { data } = await axios.delete(`${process.env.REACT_APP_SERVER}/v1/about/overview/${id}/delete`, config);

        dispatch({ type: 'deleteOverviewSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'deleteOverviewFail',
            payload: error.response.data.message,
        });
    }
};


export const getTeamInfo = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getTeamInfoRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/about/team/all`, config);

        dispatch({ type: 'getTeamInfoSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getTeamInfoFail',
            payload: error.response.data.message,
        });
    }
};


export const createTeamInfo = TeamData => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'multipart/form-data',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'createTeamInfoRequest' });

        const { data } = await axios.post(`${process.env.REACT_APP_SERVER}/v1/about/team/add`, TeamData, config);

        dispatch({ type: 'createTeamInfoSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'createTeamInfoFail',
            payload: error.response.data.message,
        });
    }
};


export const deleteTeamInfo = (id) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'deleteTeamInfoRequest' });

        const { data } = await axios.delete(`${process.env.REACT_APP_SERVER}/v1/about/team/delete/${id}`, config);

        dispatch({ type: 'deleteTeamInfoSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'deleteTeamInfoFail',
            payload: error.response.data.message,
        });
    }
};

export const getTestimonial = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getTestimonialRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/about/testimonial/all`, config);

        dispatch({ type: 'getTestimonialSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getTestimonialFail',
            payload: error.response.data.message,
        });
    }
};

export const createTestimonial = (testimonialData) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'createTestimonialRequest' });

        const { data } = await axios.post(`${process.env.REACT_APP_SERVER}/v1/about/testimonial/add`, (testimonialData), config);

        dispatch({ type: 'createTestimonialSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'createTestimonialFail',
            payload: error.response.data.message,
        });
    }
};

export const deleteTestimonialPoint = (id) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'deleteTestimonialRequest' });

        const { data } = await axios.delete(`${process.env.REACT_APP_SERVER}/v1/about/testimonial/delete/${id}`, config);

        dispatch({ type: 'deleteTestimonialSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'deleteTestimonialFail',
            payload: error.response.data.message,
        });
    }
};


export const getMissionandDream = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getMissonAndDreamRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/about/dreams/all`, config);

        dispatch({ type: 'getMissonAndDreamSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getMissonAndDreamFail',
            payload: error.response.data.message,
        });
    }
};

export const updateMissionandDream = (missionBody) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'updateMissonAndDreamRequest' });

        const { data } = await axios.put(`${process.env.REACT_APP_SERVER}/v1/about/dreams/update`, (missionBody), config);

        dispatch({ type: 'updateMissonAndDreamSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'updateMissonAndDreamFail',
            payload: error.response.data.message,
        });
    }
};


export const getDreamsPoint = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getDreamsPointRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/about/dreams/point/all`, config);

        dispatch({ type: 'getDreamsPointSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getDreamsPointFail',
            payload: error.response.data.message,
        });
    }
};

export const createDreamsPoint = (point) => async dispatch => {
    try {
        // console.log(point)
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'createDreamsPointRequest' });

        const { data } = await axios.post(`${process.env.REACT_APP_SERVER}/v1/about/dreams/point/add`, (point), config);

        dispatch({ type: 'createDreamsPointSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'createDreamsPointFail',
            payload: error.response.data.message,
        });
    }
};
export const updateDreamsPoint = (point, id) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'updateDreamsPointRequest' });

        const { data } = await axios.put(`${process.env.REACT_APP_SERVER}/v1/about/dreams/point/update/${id}`, point, config);

        dispatch({ type: 'updateDreamsPointSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'updateDreamsPointFail',
            payload: error.response.data.message,
        });
    }
};

export const deleteDreamsPoint = (id) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'deleteDreamsPointRequest' });

        const { data } = await axios.delete(`${process.env.REACT_APP_SERVER}/v1/about/dreams/point/${id}/delete`, config);

        dispatch({ type: 'deleteDreamsPointSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'deleteDreamsPointFail',
            payload: error.response.data.message,
        });
    }
};

