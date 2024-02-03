const db = require('../../models');
const ApiError = require('../../middleware/apiError');

require('dotenv').config();

class GlobalSponserService {


    async create(content) {


        const createdContent = await db.GlobalSponser.create({
            description1: content.description1,
            description2: content.description2,
            description3: content.description3,
        });
        if (!createdContent._options.isNewRecord) {
            throw ApiError.internal();
        }
        return createdContent;

    }
    async createPoint(points) {

        const length = await db.GlobalSponserPoint.count()

        const createdPoint = await db.GlobalSponserPoint.create({
            point: points.point,
            sequence: length + 1
        });
        if (!createdPoint._options.isNewRecord) {
            throw ApiError.internal();
        }
        return createdPoint;

    }


    async exist() {



        const result = await db.GlobalSponser.findAll({
            where: { is_deleted: false }
        })

        return result;
    }
    async pointsExist() {

        const result = await db.GlobalSponserPoint.findAll({
            where: { is_deleted: false }
        })

        let Sequence = []

        result.forEach((data) => {
            Sequence.push(data.sequence)
        })
        return { result, Sequence };
    }
    async pointsExistSequence() {

        const result = await db.GlobalSponserPoint.findAll({
            where: { is_deleted: false },
            order: [['sequence', 'ASC'],],
        })

        return result
    }

    async update(headings, id) {
        if (!id)
            throw ApiError.badRequest('id is required');

        let found = await db.GlobalSponser.findByPk(id);
        if (!found)
            throw ApiError.notFound();



        found.heading1 = headings.heading1,
            found.heading2 = headings.heading2,
            found.heading3 = headings.heading3,
            await found.save({ fields: ['heading1', 'heading2', 'heading3'] });


        return found;
    }
    async updatePoint(input, id) {
        if (!id)
            throw ApiError.badRequest('id is required');

        let found = await db.GlobalSponserPoint.findByPk(id);
        if (!found)
            throw ApiError.notFound();




        let another = await db.GlobalSponserPoint.findOne({
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
    async deletePoint(id) {
        if (!id)
            throw ApiError.badRequest('id is required');

        let found = await db.GlobalSponserPoint.findByPk(id);
        if (!found)
            throw ApiError.notFound();


        found.is_deleted = true;
        await found.save({ fields: ['is_deleted'] });



        return found;
    }

}

module.exports = new GlobalSponserService();