const mongoose = require('mongoose');
const dotenv = require('dotenv');  //dotenv to access the environment variable, importing the module here
// process.on('uncaughtException', err => {
//     console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
//     console.log(err.name, err.message);
//     process.exit(1);
// });

dotenv.config({ path: './config.env' }); //this will enable access to the config file
const app = require('./app');

const DB = `${process.env.DATABASE}`.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);   //accesing the database variable from config file and storing in db variable

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log('DB connection successful!'));  //connecting to cloud db

const port = process.env.PORT || 8000;  //defining the port 
const server = app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});   //creating a web server and listening on port 3000

process.on('unhandledRejection', err => {
    console.log('UNHANDLED REJECTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    server.close(() => {
      process.exit(1);
    });
});