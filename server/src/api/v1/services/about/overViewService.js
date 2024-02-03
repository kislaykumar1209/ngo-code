const db = require('../../models');
const ApiError = require('../../middleware/apiError');

require('dotenv').config();

class OverviewService {


    async create(overview, image) {

        if (!overview.heading)
            throw ApiError.badRequest(' Title is Required')
        if (!overview.comment)
            throw ApiError.badRequest(' Description is Required')

        if (!image)
            throw ApiError.badRequest(' Image is Required')
        const length = await db.OverView.count()



        const createdOverview = await db.OverView.create({
            heading: overview.heading,
            comment: overview.comment,
            // image: image.filename,
            image: image,
            sequence: length + 1
        });
        if (!createdOverview._options.isNewRecord) {
            throw ApiError.internal();
        }
        return createdOverview;

    }

    async update(overview, id) {
        if (!overview)
            throw ApiError.badRequest('about is required');
        if (!id)
            throw ApiError.badRequest('id is required');

        let found = await db.OverView.findByPk(id);

        let another = await db.OverView.findOne({
            where: {
                sequence: overview.point
            }
        });
        let value = found.sequence

        found.sequence = overview.point
        another.sequence = value


        await found.save({ fields: ['sequence'] });
        await another.save({ fields: ['sequence'] });


        return found;
    }


    async exist() {
        const result = await db.OverView.findAll({
            where: { is_deleted: false }
        })
        let Sequence = []

        result.forEach((data) => {
            Sequence.push(data.sequence)
        })
        return { result, Sequence }
    }
    async existSequence() {
        const result = await db.OverView.findAll({
            where: { is_deleted: false },
            order: [['sequence', 'ASC'],],
        })

        return result;
    }

    async delete(id) {
        if (!id)
            throw ApiError.badRequest('id is required');

        let found = await db.OverView.findByPk(id);
        if (!found)
            throw ApiError.notFound();


        found.is_deleted = true;
        await found.save({ fields: ['is_deleted'] });



        return found;
    }

}

module.exports = new OverviewService();