
const ApiError = require('../../middleware/apiError');
const Response = require('../../middleware/response');
const EventCategoryService = require('../../services/events/eventCategoryService');
const path = require('path')

require('dotenv').config();

async function registerEventCategory(req, res) {
    // console.log(req.files)
    if (!req.file) {
        return Response.error(res, ApiError.badRequest(' Image is required'));
    }
    var ext = path.extname(req.file.originalname);
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
        return Response.error(res, ApiError.badRequest('Only Images are allowed'));
    }
    const image = req.file.filename
    const eventBody = req.body

    // console.log(eventBody)


    try {
        const createEventCategory = await EventCategoryService.create(eventBody, image);

        return Response.success(res, 'Event Category successfully created', createEventCategory);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


async function updateEventCategory(req, res) {
    const id = req.params.id
    const eventBody = req.body
    if (!id)
        return Response.error(res, ApiError.badRequest(' id is required'));

    try {
        const updatedEventCategory = await EventCategoryService.update(eventBody, id);
        return Response.success(res, 'successfully updated', updatedEventCategory);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function getEventCategory(req, res) {

    try {
        const eventCategory = await EventCategoryService.exist();
        return Response.success(res, 'Event Category ', eventCategory);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function getEventCategorySequence(req, res) {

    try {
        const eventCategory = await EventCategoryService.existSequence();
        return Response.success(res, 'Event Category ', eventCategory);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function deleteEventCategory(req, res) {
    const id = req.params.id

    try {
        const EventCategory = await EventCategoryService.delete(id);
        return Response.success(res, 'Event Category Deleted', EventCategory);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


module.exports = {
    registerEventCategory,
    updateEventCategory,
    getEventCategory,
    deleteEventCategory,
    getEventCategorySequence
}