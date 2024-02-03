const db = require('../../models');
const ApiError = require('../../middleware/apiError');

require('dotenv').config();

class PageDescriptionService {


    async create(pageDescription, image) {
        if (!pageDescription.section)
            throw ApiError.badRequest('Section is required');
        if (!pageDescription.subsection)
            throw ApiError.badRequest('Subsection is required');
        if (!image)
            throw ApiError.badRequest('IMage is required');



        const createdPageDescription = await db.PageDescription.create({
            section: pageDescription.section,
            subsection: pageDescription.subsection,
            description: pageDescription.description,
            image: image.filename
        });
        if (!createdPageDescription._options.isNewRecord) {
            throw ApiError.internal();
        }
        return createdPageDescription;

    }



    async exist() {
        const result = await db.PageDescription.findOne()

        return result;
    }
    async update(pageDescription, image) {
        let found = await db.PageDescription.findOne()

        found.section = pageDescription.section,
            found.subsection = pageDescription.subsection,
            found.description = pageDescription.description,
            found.image = image?.filename
        await found.save({ fields: ['section', 'subsection', 'description', 'image'] });


        return found;
    }


}

module.exports = new PageDescriptionService();