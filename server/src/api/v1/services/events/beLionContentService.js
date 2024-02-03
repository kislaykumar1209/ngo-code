const db = require('../../models');
const ApiError = require('../../middleware/apiError');

require('dotenv').config();

class BeLionContentService {


    async create(points) {
        if (!points)
            throw ApiError.badRequest('Points is required');


        const length = await db.LionContent.count()

        const createdPoint = await db.LionContent.create({
            point: points.point,
            sequence: length + 1
        });
        if (!createdPoint._options.isNewRecord) {
            throw ApiError.internal();
        }
        return createdPoint;

    }

    async update(input, id) {
        if (!input.point)
            throw ApiError.badRequest('Point is required');


        if (!id)
            throw ApiError.badRequest('id is required');

        let found = await db.LionContent.findByPk(id);
        if (!found)
            throw ApiError.notFound();


        let another = await db.LionContent.findOne({
            where: {
                sequence: input.point
            }
        });
        let value = found.sequence

        found.sequence = input.point
        another.sequence = value

        await found.save({ fields: ['sequence'] });
        await another.save({ fields: ['sequence'] });


    }


    async exist() {
        const result = await db.LionContent.findAll({
            where: { is_deleted: false }
        })
        let sequence = []

        result.forEach((data) => {
            sequence.push(data.sequence)
        })
        return { result, sequence };
    }
    async existSequence() {
        const result = await db.LionContent.findAll({
            where: { is_deleted: false },
            order: [['sequence', 'ASC']],
        })
        return result
    }

    async delete(id) {
        if (!id)
            throw ApiError.badRequest('id is required');

        let found = await db.LionContent.findByPk(id);
        if (!found)
            throw ApiError.notFound();




        found.is_deleted = true;
        await found.save({ fields: ['is_deleted'] });



        return found;

        // const result = await db.Event.findAll({
        //     where: { user_id: user.id }
        // })

        // return result;
    }

}

module.exports = new BeLionContentService();