const db = require('../../models');
const ApiError = require('../../middleware/apiError');

require('dotenv').config();

class CollateralPDFService {

    async create(body, image, pdf) {
        if (!body.title)
            throw ApiError.badRequest('Title is required');
        if (!image)
            throw ApiError.badRequest('Image is required');
        if (!pdf)
            throw ApiError.badRequest('Pdf is required');

        // console.log(body)

        const createdDescription = await db.CollateralsPDF.create({
            title: body.title,
            image: image,
            pdf: pdf
        });
        if (!createdDescription._options.isNewRecord) {
            throw ApiError.internal();
        }
        return createdDescription;

    }


    async exist() {
        const result = await db.CollateralsPDF.findAll({ where: { is_deleted: false } })
        // const result = await db.CollateralsPDF.findAll()

        return result;
    }

    async delete(id) {

        if (!id)
            throw ApiError.badRequest('id is required');

        let found = await db.CollateralsPDF.findByPk(id);
        if (!found)
            throw ApiError.notFound();


        found.is_deleted = true;
        await found.save({ fields: ['is_deleted'] });





        return found;

    }



}

module.exports = new CollateralPDFService();