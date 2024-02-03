const db = require('../../models');
const ApiError = require('../../middleware/apiError');

require('dotenv').config();

class TitleService {



    async exist(section) {
        const result = await db.Title.findOne({
            where: {
                section: section,
            }
        })

        return result;
    }
    async all() {
        const result = await db.Title.findAll()


        return result;
    }

    async update(titleBody, section) {
        if (!titleBody)
            throw ApiError.badRequest('Title is required');


        let found = await db.Title.findOne({
            where: {
                section: section,
            }
        })
        // console.log(found)
        if (!found) {

            const createdTitle = await db.Title.create({
                section: section,
                title1: titleBody.title1 ? titleBody.title1 : "",
                title2: titleBody.title2 ? titleBody.title2 : "",
                title3: titleBody.title3 ? titleBody.title3 : "",
                title4: titleBody.title4 ? titleBody.title4 : "",
                title5: titleBody.title5 ? titleBody.title5 : ""
            });
            if (!createdTitle._options.isNewRecord) {
                throw ApiError.internal();
            }
            return createdTitle;


        }
        if (titleBody.title1) {
            found.title1 = titleBody.title1
        }
        if (titleBody.title2) {
            found.title2 = titleBody.title2
        }
        if (titleBody.title3) {
            found.title3 = titleBody.title3
        }
        if (titleBody.title4) {
            found.title4 = titleBody.title4
        }
        if (titleBody.title5) {
            found.title5 = titleBody.title5
        }
        if (titleBody.is_active) {
            found.is_active = titleBody.is_active
        }
        if (titleBody.is_active2) {
            found.is_active2 = titleBody.is_active2
        }
        if (titleBody.is_active3) {
            found.is_active3 = titleBody.is_active3
        }
        if (titleBody.is_active4) {
            found.is_active4 = titleBody.is_active4
        }
        if (titleBody.is_active5) {
            found.is_active5 = titleBody.is_active5
        }
        await found.save({ fields: ['title1', 'title2', 'title3', 'title4', 'title5', , 'is_active', 'is_active2', "is_active3", 'is_active4', 'is_active5'] });


        // return found;
        const result = await db.Title.findOne({
            where: {
                section: section,
            }
        })

        return result
    }






}

module.exports = new TitleService();