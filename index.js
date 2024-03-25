const path = require('path');
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const port = process.env.port;
const db_username = process.env.db_username;
const db_password = process.env.db_password;
const db = process.env.db;
const app = express();

const { indexRouter } = require('./routes/index.route');

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

function startApp() {
  mongoose
    .connect(
      `mongodb+srv://${db_username}:${db_password}@cluster0.fd0xjdv.mongodb.net/${db}?retryWrites=true&w=majority&appName=Cluster0`
    )
    .then(() => console.log('Connected to mongodb atlas!'))
    .catch((e) => {
      console.log('an error occured while trying to connect to database ' + e);
    })
    .then(() => {
      app.listen(port, () => {
        console.log('app listening on port ' + port);
      });
    })
    .catch((e) => {
      console.log('could not connect to server ' + e);
    });
}

startApp();

app.use('/', indexRouter);
