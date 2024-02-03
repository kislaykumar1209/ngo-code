const db = require('../../models');
const ApiError = require('../../middleware/apiError');

require('dotenv').config();

class BeLionPointService {


    async create(description) {
        if (!description)
            throw ApiError.badRequest('Description is required');


        const createdEvent = await db.LionPoint.create({
            description1: description.description1,
            description2: description.description2,
            description3: description.description3,
        });
        if (!createdEvent._options.isNewRecord) {
            throw ApiError.internal();
        }
        return createdEvent;

    }
    async update(points, id) {
        if (!points)
            throw ApiError.badRequest('Point is required');


        if (!id)
            throw ApiError.badRequest('id is required');

        let found = await db.LionPoint.findByPk(id);
        if (!found)
            throw ApiError.notFound();

        found.heading1 = points.heading1,
            found.heading2 = points.heading2,
            found.heading3 = points.heading3,
            await found.save({ fields: ['heading1', 'heading2', 'heading3'] });


        return found;
    }

    async exist() {
        const result = await db.LionPoint.findAll({ where: { is_deleted: false } })

        return result;
    }

    async delete(id) {
        if (!id)
            throw ApiError.badRequest('id is required');

        let found = await db.LionPoint.findByPk(id);
        if (!found)
            throw ApiError.notFound();


        found.is_deleted = true;
        await found.save({ fields: ['is_deleted'] });





        return found;
    }

}

module.exports = new BeLionPointService();