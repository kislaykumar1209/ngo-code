const db = require('../../models');
const ApiError = require('../../middleware/apiError');
const moment = require("moment")

require('dotenv').config();

class PhotoGalleryService {


    async create(gallery, image) {

        if (!gallery.heading)
            throw ApiError.badRequest(' Heading is Required')
        if (!gallery.date)
            throw ApiError.badRequest(' Date is Required')

        if (!image)
            throw ApiError.badRequest(' Image is Required')

        const length = await db.PhotoGallery.count()

        // const today = moment(new Date()).format("D MMMM  Y")
        const createdGallery = await db.PhotoGallery.create({
            image: image,
            heading: gallery.heading,
            date: moment(gallery.date).format('D MMMM  Y'),
            sequence: length + 1
        });
        if (!createdGallery._options.isNewRecord) {
            throw ApiError.internal();
        }
        return createdGallery;

    }

    async update(body, id) {

        if (!id)
            throw ApiError.badRequest('id is required');

        let found = await db.PhotoGallery.findByPk(id);

        let another = await db.PhotoGallery.findOne({
            where: {
                sequence: body.point
            }
        });
        let value = found.sequence

        found.sequence = body.point
        another.sequence = value


        await found.save({ fields: ['sequence'] });
        await another.save({ fields: ['sequence'] });


        return found;
    }

    async exist() {
        const final = []
        const result = await db.PhotoGallery.findAll({
            where: { is_deleted: false }
        })
        for (const gallery in result) {
            const ans = await db.GalleryImage.count({

                distinct: true,
                where: {
                    is_deleted: false,
                    GID: result[gallery].id
                }

            });
            const obj = {}
            obj['data'] = result[gallery]
            obj['noOfPhotos'] = ans
            final.push(obj)

        }
        let Sequence = []

        result.forEach((data) => {
            Sequence.push(data.sequence)
        })
        return { final, Sequence }
    }
    async existSequence() {
        const final = []
        const result = await db.PhotoGallery.findAll({
            where: { is_deleted: false },
            order: [['sequence', 'ASC'],],
        })
        for (const gallery in result) {
            const ans = await db.GalleryImage.count({

                distinct: true,
                where: {
                    is_deleted: false,
                    GID: result[gallery].id
                }

            });
            const obj = {}
            obj['data'] = result[gallery]
            obj['noOfPhotos'] = ans
            final.push(obj)

        }
        return final
    }

    async delete(id) {
        if (!id)
            throw ApiError.badRequest('id is required');
        let found = await db.PhotoGallery.findByPk(id);
        if (!found)
            throw ApiError.notFound();
        found.is_deleted = true;
        await found.save({ fields: ['is_deleted'] });
        return found;

    }

}

module.exports = new PhotoGalleryService();