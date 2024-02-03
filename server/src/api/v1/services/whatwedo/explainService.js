const db = require('../../models');
const ApiError = require('../../middleware/apiError');

require('dotenv').config();

class ExplainService {


    async create(explain, id, image) {
        if (!explain.heading)
            throw ApiError.badRequest(' Heading is  Required')

        if (!explain.description)
            throw ApiError.badRequest(' Description is  Required');
        if (!id)
            throw ApiError.badRequest(' ID is  Required');
        if (!image)
            throw ApiError.badRequest(' Image is  Required');


        let found = await db.OurPurpose.findOne({
            where: { id: id }
        });

        const length = await db.Explain.count({
            where: { PID: id }
        });

        if (!found)
            throw ApiError.badRequest(' Category Not  FOund');;

        const createdExplain = await db.Explain.create({
            heading: explain.heading,
            description: explain.description,
            image: image,
            sequence: length + 1,
            PID: id

        });
        if (!createdExplain._options.isNewRecord) {
            throw ApiError.internal();
        }
        return createdExplain;

    }

    async update(explain, cid, id) {
        if (!id)
            throw ApiError.badRequest('id is required');


        let found = await db.Explain.findByPk(id);
        // if (!found)
        //     throw ApiError.notFound();
        if (!found) {
            const createdExplain = await db.Explain.create({
                is_active: explain.is_active

            });
            if (!createdExplain._options.isNewRecord) {
                throw ApiError.internal();
            }
            return createdExplain;
        }

        if (explain.is_active) {
            found.is_active = explain.is_active
        }

        if (explain.point) {
            let another = await db.Explain.findOne({
                where: {
                    sequence: explain.point,
                    PID: cid
                }
            });

            let value = found.sequence

            found.sequence = explain.point
            another.sequence = value

            await found.save({ fields: ['sequence'] });
            await another.save({ fields: ['sequence'] });
        }
        await found.save({ fields: ['is_active'] });


        return found;
    }

    async existPage(category) {

        const overview = await db.OurPurpose.findOne({
            where: { is_deleted: false, category: category }
        })

        // console.log(overview)

        const result = await db.Explain.findAll({
            where: { is_deleted: false, PID: overview.id },
            order: [['sequence', 'ASC'],],
        })
        // if (result.length == 0)
        //     throw ApiError.notFound();



        return result;
    }
    async exist(cid) {
        // console.log(cid)

        const result = await db.Explain.findAll({
            where: { is_deleted: false, PID: cid }
        })
        // if (result.length == 0)
        //     throw ApiError.notFound();
        let Sequence = []

        result.forEach((data) => {
            Sequence.push(data.sequence)
        })
        return { result, Sequence };
    }


    async delete(id) {
        if (!id)
            throw ApiError.badRequest('id is required');

        let found = await db.Explain.findByPk(id);
        if (!found)
            throw ApiError.notFound();



        found.is_deleted = true;
        await found.save({ fields: ['is_deleted'] });



        return found;

    }

}

module.exports = new ExplainService();