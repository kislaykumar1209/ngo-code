const db = require('../../models');
const ApiError = require('../../middleware/apiError');

require('dotenv').config();

class DreamandMissionService {


    async create(inputs) {

        // console.log(inputs)

        if (!inputs)
            throw ApiError.badRequest(' Dreams is Required')

        const created = await db.Mission.create({
            dreams: inputs.dreams,
            mission: inputs.mission,
        });
        if (!created._options.isNewRecord) {
            throw ApiError.internal();
        }
        return created;

    }
    async createImage(topic, image) {

        if (!image)
            throw ApiError.badRequest(' Image is Required')
        if (!topic.issue)
            throw ApiError.badRequest(' Cause  is Required')

        const createImage = await db.Image.create({
            image: image.filename,
            issue: topic.issue
        });
        if (!createImage._options.isNewRecord) {
            throw ApiError.internal();
        }
        return createImage;

    }
    async createPoint(points) {
        if (!points.point)
            throw ApiError.badRequest(' Point  is Required')

        const length = await db.DreamSectionPoint.count()

        const createPoint = await db.DreamSectionPoint.create({
            point: points.point,
            sequence: length + 1
        });
        if (!createPoint._options.isNewRecord) {
            throw ApiError.internal();
        }
        return createPoint;

    }

    async update(input) {
        if (!input)
            throw ApiError.badRequest(' Inputs is Required')

        let found = await db.Mission.findOne({
            where: {
                is_deleted: false
            }
        });

        // console.log(input)
        if (!found) {
            const created = await this.create(
                input
            );
            if (!created._options.isNewRecord) {
                throw ApiError.internal();
            }
            return created;
        }
        if (input.dreams) {
            found.dreams = input.dreams
        }
        if (input.mission) {
            found.mission = input.mission
        }

        await found.save({ fields: ['dreams', 'mission'] });


        return found;
    }
    async updateimage(topic, image, id) {
        if (!image)
            throw ApiError.badRequest(' Image is Required')
        if (!id)
            throw ApiError.badRequest(' Id is Required')

        let found = await db.Image.findByPk(id);
        if (!found)
            throw ApiError.notFound();



        found.image = image.filename,
            found.issue = topic.issue,

            await found.save({ fields: ['image'] });


        return found;
    }
    async updatepoint(input, id) {
        if (!id)
            throw ApiError.badRequest(' Id is Required')

        let found = await db.DreamSectionPoint.findByPk(id);
        if (!found)
            throw ApiError.notFound();
        let another = await db.DreamSectionPoint.findOne({
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
        const result = await db.Mission.findOne({
            where: { is_deleted: false }
        })

        return result;
    }

    async existImage() {

        const result = await db.Image.findAll({
            where: { is_deleted: false }
        })

        return result;
    }

    async existPoint() {
        const result = await db.DreamSectionPoint.findAll({
            where: { is_deleted: false },
        })
        let Sequence = []

        result.forEach((data) => {
            Sequence.push(data.sequence)
        })
        return { result, Sequence };
    }
    async existPointSequence() {
        const result = await db.DreamSectionPoint.findAll({
            where: { is_deleted: false },
            order: [['sequence', 'ASC'],],
        })
        return result;
    }

    async delete(id) {
        if (!id)
            throw ApiError.badRequest(' Id is Required')
        let found = await db.Mission.findByPk(id);
        if (!found)
            throw ApiError.notFound();

        found.is_deleted = true;
        await found.save({ fields: ['is_deleted'] });
        return found;
    }
    async deleteimage(id) {
        if (!id)
            throw ApiError.badRequest(' Id is Required')

        let found = await db.Image.findByPk(id);
        if (!found)
            throw ApiError.notFound();


        found.is_deleted = true;
        await found.save({ fields: ['is_deleted'] });
        return found;
    }
    async deletepoint(id) {
        if (!id)
            throw ApiError.badRequest(' Id is Required')

        let found = await db.DreamSectionPoint.findByPk(id);
        if (!found)
            throw ApiError.notFound();


        found.is_deleted = true;
        await found.save({ fields: ['is_deleted'] });
        return found;
    }

}

module.exports = new DreamandMissionService();