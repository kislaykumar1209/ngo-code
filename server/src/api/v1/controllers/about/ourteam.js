
const ApiError = require('../../middleware/apiError');
const Response = require('../../middleware/response');
const OurTeamService = require('../../services/about/ourTeamService');

require('dotenv').config();

async function registerteam(req, res) {
    if (!req.file)
        return Response.error(res, ApiError.badRequest(' Image is Required'));
    const image = req.file.filename

    const { name, designation, description } = req.body

    const teamBody = { name, designation, description }

    if (!teamBody)
        return Response.error(res, ApiError.badRequest(' Team is Required'));


    try {
        const createTeam = await OurTeamService.create(teamBody, image);
        // const createTeam = await OurTeamService.create(teamBody);

        return Response.success(res, 'Team successfully created', createTeam);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


async function updateMember(req, res) {
    const id = req.params.id
    const memberBody = req.body
    const image = req.files[0]
    if (!id)
        return Response.error(res, ApiError.badRequest(' id is required'));

    try {
        const updated = await OurTeamService.update(memberBody, image, id);
        return Response.success(res, 'Team successfully updated', updated);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function getTeam(req, res) {

    try {
        const Team = await OurTeamService.exist();
        return Response.success(res, 'Team ', Team);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function deleteMember(req, res) {
    const id = req.params.id

    try {
        const member = await OurTeamService.delete(id);
        return Response.success(res, 'Member Deleted', member);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


module.exports = {
    registerteam,
    updateMember,
    getTeam,
    deleteMember
}