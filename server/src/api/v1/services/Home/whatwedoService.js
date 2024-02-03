const db = require('../../models');
const ApiError = require('../../middleware/apiError');

require('dotenv').config();

class OurTeamService {


    async create(body, image) {

        if (!body)
            throw ApiError.badRequest(' Description is Required')
        if (!image)
            throw ApiError.badRequest(' Image is Required')

        const createWhatweDo = await db.HomeWhatWeDo.create({
            description1: body.description1,
            description2: body.description2,
            button: body.button,
            image: image,
        });
        if (!createWhatweDo._options.isNewRecord) {
            throw ApiError.internal();
        }
        return createWhatweDo;

    }

    async update(body, image) {
        console.log(image)
        if (!body)
            throw ApiError.badRequest(' Member is Required')


        let found = await db.HomeWhatWeDo.findOne();
        if (!found) {
            const createWhatweDo = await db.HomeWhatWeDo.create({
                description2: body?.description2 ? body.description2 : "",
                description3: body.description3 ? body.description3 : "",
                button: body.button ? body.button : '',
                image: image,
            });
            if (!createWhatweDo._options.isNewRecord) {
                throw ApiError.internal();
            }
            return createWhatweDo;
        }

        if (body.description2) {
            found.description2 = body.description2
        }

        if (body.description3) {
            found.description3 = body.description3
        }
        if (body.button) {
            found.button = body.button
        }

        if (image) {
            found.image = image
        }



        await found.save({ fields: ['description2', 'description3', 'image', 'button'] });


        return found;
    }

    async exist() {


        const result = await db.HomeWhatWeDo.findOne(
            {
                where: { is_deleted: false }
            }
        )

        return result;
    }

    async delete(id) {
        if (!id)
            throw ApiError.badRequest(' Id is Required')

        let found = await db.HomeWhatWeDo.findByPk(id);
        if (!found)
            throw ApiError.notFound();



        found.is_deleted = true;
        await found.save({ fields: ['is_deleted'] });



        return found;



    }

}

module.exports = new OurTeamService();