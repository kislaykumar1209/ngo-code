import axios from 'axios';

export const getGlobalSponserPoint = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getGlobalSponserPointRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/sponser/global/point/all`, config);

        dispatch({ type: 'getGlobalSponserPointSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getGlobalSponserPointFail',
            payload: error.response.data.message,
        });
    }
};
export const updateGlobalSponserPoint = (points, id) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'updateGlobalSponserPointRequest' });

        const { data } = await axios.put(`${process.env.REACT_APP_SERVER}/v1/sponser/global/point/${id}`, points, config);

        dispatch({ type: 'updateGlobalSponserPointSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'updateGlobalSponserPointFail',
            payload: error.response.data.message,
        });
    }
};


export const createGlobalSponserPoint = (points) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'application/json',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };
        dispatch({ type: 'createGlobalSponserPointRequest' });

        const { data } = await axios.post(`${process.env.REACT_APP_SERVER}/v1/sponser/global/point/add`, points, config);

        dispatch({ type: 'createGlobalSponserPointSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'createGlobalSponserPointFail',
            payload: error.response.data.message,
        });
    }
};
export const deleteGlobalSponserPoint = (id) => async dispatch => {
    try {
        const config = {
            headers: {
                "Allow-Control-Allow-Origin": "*",
                'Content-type': 'application/json',
            },
            // withCredentials: true,
        };
        dispatch({ type: 'deleteGlobalSponserPointRequest' });

        const { data } = await axios.delete(`${process.env.REACT_APP_SERVER}/v1/sponser/global/point/${id}/delete`, config);

        dispatch({ type: 'deleteGlobalSponserPointSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'deleteGlobalSponserPointFail',
            payload: error.response.data.message,
        });
    }
};

export const getPartnerWithOppurtunityInfo = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getPartnerWithUsOppourtunityRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/sponser/partner/1/all`, config);

        dispatch({ type: 'getPartnerWithUsOppourtunitySuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getPartnerWithUsOppourtunityFail',
            payload: error.response.data.message,
        });
    }
};
export const updatePartnerWithOppurtunityInfo = (point, id) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'updatePartnerWithUsOppourtunityRequest' });

        const { data } = await axios.put(`${process.env.REACT_APP_SERVER}/v1/sponser/partner/1/update/${id}`, point, config);

        dispatch({ type: 'updatePartnerWithUsOppourtunitySuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'updatePartnerWithUsOppourtunityFail',
            payload: error.response.data.message,
        });
    }
};


export const createPartnerWithOppurtunityInfo = (points) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'application/json',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };
        dispatch({ type: 'createPartnerWithUsOppourtunityRequest' });

        const { data } = await axios.post(`${process.env.REACT_APP_SERVER}/v1/sponser/partner/1/add`, points, config);

        dispatch({ type: 'createPartnerWithUsOppourtunitySuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'createPartnerWithUsOppourtunityFail',
            payload: error.response.data.message,
        });
    }
};

export const deletePartnerWithOppurtunityInfo = (id) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'application/json',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };
        dispatch({ type: 'deletePartnerWithOppourtunityRequest' });

        const { data } = await axios.delete(`${process.env.REACT_APP_SERVER}/v1/sponser/partner/1/${id}/delete`, config);

        dispatch({ type: 'deletePartnerWithOppourtunitySuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'deletePartnerWithOppourtunityFail',
            payload: error.response.data.message,
        });
    }
};


export const getPartnerWithBenefitInfo = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getPartnerWithUsBenefitRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/sponser/partner/2/all`, config);

        dispatch({ type: 'getPartnerWithUsBenefitSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getPartnerWithUsBenefitFail',
            payload: error.response.data.message,
        });
    }
};
export const updatePartnerWithBenefitInfo = (point, id) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'updatePartnerWithUsBenefitRequest' });

        const { data } = await axios.put(`${process.env.REACT_APP_SERVER}/v1/sponser/partner/2/update/${id}`, point, config);

        dispatch({ type: 'updatePartnerWithUsBenefitSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'updatePartnerWithUsBenefitFail',
            payload: error.response.data.message,
        });
    }
};

export const createPartnerWithBenefitInfo = (points) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'application/json',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };
        dispatch({ type: 'createPartnerWithUsBenefitRequest' });

        const { data } = await axios.post(`${process.env.REACT_APP_SERVER}/v1/sponser/partner/2/add`, points, config);

        dispatch({ type: 'createPartnerWithUsBenefitSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'createPartnerWithUsBenefitFail',
            payload: error.response.data.message,
        });
    }
};


export const deletePartnerWithBenefitInfo = (id) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'application/json',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };
        dispatch({ type: 'deletePartnerWithBenefitRequest' });

        const { data } = await axios.delete(`${process.env.REACT_APP_SERVER}/v1/sponser/partner/2/${id}/delete`, config);

        dispatch({ type: 'deletePartnerWithBenefitSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'deletePartnerWithBenefitFail',
            payload: error.response.data.message,
        });
    }
};




export const getLocalSponserPoint = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getLocalSponserPointRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/sponser/local/all`, config);

        dispatch({ type: 'getLocalSponserPointSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getLocalSponserPointFail',
            payload: error.response.data.message,
        });
    }
};


export const createLocalSponserPoint = (points) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'multipart/form-data',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };
        dispatch({ type: 'createLocalSponserPointRequest' });

        const { data } = await axios.post(`${process.env.REACT_APP_SERVER}/v1/sponser/local/add`, points, config);

        dispatch({ type: 'createLocalSponserPointSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'createLocalSponserPointFail',
            payload: error.response.data.message,
        });
    }
};
export const updateLocalSponserPoint = (point, id) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };
        dispatch({ type: 'updateLocalSponserPointRequest' });

        const { data } = await axios.put(`${process.env.REACT_APP_SERVER}/v1/sponser/local/update/${id}`, point, config);

        dispatch({ type: 'updateLocalSponserPointSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'updateLocalSponserPointFail',
            payload: error.response.data.message,
        });
    }
};
export const deleteLocalSponserPoint = (id) => async dispatch => {
    try {
        const config = {
            headers: {
                "Allow-Control-Allow-Origin": "*",
                'Content-type': 'application/json',
            },
            // withCredentials: true,
        };
        dispatch({ type: 'deleteLocalSponserPointRequest' });

        const { data } = await axios.delete(`${process.env.REACT_APP_SERVER}/v1/sponser/local/${id}/delete`, config);

        dispatch({ type: 'deleteLocalSponserPointSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'deleteLocalSponserPointFail',
            payload: error.response.data.message,
        });
    }
};