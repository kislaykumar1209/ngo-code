
const ApiError = require('../../middleware/apiError');
const Response = require('../../middleware/response');
const TestimonialService = require('../../services/about/testimonialService');

require('dotenv').config();

async function registerTestimonial(req, res) {   //check via gmail
    const testimonialBody = req.body


    if (!testimonialBody)
        return Response.error(res, ApiError.badRequest(' Testimonial  is Required'));


    try {
        const createTestimonial = await TestimonialService.create(testimonialBody);

        return Response.success(res, 'Testimonial successfully created', createTestimonial);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


async function updateTestimonial(req, res) {
    const id = req.params.id
    const testimonialBody = req.body

    if (!id)
        return Response.error(res, ApiError.badRequest(' id is required'));

    try {
        const updatedTestimonial = await TestimonialService.update(testimonialBody, id);
        return Response.success(res, 'Testimonial successfully updated', updatedTestimonial);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function getTestimonial(req, res) {

    try {
        const testimonial = await TestimonialService.exist();
        return Response.success(res, 'Testimonial ', testimonial);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function deleteTestimonial(req, res) {

    const id = req.params.id

    try {
        const testimonial = await TestimonialService.delete(id);
        return Response.success(res, 'Testimonial Deleted', testimonial);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


module.exports = {
    registerTestimonial,
    updateTestimonial,
    getTestimonial,
    deleteTestimonial
}