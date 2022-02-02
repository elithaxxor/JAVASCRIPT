const path = require('path');
const res = require('express/lib/response');
const moment = require('moment') // formatted current date-time
const logger = require('./tools/logger')
const express = require("express");
const members = require('./Members') // sample db
//import { engine } from 'express-handlebars';
//const exphbs = require('express-handlebars');

const { engine } = require('express-handlebars');


const app = express();

// Handlebars Middleware test
app.engine('handlebars', engine({ extname: '.hbs', defaultLayout: "main"}));
app.set('view engine', 'handlebars');
app.set("views", "./views");

// // Handlebars Middleware
// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');
//
//


//$ npm install express-handlebars
// MIDDLEWARE (NECSSARY FOR HANDLEBARS IN VIEW)
app.engine('handlebars',  engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


// BODY-PARSER ( to send data)
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //handles b64 data


// HOMEPAGE ROUTE
app.get('/', (req, res) =>
    res.render('index', {
        title: 'Member App',
        members
    })
);

// STATIC-FOLDER
app.use(express.static(path.join(__dirname, '/public')));

// ROUTES
app.use('/api/', require('./api/members'));

// HELPERS ///
app.use(logger)

// RunTime //
const PORT = process.env.PORT || 3030; // check the default enviroment variale- if not availble, it will use 3031
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

