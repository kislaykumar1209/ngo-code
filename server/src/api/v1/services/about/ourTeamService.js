const db = require('../../models');
const ApiError = require('../../middleware/apiError');

require('dotenv').config();

class OurTeamService {


    async create(member, image) {
        // console.log(member)
        // console.log(image)

        if (!member.name)
            throw ApiError.badRequest(' Name is Required')
        if (!member.designation)
            throw ApiError.badRequest(' Designation is Required')
        if (!member.description)
            throw ApiError.badRequest(' Description is Required')
        if (!image)
            throw ApiError.badRequest(' Image is Required')
        // console.log(member.image.files)

        const createTeam = await db.OurTeam.create({
            name: member.name,
            description: member.description,
            designation: member.designation,
            image: image,
            // image: member.image.file.filename,
        });
        if (!createTeam._options.isNewRecord) {
            throw ApiError.internal();
        }
        return createTeam;

    }

    async update(member, image, id) {
        if (!member)
            throw ApiError.badRequest(' Member is Required')
        if (!id)
            throw ApiError.badRequest(' Id is Required')

        let found = await db.OurTeam.findByPk(id);
        if (!found)
            throw ApiError.notFound();



        found.name = member.name,
            found.description = member.description,
            found.designation = member.designation,
            found.image = image?.filename,

            await found.save({ fields: ['name', 'description', 'designation', 'image'] });


        return member;
    }

    async exist() {



        const result = await db.OurTeam.findAll(
            {
                where: { is_deleted: false }
            }
        )

        return result;
    }

    async delete(id) {
        if (!id)
            throw ApiError.badRequest(' Id is Required')

        let found = await db.OurTeam.findByPk(id);
        if (!found)
            throw ApiError.notFound();



        found.is_deleted = true;
        await found.save({ fields: ['is_deleted'] });



        return found;



    }

}

module.exports = new OurTeamService();