import axios from 'axios';


// export const SERVER = 'https://lionapi.acolabz.com${process.env.REACT_APP_SERVER}${process.env.REACT_APP_SERVER}/v1'

export const getClubInfo = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getClubInfoRequest' });

        // const { data } = await axios.get(`${process.env.REACT_APP_SERVER}${process.env.REACT_APP_SERVER}/v1/others/info`, config);
        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/others/info`, config);

        dispatch({ type: 'getClubInfoSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getClubInfoFail',
            payload: error.response.data.message,
        });
    }
};


export const updateClubInfo = (clubData) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'updateClubInfoRequest' });

        const { data } = await axios.put(`${process.env.REACT_APP_SERVER}/v1/others/info/update`, clubData, config);

        dispatch({ type: 'updateClubInfoSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'updateClubInfoFail',
            payload: error.response.data.message,
        });
    }
};


export const getLogoInfo = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getLogoInfoRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/home/detail`, config);

        dispatch({ type: 'getLogoInfoSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getLogoInfoFail',
            payload: error.response.data?.message,
        });
    }
};

export const updateLogo = (title, image) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'multipart/form-data',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };
        dispatch({ type: 'updateLogoInfoRequest' });

        const { data } = await axios.put(`${process.env.REACT_APP_SERVER}/v1/home/detail/update`, { title, image }, config);

        dispatch({ type: 'updateLogoInfoSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'updateLogoInfoFail',
            payload: error.response.data.message,
        });
    }
};

