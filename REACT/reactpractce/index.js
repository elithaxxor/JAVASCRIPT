/*
npm i node@lts

  (npm install -g nodemon (to keep from having to restart server)
  node index  (to runs server)
npm init --y
npm install --save express
 (installs express dependacy for node)
  npm init -y  creats packages.json
  sudo npm install -D nodemon
  npm install moment
   npm install uuid      -- random id
    npm install express-handlebars -- for views layout
 npm install express-handlebars


  */

const { path } = require('express/lib/application');
const res = require('express/lib/response');
const PORT = process.env.PORT || 3031; // check the default enviroment variale- if not availble, it will use 3031
const moment = require('moment') // formatted current date-time
const logger_ii = require('logger_ii')

const app = express();



/// INDEX ROUTING ///
/// INDEX ROUTING ///
//sets up public as static folder
app.use(express.static(path.join(__dirname, 'public'))); // static public folder
app.get('/', (req, resp) => {
  res.send('<h1> hello world <h2> ');
  res.sendFile(path.join(__dirname, 'public', 'index.html')) // fetch file. public = folder,
});

app.listen(PORT, ()=> console.log(`initated server on ${PORT}`));

const logger = (req, res, next) =>{
  console.log(
    `${req.protocol}://${req.get('host')} ${req.originalUrl} ${moment().format()}`
  );
  console.log('server log')
  next();
};
app.use(logger);
app.use(logger_ii); // logger on other file


// fetching al memebrs
app.get('/api/members', (req, res) => {
  res.json(members);
});

// fetch single member iD
app.get('/api/members/:id', (req, res) => {
  res.send(req.params.id);
})
// fetch single id from api (req transcodes req to str and needs to be parsed as int)
app.get('/api/members/:id', (req, res)=>{
  const found = members.some(member=> member.id === parseInt(req.params.id));  // .some iterates thru array and returns bool if element exists
  console.log(found)
  if(found){
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  }else{
    res.status(400).json({ msg: `could not find array ${req.params.id}`}) // sets status, and appends message.
  }
})


// current file __dirname. __filename __extname __
// accessing path name and dir and file extension
const dir_path = require('path');
const dir_name = path.dirname(__filename);
const file_name = path.extname(__filename);
const file_ext = path.extname(__filename);
console.log(dir_name, __filename)

// create path object:: ***
const path_dict = path.parse(__filename);
console.log(path_dict);
console.log(path_dict.base)

// concat path
new_path = path.join(__dirname, '/test')
console.log(new_path)

// create new file (use fs obj)
const fs = require('fs');

fs.mkdir(path.join(__dirname, '/test'), {}, err=> {
  if (err) throw err;
  console.log('Folder Created')
})

// writefile-- create and write ot file
fs.writeFile(
  path.join(__dirname, '/test', 'hello.txt'),
    'hello world!',
      err => {
        if (err) throw err;
        console.log('File written to...');
      });


// to function object in person.js
const person = require('./person');
console.log(person)
console.log(person)

// access a class method personii
const person_ii = require('./person_ii');
const person_obj = new Person('John Doe', 30);
console.log(person_ii)
person_obj.greeting()




/// API ROUTING ///
const express = require('express');
const router = express.Router();

// body parser ( to send data)
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //handles b64 data

app.use('/api/', require('./api/members'));


