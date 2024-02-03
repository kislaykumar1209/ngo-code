import axios from 'axios';


// export const SERVER = 'https://lionapi.acolabz.com${process.env.REACT_APP_SERVER}${process.env.REACT_APP_SERVER}/v1'
// let token = JSON.parse(sessionStorage.getItem('token'));
export const login = (email, password) => async dispatch => {
    try {
        const config = {
            headers: {

                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'loginRequest' });

        // const { data } = await axios.get(`${process.env.REACT_APP_SERVER}${process.env.REACT_APP_SERVER}/v1/others/info`, config);
        const { data } = await axios.post(`${process.env.REACT_APP_SERVER}/v1/auth/login`, { email, password }, config);


        // JSON.parse(sessionStorage.setItem('token', data?.data?.token));
        dispatch({ type: 'loginSuccess', payload: data });
        localStorage.setItem('token', data?.data?.token)



    } catch (error) {
        dispatch({
            type: 'loginFail',
            payload: error.response.data.message,
        });
    }
};


export const register = (email, password) => async dispatch => {
    try {

        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'registerRequest' });

        const { data } = await axios.post(`${process.env.REACT_APP_SERVER}/v1/auth/register`, { email, password }, config);

        dispatch({ type: 'registerSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'registerFail',
            payload: error.response.data.message,
        });
    }
};

export const loadUser = () => async dispatch => {
    try {
        let token = localStorage.getItem('token');
        // console.log(token)
        const config = {
            headers: {
                "authorization": `${token}`,
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
        };
        // console.log(config)
        dispatch({ type: 'LoadUserRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/auth/me`, config);

        dispatch({ type: 'LoadUserSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'LoadUserFail',
            payload: error.response.data?.message,
        });
    }
};

export const logout = () => async dispatch => {
    try {

        // console.log(token)
        const config = {
            headers: {
                // "authorization": `${token}`,
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
        };
        // console.log(config)
        dispatch({ type: 'LogoutRequest' });
        localStorage.removeItem('token')
        // console.log('hiii')
        const data = await axios.get(`${process.env.REACT_APP_SERVER}/v1/auth/logout`, config);
        console.log(data)
        dispatch({ type: 'LogoutSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'LogoutFail',
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
            payload: error.response.data.message,
        });
    }
};

