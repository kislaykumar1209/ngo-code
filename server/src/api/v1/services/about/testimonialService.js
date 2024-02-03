const db = require('../../models');
const ApiError = require('../../middleware/apiError');

require('dotenv').config();

class TestimonialService {



    async create(testimonial) {
        console.log(testimonial)

        if (!testimonial.name)
            throw ApiError.badRequest(' Name is Required')
        if (!testimonial.comment)
            throw ApiError.badRequest(' comment is Required')
        if (!testimonial.designation)
            throw ApiError.badRequest(' Designation is Required')




        const createdTestimonial = await db.Testimonial.create({
            name: testimonial.name,
            designation: testimonial.designation,
            comment: testimonial.comment,
        });
        if (!createdTestimonial._options.isNewRecord) {
            throw ApiError.internal();
        }
        return createdTestimonial;

    }

    async update(testimonial, id) {
        if (!testimonial)
            throw ApiError.badRequest(' Testimonial is Required')
        if (!id)
            throw ApiError.badRequest(' Id is Required')

        let found = await db.Testimonial.findByPk(id);
        if (!found)
            throw ApiError.notFound();


        found.name = testimonial.name,
            found.designation = testimonial.designation,
            found.comment = testimonial.comment,
            await found.save({ fields: ['name', 'designation', 'comment'] });


        return found;
    }

    async exist() {



        const result = await db.Testimonial.findAll({
            where: { is_deleted: false }
        })

        return result;
    }

    async delete(id) {
        if (!id)
            throw ApiError.badRequest('id is required');

        let found = await db.Testimonial.findByPk(id);
        if (!found)
            throw ApiError.notFound();


        found.is_deleted = true;
        await found.save({ fields: ['is_deleted'] });



        return found;


    }

}

module.exports = new TestimonialService();