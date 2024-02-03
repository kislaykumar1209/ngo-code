const db = require('../../models');
const ApiError = require('../../middleware/apiError');
const Sequelize = require('sequelize');

require('dotenv').config();

class OurPurposeService {


    async create(overview, image, icon) {

        if (!overview.category)
            throw ApiError.badRequest(' category is Required')
        if (!overview.description)
            throw ApiError.badRequest(' Description is Required')

        if (!image)
            throw ApiError.badRequest(' Image is Required')
        if (!icon)
            throw ApiError.badRequest(' Icon is Required')

        const length = await db.OurPurpose.count()

        let purpose = overview.category
        purpose = purpose.split(" ").join("")
        const createdOverview = await db.OurPurpose.create({
            category: purpose,
            image: image,
            icon: icon,
            description: overview.description,
            sequence: length + 1
        });
        if (!createdOverview._options.isNewRecord) {
            throw ApiError.internal();
        }
        return createdOverview;

    }

    async update(overview, image, icon, id) {
        if (!overview)
            throw ApiError.badRequest('about is required');
        if (!id)
            throw ApiError.badRequest('id is required');


        let found = await db.OurPurpose.findByPk(id);
        if (overview.point) {

            let another = await db.OurPurpose.findOne({
                where: {
                    sequence: overview.point
                }
            });
            let value = found.sequence

            found.sequence = overview.point
            another.sequence = value
            await another.save({ fields: ['sequence'] });
        }

        if (image) { found.image = image }
        if (icon) { found.icon = icon }
        if (overview.category) {
            found.category = overview.category
        }
        if (overview.is_active) {
            found.is_active = overview.is_active
        }
        if (overview.description) {
            found.description = overview.description
        }
        await found.save({ fields: ['category', 'description', 'image', 'icon', 'is_active', 'sequence'] });


        return found;
    }

    async existTitle() {

        const result = await db.OurPurpose.findAll({
            where: { is_deleted: false, },

            attributes: [
                [Sequelize.fn('DISTINCT', Sequelize.col('category')), 'category'],
                // 'location'
            ]

        })
        // if (!result)
        //     throw ApiError.notFound();

        return result


    }

    async existActive() {

        const result = await db.OurPurpose.findAll({
            where: { is_deleted: false, },

        })
        let answer = []
        result.forEach((result) => {
            answer.push(result.is_active)
        })
        // if (!result)
        //     throw ApiError.notFound();

        return answer


    }
    async existImage() {

        const result = await db.OurPurpose.findAll({
            where: { is_deleted: false, },
            attributes: [
                [Sequelize.fn('DISTINCT', Sequelize.col('image')), 'images'],
                // 'location'
            ]

        })
        // if (!result)
        //     throw ApiError.notFound();

        return result


    }

    async exist() {
        const result = await db.OurPurpose.findAll({
            where: { is_deleted: false }
        })

        let Sequence = []

        result.forEach((data) => {
            Sequence.push(data.sequence)
        })
        return { result, Sequence }
        // return result
    }
    async existSequence() {
        const result = await db.OurPurpose.findAll({
            where: { is_deleted: false },
            order: [['sequence', 'ASC'],],
        })

        return result;
    }

    async existAll() {
        const result = await db.OurPurpose.findAll({
            where: { is_deleted: false }
        })
        if (!result)
            throw ApiError.notFound();

        return {
            image: result.image,
            category: result.category
        };
    }

    async delete(id) {
        if (!id)
            throw ApiError.badRequest('id is required');
        let found = await db.OurPurpose.findByPk(id);
        if (!found)
            throw ApiError.notFound();
        found.is_deleted = true;
        await found.save({ fields: ['is_deleted'] });
        return found;

    }

}

module.exports = new OurPurposeService();