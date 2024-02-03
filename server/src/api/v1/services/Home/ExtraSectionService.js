const db = require('../../models');
const ApiError = require('../../middleware/apiError');

require('dotenv').config();

class ExtraService {


    async create(body, image) {
        // console.log("hi")
        if (!body)
            throw ApiError.badRequest(' Description is Required')
        if (!body.heading)
            throw ApiError.badRequest(' Heading is Required')
        if (!body.description2)
            throw ApiError.badRequest(' Description is Required')

        // if (!image)
        //     throw ApiError.badRequest(' Image is Required')


        const createWhatweDo = await db.HomeExtra.create({
            description2: body?.description2 ? body.description2 : "",
            description3: body?.description3 ? body.description3 : "",
            heading: body.heading,
            image: image,
        });
        if (!createWhatweDo._options.isNewRecord) {
            throw ApiError.internal();
        }
        return createWhatweDo;

    }

    async update(body, id, image) {
        // console.log(image)
        if (!body)
            throw ApiError.badRequest(' Description is Required')
        if (!id) throw ApiError.badRequest(' Id is Required')


        let found = await db.HomeExtra.findOne({
            where: {
                id: id
            }
        });
        if (!found)
            throw ApiError.badRequest('Not Found')
        // if (!found) {
        //     const createWhatweDo = await db.HomeExtra.create({
        //         description2: body?.description2 ? body.description2 : "",
        //         description3: body.description3 ? body.description3 : "",
        //         button: body.button ? body.button : '',
        //         image: image,
        //     });
        //     if (!createWhatweDo._options.isNewRecord) {
        //         throw ApiError.internal();
        //     }
        //     return createWhatweDo;
        // }

        if (body.description2) {
            found.description2 = body.description2
        }

        if (body.description3) {
            found.description3 = body.description3
        }
        if (body.heading) {
            found.heading = body.heading
        }
        if (body.is_active) {
            found.is_active = body.is_active
        }

        if (image) {
            found.image = image
        }



        await found.save({ fields: ['description2', 'description3', 'image', 'heading', 'is_active'] });


        return found;
    }

    async exist() {


        const result = await db.HomeExtra.findAll(
            {
                where: { is_deleted: false }
            }
        )

        return result;
    }

    async delete(id) {
        if (!id)
            throw ApiError.badRequest(' Id is Required')

        let found = await db.HomeExtra.findByPk(id);
        if (!found)
            throw ApiError.notFound();



        found.is_deleted = true;
        await found.save({ fields: ['is_deleted'] });



        return found;



    }

}

module.exports = new ExtraService();