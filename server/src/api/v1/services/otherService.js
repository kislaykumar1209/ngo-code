const db = require('../models');
const ApiError = require('../middleware/apiError');

require('dotenv').config();

class OtherService {


    async create(document) {
        if (!document)
            throw ApiError.badRequest('document is required');

        const createdDoc = await db.MemberForm.create({

            document: document
        });
        if (!createdDoc._options.isNewRecord) {
            throw ApiError.internal();
        }

        return createdDoc;
    }


    async get() {

        const result = await db.MemberForm.findOne({
            order: [['createdAt', 'DESC']],
        });


        return result;
    }

    async createBanner(banner, image, document) {


        let found = await db.LionBanner.findOne({

            order: [['createdAt', 'DESC']],

        });
        if (!found) {
            const createdBanner = await db.LionBanner.create({
                heading: banner.heading ? banner.heading : "",
                image: image ? image : "",
                document: document ? document : "",
                subheading: banner.subheading ? banner.subheading : "",
            });
            if (!createdBanner._options.isNewRecord) {
                throw ApiError.internal();
            }
            return createdBanner;
        }
        if (image) {
            found.image = image
        }
        if (document) {
            found.document = document
        }
        if (banner.heading) {
            found.heading = banner.heading
        }
        if (banner.subheading) {
            found.subheading = banner.subheading
        }
        await found.save({ fields: ['image', 'document', 'heading', 'subheading'] })

        return found;
    }


    async existBanner() {
        const result = await db.LionBanner.findOne({
            order: [['createdAt', 'DESC']],
        })


        return result;
    }

    async deleteBanner(id) {
        if (!id)
            throw ApiError.badRequest('id is required');

        let found = await db.LionBanner.findByPk(id);
        if (!found)
            throw ApiError.notFound();



        found.is_deleted = true;
        await found.save({ fields: ['is_deleted'] });



        return found;
    }




}

module.exports = new OtherService();