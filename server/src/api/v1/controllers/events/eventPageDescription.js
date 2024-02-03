

const ApiError = require('../../middleware/apiError');
const Response = require('../../middleware/response');
const EventPageDescriptionService = require('../../services/events/eventPageDescriptionService');

require('dotenv').config();


async function updateEventPageDescription(req, res) {
    const id = req.params.id
    const files = req.files


    const image1 = files[0]?.fieldname === 'image1' ? files[0]?.filename : ''
    const image2 = files[0]?.fieldname === 'image2' ? files[0]?.filename : ''
    const image4 = files[0]?.fieldname === 'image4' ? files[0]?.filename : ''
    const image5 = files[0]?.fieldname === 'image5' ? files[0]?.filename : ''
    const Image1 = files[0]?.fieldname === 'Image1' ? files[0]?.filename : ''
    const Image2 = files[0]?.fieldname === 'Image2' ? files[0]?.filename : ''
    const eventBody = req.body
    if (!id)
        return Response.error(res, ApiError.badRequest(' id is required'));

    try {
        const updatedEventCategory = await EventPageDescriptionService.update(eventBody, image1, image2, image4, image5, Image1, Image2, id);
        return Response.success(res, 'Event Description updated', updatedEventCategory);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function getEventPageDescription(req, res) {
    const id = req.params.id

    try {
        const eventCategory = await EventPageDescriptionService.exist(id);
        return Response.success(res, 'Event Description ', eventCategory);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}




module.exports = {

    updateEventPageDescription,
    getEventPageDescription,

}