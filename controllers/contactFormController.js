const ContactForm = require('../models/contactFormModel');

exports.getAllContacts = async(req,res,next) =>{
    const contacts = await ContactForm.find();
    res.status(200).json({
        data:{
            status: 'success',
            contacts
            
        }
    })
};
exports.createContact = async(req,res,next) =>{
    const contact = await ContactForm.find({email: req.body.email});
    req.user = contact[0];
    if(contact){
        await ContactForm.findByIdAndUpdate(req.user.id,req.body,{
            new: true,
            runValidators: true});
    }else{
        await ContactForm.create(contact.id,req.body);
    }
    res.status(201).json({
        data:{
            status: 'success',
            message: 'Contact Form is stored successfully'
        }
    })
};