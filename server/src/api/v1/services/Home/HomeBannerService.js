const db = require('../../models');
const ApiError = require('../../middleware/apiError');

require('dotenv').config();

class HomeBannerService {


    async create(homeBanner, image) {
        if (!homeBanner.section)
            throw ApiError.badRequest('Section is required');
        if (!homeBanner.subsection)
            throw ApiError.badRequest('Subsection is required');
        if (!image)
            throw ApiError.badRequest('Image is required');

        // console.log(homeBanner)
        const length = await db.HomeBanner.count({
            where: {
                section: homeBanner.section,
                subsection: homeBanner.subsection,
            }
        })

        const createdHomeBanner = await db.HomeBanner.create({
            heading: homeBanner.heading ? homeBanner.heading : '',
            subheading: homeBanner.subheading ? homeBanner.subheading : '',
            section: homeBanner.section,
            subsection: homeBanner.subsection,
            link: homeBanner.link ? homeBanner.link : "/",
            button: homeBanner.button ? homeBanner.button : " ",
            image: image,
            sequence: length + 1
        });
        if (!createdHomeBanner._options.isNewRecord) {
            throw ApiError.internal();
        }
        return createdHomeBanner;

    }



    async all() {
        const result = await db.HomeBanner.findAll({
            where: {
                is_deleted: false
            }
        })

        if (!result)
            throw ApiError.notFound();

        return result;
    }

    async exist(body) {
        const result = await db.HomeBanner.findOne({
            where: {
                section: body.section,
                subsection: body.subsection,
                is_deleted: false
            }
        })


        return result;
    }
    async exists(body) {
        const result = await db.HomeBanner.findAll({
            where: {
                section: body.section,
                subsection: body.subsection,
                is_deleted: false
            }
        })
        let Sequence = []

        result.forEach((data) => {
            Sequence.push(data.sequence)
        })
        return { result, Sequence };
        // return result;


    }
    async existsSequence(body) {
        const result = await db.HomeBanner.findAll({
            where: {
                section: body.section,
                subsection: body.subsection,
                is_deleted: false
            },
            order: [['sequence', 'ASC'],],
        })

        return result


    }

    async update(homeBanner, image, id) {


        let found = await db.HomeBanner.findOne({
            where: {
                // section: homeBanner.section,
                // subsection: homeBanner.subsection,
                id: id,
                is_deleted: false
            }
        })
        if (homeBanner.point) {
            let another = await db.HomeBanner.findOne({
                where: {
                    sequence: homeBanner.point
                }
            });
            let value = found.sequence

            found.sequence = homeBanner.point
            another.sequence = value
            await another.save({ fields: ['sequence'] });
        }


        if (homeBanner.heading) { found.heading = homeBanner.heading }
        if (homeBanner.subheading) { found.subheading = homeBanner.subheading }
        if (homeBanner.section) { found.section = homeBanner.section }
        if (homeBanner.subsection) { found.subsection = homeBanner.subsection }
        if (homeBanner.link) { found.link = homeBanner.link }
        if (homeBanner.button) { found.button = homeBanner.button }
        if (image) { found.image = image }





        await found.save({ fields: ['heading', 'image', 'subheading', 'section', 'subsection', 'link', 'sequence'] });



        return found;
    }

    async delete(id) {


        let found = await db.HomeBanner.findByPk(id);
        if (!found)
            throw ApiError.notFound();


        found.is_deleted = true;
        await found.save({ fields: ['is_deleted'] });





        return found;
    }

}

module.exports = new HomeBannerService();