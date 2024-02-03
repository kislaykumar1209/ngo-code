const db = require('../../models');
const ApiError = require('../../middleware/apiError');
const moment = require("moment")

require('dotenv').config();

class EventService {


    async create(event, image, document) {

        if (!event.heading)
            throw ApiError.badRequest(' Heading is Required')
        if (!event.date)
            throw ApiError.badRequest(' Date is Required')
        if (!event.startingTime)
            throw ApiError.badRequest(' startingTime is Required')
        if (!event.endingTime)
            throw ApiError.badRequest(' endingTime is Required')
        if (!event.address)
            throw ApiError.badRequest(' address is Required')

        // if (!image)
        //     throw ApiError.badRequest(' Image is Required')

        const createdEvent = await db.Event.create({
            heading: event.heading,
            subheading: event.subheading,
            image: image,
            document: document,
            // date: event.date,
            startingTime: `${event.startingTime} ${event.startTime}`,
            endingTime: `${event.endingTime} ${event.endTime}`,
            address: event.address,
            date: moment(event.date).format('D MMMM  Y')
        });
        if (!createdEvent._options.isNewRecord) {
            throw ApiError.internal();
        }
        return {
            id: createdEvent.id,
            heading: createdEvent.heading,
            image: createdEvent.image,
            date: createdEvent.date,
            month: createdEvent.month,
            startingTIme: createdEvent.startingTime,
            endingTime: createdEvent.endingTime,
            address: createdEvent.address,
            pincode: createdEvent.pincode
        };

    }


    async exist() {
        const events = []
        const today = new Date().getTime()
        const result = await db.Event.findAll({
            where: { is_deleted: false },
            order: [['date', 'ASC'],],
            // order: [[`${new Date('date').getTime()}`, 'ASC'],],
        })

        result.forEach((ans, index) => {
            let date = `${ans.date} ${ans.startingTime}`
            date = new Date(date).getTime()
            if (today < date) {
                // console.log(index, ans.date)
                events.push(ans)
            }

            // else if (today === ans.date) {
            //     if (moment().format('LT') < ans.startingTime) {
            //         events.push(ans)
            //     }
            // }
        })
        events.sort((a, b) => {
            let da = new Date(`${a.date} ${a.startingTime}`).getTime()
            let db = new Date(`${b.date} ${b.startingTime}`).getTime()
            return da - db;
        });

        return events;
    }
    async update(body, image, document, id) {
        if (!body)
            throw ApiError.badRequest('Description is required');


        if (!id)
            throw ApiError.badRequest('id is required');

        let found = await db.Event.findOne({
            where: {
                is_deleted: false,
                id: id
            }
        });


        if (image) {
            found.image = image
        }
        if (document) {
            found.document = document
        }
        if (body.heading) {
            found.heading = body.heading
        }

        if (body.date) found.date = moment(body.date).format('D MMMM  Y')
        if (body.startingTime) found.startingTime = body.startingTime + " " + body.startTime
        if (body.endingTime) found.endingTime = body.endingTime + " " + body.endTime
        if (body.subheading) found.subheading = body.subheading
        if (body.address) found.address = body.address
        await found.save({ fields: ['image', 'document', 'heading', 'date', 'startingTime', 'endingTime', 'subheading', 'address', 'is_active'] });


        return found;
    }
    async delete(id) {
        if (!id)
            throw ApiError.badRequest('id is required');

        let found = await db.Event.findByPk(id);
        if (!found)
            throw ApiError.notFound();



        found.is_deleted = true;
        await found.save({ fields: ['is_deleted'] });



        return found;
    }

}

module.exports = new EventService();