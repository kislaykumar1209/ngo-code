
import axios from 'axios';


export const getAllBannerInfo = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getAllBannerRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/banner/all`, config);

        dispatch({ type: 'getAllBannerSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getAllBannerFail',
            payload: error.response.data.message,
        });
    }
};

export const getTitle = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getWhatweDOCategoryRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/whatwedo/overview/category/all`, config);

        dispatch({ type: 'getWhatweDOCategorySuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getWhatweDOCategoryFail',
            payload: error.response.data.message,
        });
    }
};

export const getBannerInfo = (section, subsection) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getBannerRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/banner/${section}/${subsection}/all`, config);

        dispatch({ type: 'getBannerSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getBannerFail',
            payload: error.response.data.message,
        });
    }
};
export const getSectionBannerInfo = (section, subsection) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getSectionBannerRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/banner/${section}/${subsection}/banner`, config);

        dispatch({ type: 'getSectionBannerSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getSectionBannerFail',
            payload: error.response.data.message,
        });
    }
};


export const createBanner = (bannerData, section, subsection) => async dispatch => {
    // console.log(bannerData.section)
    try {
        const config = {
            headers: {
                'Content-type': 'multipart/form-data',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };
        dispatch({ type: 'createBannerRequest' });

        const { data } = await axios.post(`${process.env.REACT_APP_SERVER}/v1/banner/${section}/${subsection}/create`, bannerData, config);

        dispatch({ type: 'createBannerSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'createBannerFail',
            payload: error.response.data.message,
        });
    }
};
export const updateBanner = (bannerData, section, subsection, id) => async dispatch => {
    // console.log(bannerData.section)
    try {
        const config = {
            headers: {
                'Content-type': 'multipart/form-data',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };
        dispatch({ type: 'updateBannerRequest' });

        const { data } = await axios.put(`${process.env.REACT_APP_SERVER}/v1/banner/${section}/${subsection}/update/${id}`, bannerData, config);

        dispatch({ type: 'updateBannerSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'updateBannerFail',
            payload: error.response.data.message,
        });
    }
};

export const deleteBanner = (id, section, subsection) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'application/json',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };
        dispatch({ type: 'deleteBannerRequest' });

        const { data } = await axios.delete(`${process.env.REACT_APP_SERVER}/v1/banner/${section}/${subsection}/${id}/delete`, config);

        dispatch({ type: 'deleteBannerSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'deleteBannerFail',
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




export const createMemberForm = (form) => async dispatch => {
    // console.log(bannerData.section)
    try {
        const config = {
            headers: {
                'Content-type': 'multipart/form-data',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };
        dispatch({ type: 'createMemberFormRequest' });

        const { data } = await axios.post(`${process.env.REACT_APP_SERVER}/v1/others/member/create`, form, config);

        dispatch({ type: 'createMemberFormSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'createMemberFormFail',
            payload: error.response.data.message,
        });
    }
};

export const getForm = () => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'application/json',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };
        dispatch({ type: 'getMemberFormRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/others/member/one`, config);

        dispatch({ type: 'getMemberFormSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getMemberFormFail',
            payload: error.response.data.message,
        });
    }
};



export const getLionBannerInfo = () => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getLionBannerRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/others/belion/banner/all`, config);

        dispatch({ type: 'getLionBannerSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getLionBannerFail',
            payload: error.response.data.message,
        });
    }
};

export const createLionBanner = (bannerData) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'multipart/form-data',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };
        dispatch({ type: 'createLionBannerRequest' });

        const { data } = await axios.post(`${process.env.REACT_APP_SERVER}/v1/others/belion/banner/create`, bannerData, config);

        dispatch({ type: 'createLionBannerSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'createLionBannerFail',
            payload: error.response.data.message,
        });
    }
};


export const deleteLionBanner = (id) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type': 'application/json',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };
        dispatch({ type: 'deleteBannerRequest' });

        const { data } = await axios.delete(`${process.env.REACT_APP_SERVER}/v1/others/belion/banner/${id}`, config);

        dispatch({ type: 'deleteBannerSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'deleteBannerFail',
            payload: error.response.data.message,
        });
    }
};


export const getTitleInfo = (section) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getTitleRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/others/title/${section}/all`, config);

        dispatch({ type: 'getTitleSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getTitleFail',
            payload: error.response.data.message,
        });
    }
};


export const updateTitleInfo = (titleBody, section) => async dispatch => {
    console.log(titleBody.is_active)
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };
        dispatch({ type: 'updateTitleRequest' });

        const { data } = await axios.put(`${process.env.REACT_APP_SERVER}/v1/others/title/${section}/update`, titleBody, config);

        dispatch({ type: 'updateTitleSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'updateTitleFail',
            payload: error.response.data.message,
        });
    }
};

export const getActivePageInfo = (section, subsection) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getActivePageRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/others/activepage/${section}/${subsection}`, config);

        dispatch({ type: 'getActivePageSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getActivePageFail',
            payload: error.response.data.message,
        });
    }
};


export const updateActivePageInfo = (data, section, subsection) => async dispatch => {
    // console.log(bannerData.section)
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true,
        };
        dispatch({ type: 'updateActivePageRequest' });

        const { data } = await axios.put(`${process.env.REACT_APP_SERVER}/v1/others/activepage/${section}/${subsection}`, data, config);

        dispatch({ type: 'updateActivePageSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'updateActivePageFail',
            payload: error.response.data.message,
        });
    }
};

export const getOthersInfo = (other) => async dispatch => {
    try {
        // console.log(other)
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getOtherInfoRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/others/${other}`, config);

        dispatch({ type: 'getOtherInfoSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getOtherInfoFail',
            payload: error.response.data.message,
        });
    }
};
export const updateOthersInfo = (detail, other) => async dispatch => {
    try {
        // console.log(other)
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'updateOthersRequest' });

        const { data } = await axios.put(`${process.env.REACT_APP_SERVER}/v1/others/${other}`, detail, config);

        dispatch({ type: 'updateOthersSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'updateOthersFail',
            payload: error.response.data.message,
        });
    }
};


export const getDonate = () => async dispatch => {
    try {
        // console.log(other)
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'getDonateInfoRequest' });

        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/v1/others/donate/all`, config);

        dispatch({ type: 'getDonateInfoSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'getDonateInfoFail',
            payload: error.response.data.message,
        });
    }
};
export const updateDonate = (detail) => async dispatch => {
    try {
        // console.log(other)
        const config = {
            headers: {
                'Content-type': 'multipart/form-data',
                "Allow-Control-Allow-Origin": "*"
            },
            // withCredentials: true
        };
        dispatch({ type: 'updateDonateRequest' });

        const { data } = await axios.put(`${process.env.REACT_APP_SERVER}/v1/others/donate/update`, detail, config);

        dispatch({ type: 'updateDonateSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'updateDonateFail',
            payload: error.response.data.message,
        });
    }
};