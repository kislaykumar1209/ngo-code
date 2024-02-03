const db = require('../../models');
const ApiError = require('../../middleware/apiError');

require('dotenv').config();

class OperationalResourceService {


    async create(body) {


        if (!body.point)
            throw ApiError.badRequest('Points  is required');




        const createdresource = await db.FeaturedResource.create({


            point: body.point
        });
        if (!createdresource._options.isNewRecord) {
            throw ApiError.internal();
        }
        return createdresource;

    }


    async exist() {

        const result = await db.FeaturedResource.findAll({
            where: { is_deleted: false }
        })

        return result;
    }

    async update(body, id) {
        if (!body.point)
            throw ApiError.badRequest('Point  is required');
        if (!id)
            throw ApiError.badRequest('id is required');

        let found = await db.FeaturedResource.findByPk(id);
        if (!found)
            throw ApiError.notFound();


        // console.log(image)



        found.point = body.point,
            await found.save({ fields: ['point'] });


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

module.exports = new OperationalResourceService();