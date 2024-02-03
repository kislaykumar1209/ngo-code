import axios from 'axios';

export const getDescriptionPoint = (section, subsection) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'application/json',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };
        dispatch({ type: 'getDescriptionRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/description/${section}/${subsection}/all`, config);

        dispatch({ type: 'getDescriptionSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getDescriptionFail',
            payload: error.response.data.message,
        });
    }
};


export const updateDescriptionPoint = (descBody, section, subsection) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'application/json',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };
        dispatch({ type: 'updateDescriptionRequest' });

        const { data } = await axios.put(`${process.env.REACT_APP_SERVER}/v1/description/${section}/${subsection}/update`, descBody, config);

        dispatch({ type: 'updateDescriptionSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'updateDescriptionFail',
            payload: error.response.data.message,
        });
    }
};

