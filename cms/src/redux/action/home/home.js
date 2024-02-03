import axios from 'axios';

export const getHomeAboutInfo = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getHomeAboutInfoRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/home/about`, config);

        dispatch({ type: 'getHomeAboutInfoSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getHomeAboutInfoFail',
            payload: error.response.data.message,
        });
    }
};
export const getHomeWhatweDoInfo = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getHomeWhatWeDoRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/home/whatewedo`, config);

        dispatch({ type: 'getHomeWhatWeDoSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getHomeWhatWeDoFail',
            payload: error.response.data.message,
        });
    }
};
export const getHomeOthersInfo = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getHomeOtherInfoRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/home/other`, config);

        dispatch({ type: 'getHomeOtherInfoSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getHomeOtherInfoFail',
            payload: error.response.data.message,
        });
    }
};
export const getFooterInfo = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getFooterInfoRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/home/footer`, config);

        dispatch({ type: 'getFooterInfoSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getFooterInfoFail',
            payload: error.response.data.message,
        });
    }
};
export const getHomeExtraInfo = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getHomeExtraInfoRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/home/extra`, config);

        dispatch({ type: 'getHomeExtraInfoSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getHomeExtraInfoFail',
            payload: error.response.data.message,
        });
    }
};
export const updateHomeAboutInfo = (aboutBody) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'application/json',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };
        dispatch({ type: 'updateHomeAboutInfoRequest' });

        const { data } = await axios.put(`${process.env.REACT_APP_SERVER}/v1/home/about/update`, aboutBody, config);

        dispatch({ type: 'updateHomeAboutInfoSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'updateHomeAboutInfoFail',
            payload: error.response.data.message,
        });
    }
};
export const updateHomeWhatweDoInfo = (otherData) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'multipart/form-data',
                "Allow-Control-Allow-Origin": "*"
            },

            // withCredentials: true,
        };
        dispatch({ type: 'updateHomeWhatWeDoRequest' });

        const { data } = await axios.put(`${process.env.REACT_APP_SERVER}/v1/home/whatwedo/update`, otherData, config);

        dispatch({ type: 'updateHomeWhatWeDoSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'updateHomeWhatWeDoFail',
            payload: error.response.data.message,
        });
    }
};
export const updateHomeOthersInfo = (otherData) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'multipart/form-data',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };
        dispatch({ type: 'updateOtherInfoRequest' });

        const { data } = await axios.put(`${process.env.REACT_APP_SERVER}/v1/home/other/update`, otherData, config);

        dispatch({ type: 'updateOtherInfoSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'updateOtherInfoFail',
            payload: error.response.data.message,
        });
    }
};
export const deleteHomeExtraInfo = (id) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'multipart/form-data',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };
        dispatch({ type: 'deleteExtraInfoRequest' });

        const { data } = await axios.delete(`${process.env.REACT_APP_SERVER}/v1/home/extra/delete/${id}`, config);

        dispatch({ type: 'deleteExtraInfoSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'deleteExtraInfoFail',
            payload: error.response.data.message,
        });
    }
};
export const updateHomeExtraInfo = (body, id) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'multipart/form-data',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };
        dispatch({ type: 'updateExtraInfoRequest' });

        const { data } = await axios.put(`${process.env.REACT_APP_SERVER}/v1/home/extra/update/${id}`, body, config);

        dispatch({ type: 'updateExtraInfoSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'updateExtraInfoFail',
            payload: error.response.data.message,
        });
    }
};
export const registerHomeExtraInfo = (body) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'multipart/form-data',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };
        dispatch({ type: 'registerExtraInfoRequest' });

        const { data } = await axios.post(`${process.env.REACT_APP_SERVER}/v1/home/extra/create`, body, config);

        dispatch({ type: 'registerExtraInfoSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'registerExtraInfoFail',
            payload: error.response.data.message,
        });
    }
};
export const updateFooter = (body) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'application/json',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };

        dispatch({ type: 'updateFooterRequest' });

        const { data } = await axios.put(`${process.env.REACT_APP_SERVER}/v1/home/footer/update`, body, config);

        dispatch({ type: 'updateFooterSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'updateFooterFail',
            payload: error.response.data.message,
        });
    }
};