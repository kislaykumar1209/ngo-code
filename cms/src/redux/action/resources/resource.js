import axios from 'axios';

export const getResource = (id) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getResourceRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/resource/${id}/all`, config);

        dispatch({ type: 'getResourceSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getResourceFail',
            payload: error.response.data.message,
        });
    }
};


export const createResource = (resourceData, id) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'application/json',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };
        dispatch({ type: 'createResourceRequest' });

        const { data } = await axios.post(`${process.env.REACT_APP_SERVER}/v1/resource/${id}/add`, resourceData, config);

        dispatch({ type: 'createResourceSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'createResourceFail',
            payload: error.response.data.message,
        });
    }
};
export const updateResource = (resourceData, cid, id) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'application/json',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };
        dispatch({ type: 'updateResourceRequest' });

        const { data } = await axios.put(`${process.env.REACT_APP_SERVER}/v1/resource/${cid}/${id}/update`, resourceData, config);

        dispatch({ type: 'updateResourceSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'updateResourceFail',
            payload: error.response.data.message,
        });
    }
};

export const deleteResource = (id) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'application/json',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };
        dispatch({ type: 'deleteResourceRequest' });

        const { data } = await axios.delete(`${process.env.REACT_APP_SERVER}/v1/resource/${id}/delete`, config);

        dispatch({ type: 'deleteResourceSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'deleteResourceFail',
            payload: error.response.data.message,
        });
    }
};

export const getCollateralPDF = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getCollateralPDFRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/resource/collateral/pdf/all`, config);

        dispatch({ type: 'getCollateralPDFSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getCollateralPDFall',
            payload: error.response.data.message,
        });
    }
};


export const createCollateralPdf = (body) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'multipart/form-data',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };
        dispatch({ type: 'createCollateralPDFRequest' });

        const { data } = await axios.post(`${process.env.REACT_APP_SERVER}/v1/resource/collateral/pdf/add`, body, config);

        dispatch({ type: 'createCollateralPDFSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'createCollateralPDFFail',
            payload: error.response.data.message,
        });
    }
};

export const deleteCollateralPdf = (id) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'application/json',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };
        dispatch({ type: 'deleteCollateralPDFRequest' });

        const { data } = await axios.delete(`${process.env.REACT_APP_SERVER}/v1/resource/collateral/pdf/${id}/delete`, config);

        dispatch({ type: 'deleteCollateralPDFSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'deleteCollateralPDFFail',
            payload: error.response.data.message,
        });
    }
};
