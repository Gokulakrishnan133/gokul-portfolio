const path = require('path');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const contactFormRouter = require('./routes/contactFormRoutes')
const viewRouter = require('./routes/viewRoutes')

const app= express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json({ limit: '10kb' }));

//webpage
app.use('/', viewRouter);

//apis
app.use('/api/v1/contact-form', contactFormRouter);

module.exports=app;