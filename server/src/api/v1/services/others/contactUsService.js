const db = require('../../models');
const express = require("express");
const ApiError = require('../../middleware/apiError');
const mailSender = express();
const nodemailer = require("nodemailer");

require('dotenv').config();

class ContactUsService {


    async create(contactBody) {
        if (!contactBody.name)
            throw ApiError.badRequest('Name is required');
        if (!contactBody.email)
            throw ApiError.badRequest('Email is required');
        if (!contactBody.subject)
            throw ApiError.badRequest('Subject is required');

        let testAccount = await nodemailer.createTestAccount();

        // connect with the smtp
        let transporter = await nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            auth: {
                user: "mailnoreply.acmp@gmail.com",
                pass: "xpbistrzlsnsmigt",
            },
        });

        let info = await transporter.sendMail({
            from: "mailnoreply.acmp@gmail.com", // sender address
            to: "info@paraippanylionsclub.org", // list of receivers
            // to: "akashrajput178172pay@gmail.com", // list of receivers
            subject: "New Contact received from Parsipanny Lions Club website.", // Subject line
            text: "A new message has been received from the Parsipanny Lions Club website. Details are as given below : ", // plain text body
            html: `<b>A new message has been received from the Parsipanny Lions Club website. Details are as given below : </b>
              <p>Name: ${contactBody.name}</p>
              <p>Email: ${contactBody.email}</p>
              <p>Message: ${contactBody.message}</p>
              `, // html body
        });


        if (info.messageId) {
            const createdContact = await db.ContactUs.create({
                name: contactBody.name,
                email: contactBody.email,
                subject: contactBody.subject,
            });
            if (!createdContact._options.isNewRecord) {
                throw ApiError.internal();
            }
            return createdContact;
        }



    }



    async exist() {
        const result = await db.ContactUs.findAll()

        return result;
    }


}

module.exports = new ContactUsService();