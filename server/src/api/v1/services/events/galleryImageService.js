const db = require('../../models');
const ApiError = require('../../middleware/apiError');

require('dotenv').config();

class GalleryImageService {


    async create(body, gid, image) {

        if (!image)
            throw ApiError.badRequest(' Image is Required')
        if (!gid)
            throw ApiError.badRequest(' Gallery id is Required')


        let found = await db.PhotoGallery.findOne({
            where: { id: gid }
        })

        if (!found)
            throw ApiError.badRequest(' Create Gallery First')
        const createdImage = await db.GalleryImage.create({
            image: image.filename,
            GID: gid,
            heading: body.heading ? body.heading : ""
        });
        if (!createdImage._options.isNewRecord) {
            throw ApiError.internal();
        }
        return createdImage;

    }

    async update(image, id) {
        if (!image)
            throw ApiError.badRequest('Image is required');
        if (!id)
            throw ApiError.badRequest('id is required');
        // if (!gid.gid)
        // throw ApiError.badRequest('gallery id is required');


        let found = await db.PhotoGallery.findByPk(id);
        if (!found)
            throw ApiError.notFound();


        found.image = image?.filename
        await found.save({ fields: ['image'] });


        return found;
    }

    async exist() {
        const result = await db.GalleryImage.findAll({
            where: { is_deleted: false }
        })

        return result;
    }
    async exist(gid) {
        if (!gid) {
            throw ApiError.badRequest('gallery id is required');
        }
        const result = await db.GalleryImage.findAll({
            where: { is_deleted: false, GID: gid }
        })

        return result;
    }

    async delete(id) {
        if (!id)
            throw ApiError.badRequest('id is required');
        let found = await db.GalleryImage.findByPk(id);
        if (!found)
            throw ApiError.notFound();
        found.is_deleted = true;
        await found.save({ fields: ['is_deleted'] });
        return found;

    }

}

module.exports = new GalleryImageService();