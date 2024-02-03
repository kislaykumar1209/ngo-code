import axios from 'axios';

export const getOverview = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getOverviewRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/whatwedo/overview/all`, config);

        dispatch({ type: 'getOverviewSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getOverviewFail',
            payload: error.response.data.message,
        });
    }
};


export const createOverview = (overviewData) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'multipart/form-data',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };
        dispatch({ type: 'createOverviewRequest' });

        const { data } = await axios.post(`${process.env.REACT_APP_SERVER}/v1/whatwedo/overview/add`, overviewData, config);

        dispatch({ type: 'createOverviewSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'createOverviewFail',
            payload: error.response.data.message,
        });
    }
};

export const updateOverview = (overviewData, id) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'multipart/form-data',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };
        dispatch({ type: 'updateOverviewRequest' });

        const { data } = await axios.put(`${process.env.REACT_APP_SERVER}/v1/whatwedo/overview/update/${id}`, overviewData, config);

        dispatch({ type: 'updateOverviewSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'updateOverviewFail',
            payload: error.response.data.message,
        });
    }
};

export const deleteOverview = (id) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'application/json',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };
        dispatch({ type: 'deleteOverviewRequest' });

        const { data } = await axios.delete(`${process.env.REACT_APP_SERVER}/v1/whatwedo/overview/${id}/delete`, config);

        dispatch({ type: 'deleteOverviewSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'deleteOverviewFail',
            payload: error.response.data.message,
        });
    }
};


export const getCauseExplain = (cid) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getCauseExplainRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/whatwedo/overview/explain/${cid}/all`, config);

        dispatch({ type: 'getCauseExplainSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getCauseExplainFail',
            payload: error.response.data.message,
        });
    }
};


export const createCauseExplain = (overviewData, cid) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'multipart/form-data',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };
        dispatch({ type: 'createCauseExplainRequest' });

        const { data } = await axios.post(`${process.env.REACT_APP_SERVER}/v1/whatwedo/overview/explain/${cid}/add`, overviewData, config);

        dispatch({ type: 'createCauseExplainSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'createCauseExplainFail',
            payload: error.response.data.message,
        });
    }
};

export const deleteCauseExplain = (id) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'application/json',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };
        dispatch({ type: 'deleteCauseExplainRequest' });

        const { data } = await axios.delete(`${process.env.REACT_APP_SERVER}/v1/whatwedo/overview/explain/${id}/delete`, config);

        dispatch({ type: 'deleteCauseExplainSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'deleteCauseExplainFail',
            payload: error.response.data.message,
        });
    }
};

export const updateCauseExplain = (overviewData, cid, id) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'updateCauseRequest' });

        const { data } = await axios.put(`${process.env.REACT_APP_SERVER}/v1/whatwedo/overview/explain/${cid}/${id}/update`, overviewData, config);

        dispatch({ type: 'updateCauseSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'updateCauseFail',
            payload: error.response.data.message,
        });
    }
};

