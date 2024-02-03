const db = require('../../models');
const ApiError = require('../../middleware/apiError');

require('dotenv').config();

class ClubDetailService {


    async create(title, image) {
        if (!title)
            throw ApiError.badRequest('Title is required');
        // console.log(image)
        if (!image)
            throw ApiError.badRequest('Image is required');

        const createdClubDetail = await db.ClubDetail.create({
            title: title,
            image: image,
        });
        if (!createdClubDetail._options.isNewRecord) {
            throw ApiError.internal();
        }
        return createdClubDetail;

    }



    async exist() {
        const result = await db.ClubDetail.findOne({
            is_deleted: false
        })

        return result;
    }

    async update(title, image) {



        let found = await db.ClubDetail.findOne()

        if (!found) {
            const createdClubDetail = await this.create(title, image)

            return createdClubDetail;
        }
        if (title) {
            found.title = title
        }
        if (image) {
            found.image = image
        }

        found.title = title
        found.image = image
        await found.save({ fields: ['title', 'image'] });


        return found;
    }


}

module.exports = new ClubDetailService();