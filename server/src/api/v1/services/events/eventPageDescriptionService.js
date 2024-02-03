const db = require('../../models');
const ApiError = require('../../middleware/apiError');

require('dotenv').config();

class EventPageDescriptionService {



    async update(body, image1, image2, image4, image5, Images1, Images2, id) {
        if (!body)
            throw ApiError.badRequest('Description is required');


        if (!id)
            throw ApiError.badRequest('id is required');

        let found = await db.EventPageDescription.findOne({
            where: {
                is_deleted: false,
                EID: id
            }
        });
        if (!found) {

            const createdEventDescription = await db.EventPageDescription.create({
                EID: id,
                image1: image1 ? image1 : "",
                image2: image2 ? image2 : "",
                video: body.link ? body.link : "",
                image3: image4 ? image4 : "",
                image4: image5 ? image5 : "",
                Images1: Images1 ? Images1 : "",
                Images2: Images2 ? Images2 : "",
                heading: body.heading ? body.heading : "",
                heading2: body.heading2 ? body.heading2 : "",
                description1: body.description1 ? body.description1 : "",
                description2: body.description2 ? body.description2 : "",
                description3: body.description3 ? body.description3 : "",
                description4: body.description4 ? body.description4 : "",
                heading3: body.heading3 ? body.heading3 : "",
                description5: body.description5 ? body.description5 : "",
                description6: body.description6 ? body.description6 : '',
                heading4: body.heading4 ? body.heading4 : '',
                description7: body.description7 ? body.description7 : "",
                description8: body.description8 ? body.description8 : "",
                description9: body.description9 ? body.description9 : "",
                description10: body.description10 ? body.description10 : "",
                description12: body.description12 ? body.description12 : "",
                registrationLink: body.registrationLink ? body.registrationLink : "",
                registrationButton: body.registrationButton ? body.registrationButton : "",
                Headings3: body.Heading3 ? body.Heading3 : "",
                Headings4: body.Heading4 ? body.Heading4 : "",
                Headings5: body.Heading5 ? body.Heading5 : "",
                Headings6: body.Heading6 ? body.Heading6 : "",
                Headings7: body.Heading7 ? body.Heading7 : "",
                Headings8: body.Heading8 ? body.Heading8 : "",
                Headings9: body.Heading9 ? body.Heading9 : "",
                bannerHeading: body.bannerHeading ? body.bannerHeading : "",
                bannerSubHeading: body.bannerSubHeading ? body.bannerSubHeading : "",
            });
            if (!createdEventDescription._options.isNewRecord) {
                throw ApiError.internal();
            }
            return createdEventDescription;

        }

        if (image1) {
            found.image1 = image1
        }
        if (image2) {
            found.image2 = image2
        }
        if (body.link) {
            found.video = body.link
        }
        if (image4) {
            found.image3 = image4
        }
        if (image5) {
            found.image4 = image5
        }
        if (Images1) {
            found.Images1 = Images1
        }
        if (Images2) {
            found.Images2 = Images2
        }
        if (body.heading) found.heading = body.heading
        if (body.is_active) found.is_active = body.is_active
        if (body.heading2) found.heading2 = body.heading2
        if (body.description1) found.description1 = body.description1
        if (body.description2) found.description2 = body.description2
        if (body.description3) found.description3 = body.description3
        if (body.description4) found.description4 = body.description4
        if (body.heading3) found.heading3 = body.heading3
        if (body.description5) found.description5 = body.description5
        if (body.description6) found.description6 = body.description6
        if (body.heading4) found.heading4 = body.heading4
        if (body.description7) found.description7 = body.description7
        if (body.description8) found.description8 = body.description8
        if (body.description9) found.description9 = body.description9
        if (body.description10) found.description10 = body.description10
        if (body.description12) found.description12 = body.description12
        if (body.registrationLink) found.registrationLink = body.registrationLink
        if (body.registrationButton) found.registrationButton = body.registrationButton
        if (body.Heading3) found.Headings3 = body.Heading3
        if (body.Heading4) found.Headings4 = body.Heading4
        if (body.Heading5) found.Headings5 = body.Heading5
        if (body.Heading6) found.Headings6 = body.Heading6
        if (body.Heading7) found.Headings7 = body.Heading7
        if (body.Heading8) found.Headings8 = body.Heading8
        if (body.Heading9) found.Headings9 = body.Heading9
        if (body.bannerHeading) found.bannerHeading = body.bannerHeading
        if (body.bannerSubHeading) found.bannerSubHeading = body.bannerSubHeading
        await found.save({ fields: ['image1', 'image2', 'image3', 'video', , 'bannerSubHeading', 'bannerHeading', 'image4', 'Images2', 'description12', 'registrationLink', 'registrationButton', 'Images1', 'heading', 'heading2', 'heading3', 'heading4', 'description1', 'description2', 'description3', 'description4', 'description5', 'description6', 'description7', 'description8', 'description9', 'description10', 'is_active', 'Headings3', 'Headings4', 'Headings5', 'Headings6', 'Headings7', 'Headings8', 'Headings9'] });



        return found;
    }

    async exist(id) {
        const result = await db.EventPageDescription.findOne({ where: { is_deleted: false, EID: id } })

        return result;
    }



}

module.exports = new EventPageDescriptionService();