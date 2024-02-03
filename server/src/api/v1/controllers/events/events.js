
const ApiError = require('../../middleware/apiError');
const Response = require('../../middleware/response');
const EventService = require('../../services/events/eventService');

require('dotenv').config();

async function registerEvent(req, res) {
    if (!req.files)
        return Response.error(res, ApiError.badRequest('  is Required'));
    if (!req.files[0])
        return Response.error(res, ApiError.badRequest(' Image is  Required'));
    if (!req.files[1])
        return Response.error(res, ApiError.badRequest(' Document is Required'));
    const files = req.files
    const image = files[0].filename
    const document = files[1].filename
    // console.log(files)
    // console.log(image)
    const eventBody = req.body
    if (!eventBody)
        return Response.error(res, ApiError.badRequest(' Event is Required'));


    try {
        const event = await EventService.create(eventBody, image, document);

        return Response.success(res, 'Event successfully created', event);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function updateEvent(req, res) {
    const id = req.params.id
    if (!id)
        return Response.error(res, ApiError.badRequest(' Id is Required'));
    let image;
    let document;

    if (req.files && req.files[0]?.fieldname === 'image') {
        image = req.files[0].filename
    }
    if (req.files && req.files[0]?.fieldname === 'document') {
        document = req.files[0].filename
    }
    if (req.files && req.files[1]?.fieldname === 'image') {
        image = req.files[1].filename
    }
    if (req.files && req.files[1]?.fieldname === 'document') {
        document = req.files[1].filename
    }

    // console.log(files)
    // console.log(image)
    const eventBody = req.body
    if (!eventBody)
        return Response.error(res, ApiError.badRequest(' Event is Required'));


    try {
        const event = await EventService.update(eventBody, image, document, id);

        return Response.success(res, 'Event successfully Updated', event);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


async function getEvent(req, res) {

    try {
        const event = await EventService.exist();
        return Response.success(res, 'event ', event);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function deleteEvent(req, res) {
    const id = req.params.id

    try {
        const event = await EventService.delete(id);
        return Response.success(res, 'event Deleted', event);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


module.exports = {
    registerEvent,
    getEvent,
    deleteEvent,
    updateEvent
}