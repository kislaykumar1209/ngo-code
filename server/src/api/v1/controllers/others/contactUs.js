
const ApiError = require('../../middleware/apiError');
const Response = require('../../middleware/response');
const ContactUsService = require('../../services/others/contactUsService');

require('dotenv').config();

async function registerContact(req, res) {   //check via gmail
    const contactBody = req.body

    if (!contactBody)
        return Response.error(res, ApiError.badRequest('  Form cannot be empty'));


    try {
        const contact = await ContactUsService.create(contactBody);

        return Response.success(res, 'contact successfully created', contact);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}




async function getContact(req, res) {

    try {
        const allContacts = await ContactUsService.exist();
        return Response.success(res, 'All contact  ', allContacts);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}



module.exports = {
    registerContact,
    getContact,
}