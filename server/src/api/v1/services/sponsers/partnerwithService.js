const db = require('../../models');
const ApiError = require('../../middleware/apiError');

require('dotenv').config();

class PartnerWithService {


    async create(content) {
        if (!content)
            return Response.error(res, ApiError.badRequest(' Content is Required'));


        const createdContent = await db.PartnerWithComment.create({
            description1: content.description1,
            description2: content.description2,
        });
        if (!createdContent._options.isNewRecord) {
            throw ApiError.internal();
        }
        return createdContent;

    }
    async createPoint1(points) {
        if (!points)
            return Response.error(res, ApiError.badRequest(' Content is Required'));

        const length = await db.PartnerWithPoint1.count()

        const createdPoint = await db.PartnerWithPoint1.create({
            oppourtunity: points.oppourtunity,
            sequence: length + 1
        });
        if (!createdPoint._options.isNewRecord) {
            throw ApiError.internal();
        }
        return createdPoint;

    }
    async createPoint2(points) {
        if (!points)
            return Response.error(res, ApiError.badRequest(' Content is Required'));


        const length = await db.PartnerWithPoint2.count()

        const createdPoint = await db.PartnerWithPoint2.create({
            benefit: points.benefit,
            sequence: length + 1
        });
        if (!createdPoint._options.isNewRecord) {
            throw ApiError.internal();
        }
        return createdPoint;

    }

    async updatePartnerWithContent(content, id) {
        if (!id)
            throw ApiError.badRequest('id is required');

        let found = await db.PartnerWithComment.findByPk(id);
        if (!found)
            throw ApiError.notFound();



        found.description1 = content.description1,
            found.description2 = content.description2,
            await found.save({ fields: ['description1', 'description2'] });


        return found;


    }

    async updatePartnerWithPoint1(input, id) {
        if (!id)
            throw ApiError.badRequest('id is required');

        let found = await db.PartnerWithPoint1.findByPk(id);
        if (!found)
            throw ApiError.notFound();



        let another = await db.PartnerWithPoint1.findOne({
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

    async updatePartnerWithPoint2(input, id) {
        if (!id)
            throw ApiError.badRequest('id is required');

        let found = await db.PartnerWithPoint2.findByPk(id);
        if (!found)
            throw ApiError.notFound();




        let another = await db.PartnerWithPoint2.findOne({
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



        const result = await db.PartnerWithComment.findAll({
            where: { is_deleted: false }
        })

        return result;
    }
    async pointsExist1() {


        const result = await db.PartnerWithPoint1.findAll({
            where: { is_deleted: false }
        })
        let Sequence = []

        result.forEach((data) => {
            Sequence.push(data.sequence)
        })
        return { result, Sequence };
    }
    async pointsExist1Sequence() {


        const result = await db.PartnerWithPoint1.findAll({
            where: { is_deleted: false },
            order: [['sequence', 'ASC'],],
        })

        return result
    }
    async pointsExist2() {


        const result = await db.PartnerWithPoint2.findAll({
            where: { is_deleted: false }
        })

        let Sequence = []

        result.forEach((data) => {
            Sequence.push(data.sequence)
        })
        return { result, Sequence };
    }
    async pointsExist2Sequence() {


        const result = await db.PartnerWithPoint2.findAll({
            where: { is_deleted: false },
            order: [['sequence', 'ASC'],],
        })

        return result
    }

    async delete(id) {
        if (!id)
            throw ApiError.badRequest('id is required');

        let found = await db.PartnerWithComment.findByPk(id);
        if (!found)
            throw ApiError.notFound();

        found.is_deleted = true;
        await found.save({ fields: ['is_deleted'] });



        return found;
    }
    async deletePoint1(id) {
        if (!id)
            throw ApiError.badRequest('id is required');


        let found = await db.PartnerWithPoint1.findByPk(id);
        if (!found)
            throw ApiError.notFound();
        found.is_deleted = true;
        await found.save({ fields: ['is_deleted'] });



        return found;

    }
    async deletePoint2(id) {
        if (!id)
            throw ApiError.badRequest('id is required');

        let found = await db.PartnerWithPoint2.findByPk(id);
        if (!found)
            throw ApiError.notFound();
        found.is_deleted = true;
        await found.save({ fields: ['is_deleted'] });



        return found;
    }

}

module.exports = new PartnerWithService();