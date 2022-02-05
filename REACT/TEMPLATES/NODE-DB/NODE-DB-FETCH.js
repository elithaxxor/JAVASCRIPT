
const Discord=require('discord.js');
const fetch = require('node-fetch');
const Database = require('@replit/database'); // require is node

const db = new Database();
const client = new Discord.Client(); 

// database logic (set, push, del)
db.get('encouragements').then(encouragements => // .then => sets encouragements as a variable to parse in to db logic
         { if (!encouragements || encouragements.length < 1){
                db.set('encouragements', starterEncouragements);
}})

// database response (verify db exists, if it does not- set it to an existing db)
db.get('responding').then(response => {
        console.log('Database is currently set to: ' + response);
        if(response == null ){ //confirm this is first time program is null, and nothing is in the data base
                db.set('responding', true);
                console.log('Database is NOW currently set to: ' + response);
        } 
})
