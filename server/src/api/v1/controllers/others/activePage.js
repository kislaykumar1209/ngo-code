
const ApiError = require('../../middleware/apiError');
const Response = require('../../middleware/response');
const ActivePageService = require('../../services/others/ActivePageService');

require('dotenv').config();





async function getActivePage(req, res) {
    const section = req.params.section
    const subsection = req.params.subsection
    try {
        const event = await ActivePageService.exist(section, subsection);
        return Response.success(res, 'Active Page ', event);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function updateActivePage(req, res) {
    const data = req.body.is_active
    const section = req.params.section
    const subsection = req.params.subsection

    try {
        const event = await ActivePageService.update(data, section, subsection);
        return Response.success(res, 'Page updated', event);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


module.exports = {
    getActivePage,
    updateActivePage
}