const db = require('../../models');
const ApiError = require('../../middleware/apiError');

require('dotenv').config();

class FeaturedResourceService {


    async create(resource, document) {

        // if (!documents[0].image)
        //     throw ApiError.badRequest('Image is required');

        if (!document)
            throw ApiError.badRequest('Image is required');
        if (!resource.heading)
            throw ApiError.badRequest('Heading is required');

        if (!resource.description)
            throw ApiError.badRequest('Description is required');





        const createdResource = await db.FeaturedResource.create({

            // document: document.filename,
            document: document,
            heading: resource.heading,
            description: resource.description,
            //     // fileType: resource.fileType,
            //     // lastUpdated: resource.lastUpdated,
            //     // pages: resource.pages,
        });
        if (!createdResource._options.isNewRecord) {
            throw ApiError.internal();
        }
        return createdResource;

    }


    async exist() {

        const result = await db.FeaturedResource.findAll({
            where: { is_deleted: false }
        })

        return result;
    }

    async update(resourceBody, document, id) {
        if (!resourceBody)
            throw ApiError.badRequest('ResourceBody  is required');
        if (!id)
            throw ApiError.badRequest('id is required');

        let found = await db.FeaturedResource.findByPk(id);
        if (!found)
            throw ApiError.notFound();


        // console.log(image)



        found.document = document?.filename,
            found.heading = resourceBody.heading,
            found.description = resourceBody.description,
            await found.save({ fields: ['document', 'heading', 'description'] });


        return found;
    }

    async delete(id) {
        if (!id)
            throw ApiError.badRequest('id is required');

        let found = await db.FeaturedResource.findByPk(id);
        if (!found)
            throw ApiError.notFound();


        found.is_deleted = true;
        await found.save({ fields: ['is_deleted'] });



        return found;


    }

}

module.exports = new FeaturedResourceService();