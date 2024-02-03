const db = require('../../models');
const ApiError = require('../../middleware/apiError');

require('dotenv').config();

class DonateService {



    async exist() {
        // console.log(section)
        const result = await db.Donate.findOne({
            where: {
                is_deleted: false,
            }
        })

        return result
    }

    async update(body, image1,image2) {
        if (!body)
            throw ApiError.badRequest('Detail is required');
        // console.log(body)

        let found = await this.exist()

        // let found = await db.Donate.findOne({
        //     where: {
        //         is_deleted: false,
        //     }
        // })
        // console.log(found)
        if (!found) {

            const createdDonateSection = await db.Donate.create({
                heading1: body.heading1 ? body.heading1 :  " ",
                heading2: body.heading2 ? body.heading2 : " " ,
                button: body.button ? body.button : " ",
                heading3: body.heading3 ? body.heading3 : " ",
                heading4: body.heading4 ? body.heading4 : "",
                image1:image1 ? image1:" ",
                heading5: body.heading5 ? body.heading5 : " ",
                image2:image2 ? image2:" ",
                heading6: body.heading6 ? body.heading6 : " ",
                heading7: body.heading7 ? body.heading7 : " ",
                heading8: body.heading8 ? body.heading8 : " ",
                heading9: body.heading9 ? body.heading9 : " ",
            });
            if (!createdDonateSection._options.isNewRecord) {
                throw ApiError.internal();
            }
            return createdDonateSection;


        }
        if (body.heading1) {
            found.heading1 = body.heading1
        }
        if (body.heading2) {
            found.heading2 = body.heading2
        }
        if (body.button) {
            found.button = body.button
        }
        if (body.heading3) {
            found.heading3 = body.heading3
        }
        if (body.heading4) {
            found.heading4 = body.heading4
        }
        if (image1) {
            found.image1 = image1
        }

        if (body.heading5) {
            found.heading5 = body.heading5
        }
        if (body.is_active) {
            found.is_active = body.is_active
        }
        if (image2) {
            found.image2 = image2
        }

        if (body.heading6) {
            found.heading6 = body.heading6
        }
        if (body.heading7) {
            found.heading7 = body.heading7
        }
        if (body.heading8) {
            found.heading8 = body.heading8
        }
        if (body.heading9) {
            found.heading9 = body.heading9
        }
       
        if (body.is_active) {
            found.is_active = body.is_active
        }
        

        await found.save({ fields: ['heading1', 'heading2', 'heading3','heading4' ,'heading5','heading6','heading7','heading8','heading9', 'is_active', 'button','image1','image2'] });


        // return found;
        const result = await db.Donate.findOne({
            where: {
                is_deleted: false,
            }
        })

        return result
    }






}

module.exports = new DonateService();