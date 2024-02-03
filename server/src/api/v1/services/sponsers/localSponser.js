const db = require('../../models');
const ApiError = require('../../middleware/apiError');

require('dotenv').config();

class LocalSponserService {


    async create(body, image) {
        if (!body.description1)
            throw ApiError.badRequest(' Name is Required');
        if (!body.description2)
            throw ApiError.badRequest(' Description is Required');
        if (!body.url)
            throw ApiError.badRequest(' Url is Required');
        if (!image)
            throw ApiError.badRequest(' Image is Required');
        const length = await db.LocalSponser.count()


        const createdContent = await db.LocalSponser.create({
            description1: body.description1,
            description2: body.description2,
            url: body.url,
            image: image,
            sequence: length + 1
        });
        if (!createdContent._options.isNewRecord) {
            throw ApiError.internal();
        }
        return createdContent;

    }


    async exist() {
        const result = await db.LocalSponser.findAll({
            where: { is_deleted: false }
        })

        let Sequence = []

        result.forEach((data) => {
            Sequence.push(data.sequence)
        })
        return { result, Sequence };
    }
    async existSequence() {
        const result = await db.LocalSponser.findAll({
            where: { is_deleted: false },
            order: [['sequence', 'ASC'],],
        })

        return result;
    }
    async update(input, id) {
        if (!id)
            throw ApiError.badRequest('id is required');

        let found = await db.LocalSponser.findByPk(id);
        if (!found)
            throw ApiError.notFound();

        console.log(input, "dkchbdskjchbdskjlc")


        let another = await db.LocalSponser.findOne({
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

    async delete(id) {
        if (!id)
            throw ApiError.badRequest('id is required');

        let found = await db.LocalSponser.findByPk(id);
        if (!found)
            throw ApiError.notFound();

        found.is_deleted = true;
        await found.save({ fields: ['is_deleted'] });



        return found;
    }

}

module.exports = new LocalSponserService();