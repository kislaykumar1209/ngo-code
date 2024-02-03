const db = require('../../models');
const ApiError = require('../../middleware/apiError');

require('dotenv').config();

class EventCategoryService {


    async create(body, image) {
        if (!body.heading)
            throw ApiError.badRequest('Heading is required');
        if (!image)
            throw ApiError.badRequest('Image is required');

        if (!body.description)
            throw ApiError.badRequest('Description is required');

        const length = await db.EventCategory.count()
        const createdEventCategory = await db.EventCategory.create({
            image: image,
            description: body.description,
            heading: body.heading,
            sequence: length + 1
        });
        if (!createdEventCategory._options.isNewRecord) {
            throw ApiError.internal();
        }
        return createdEventCategory;

    }
    async update(input, id) {
        if (!input)
            throw ApiError.badRequest('Point is required');


        if (!id)
            throw ApiError.badRequest('id is required');

        let found = await db.EventCategory.findByPk(id);
        if (!found)
            throw ApiError.notFound();

        let another = await db.EventCategory.findOne({
            where: {
                sequence: input.point
            }
        });
        let value = found.sequence

        found.sequence = input.point
        another.sequence = value

        await found.save({ fields: ['sequence'] });
        await another.save({ fields: ['sequence'] });



        return found;
    }

    async exist() {
        const result = await db.EventCategory.findAll({ where: { is_deleted: false } })

        let sequence = []

        result.forEach((data) => {
            sequence.push(data.sequence)
        })
        return { result, sequence };
    }
    async existSequence() {
        const result = await db.EventCategory.findAll({ where: { is_deleted: false }, order: [['sequence', 'ASC']], })

        return result
    }

    async delete(id) {
        if (!id)
            throw ApiError.badRequest('id is required');

        let found = await db.EventCategory.findByPk(id);
        if (!found)
            throw ApiError.notFound();


        found.is_deleted = true;
        await found.save({ fields: ['is_deleted'] });





        return found;
    }

}

module.exports = new EventCategoryService();