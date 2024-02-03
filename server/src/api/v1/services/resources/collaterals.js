const db = require('../../models');
const ApiError = require('../../middleware/apiError');

require('dotenv').config();

class CollateralService {


    async create(body, id) {


        if (!body.point)
            throw ApiError.badRequest('Points  is required');

        if (!id)
            throw ApiError.badRequest('Id  is required');

        const length = await db.FeaturedResource.count({
            where: { CID: id }
        });

        const createdCollateral = await db.FeaturedResource.create({

            CID: id,
            point: body.point,
            sequence: length + 1
        });
        if (!createdCollateral._options.isNewRecord) {
            throw ApiError.internal();
        }
        return createdCollateral;

    }


    async exist(id) {

        const result = await db.FeaturedResource.findAll({
            where: {
                is_deleted: false,
                CID: id
            }
        })
        let sequence = []

        result.forEach((data) => {
            sequence.push(data.sequence)
        })
        return { result, sequence };
    }
    async existSequence(id) {

        const result = await db.FeaturedResource.findAll({
            where: {
                is_deleted: false,
                CID: id
            },
            order: [['sequence', 'ASC'],],
        })

        return result
    }

    async update(body, cid, id) {
        if (!body.point)
            throw ApiError.badRequest('Point  is required');
        if (!id)
            throw ApiError.badRequest('id is required');

        let found = await db.FeaturedResource.findByPk(id);
        if (!found)
            throw ApiError.notFound();

        if (body.point) {
            let another = await db.FeaturedResource.findOne({
                where: {
                    sequence: body.point,
                    CID: cid
                }
            });

            let value = found.sequence

            found.sequence = body.point
            another.sequence = value

            await found.save({ fields: ['sequence'] });
            await another.save({ fields: ['sequence'] });
        }

        return found;
    }

    async delete(id) {
        if (!id)
            throw ApiError.badRequest('id is required');

        let found = await db.FeaturedResource.findByPk(id);
        if (!found)
            throw ApiError.notFound();


        found.is_deleted = true;
        await found.save({ fields: ['is_deleted'] });



        return found;


    }

}

module.exports = new CollateralService();