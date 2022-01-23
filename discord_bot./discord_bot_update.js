const Discord=require('discord.js');
const fetch = require('node-fetch');
const Database = require('@replit/database'); // require is node


// *javascript review, project scope and guidlines provisioned by freecodecamp.com.  
// const { token } = require('./config.json');
// application id: 934867095395663902
// public key: beceb0c29f327383f06a25f3b805226c30372c90a15a68746004ab48ae160171

const sad_words = ['sad', 'angry','depressed','so-so',];
const happy_words = ['happy', 'ecstatic','ebullient','maniac',];
const starterEncouragements = ['cheer up', 'you will get through this'];


const db = new Database();
const client = new Discord.Client(); 

// database logic (set, push, del)
db.get('encouragements').then(encouragements => // .then => sets encouragements as a variable to parse in to db logic
         { if (!encouragements || encouragements.length < 1){
                db.set('encouragements', starterEncouragements)
}})




function prettify(){
        let multi = 30;
        let str = "X";
        return (str.repeat(multi));
}


function updateEncouragements(updatedEncourgement){
        var today = new Date();
        db.get('encouragements').then(encouragements => {
                db.set('encourgements', updatedEncourgement);
                console.log( `${today} Update Encouragements Called: \n
                ${prettify()}\n
                Fetched DB: ${encouragements} \n
                Updateded DB:  ${updatedEncourgement}`);
        });
}

function deleteEncouragement(index){
        var today = new Date();
        db.get('encouragements').then(encouragements => {
        if(encouragements.length > index){
                encouragements.splice(index, 1 );
                db.set('encouragements',encouragements)
                console.log( `${today} Update Encouragements Called: \n
                ${prettify()}\n
                Fetched DB: ${encouragements} \n
                Updateded DB:  ${encouragements}`);
        
        }})};

function getQuote(){
        return fetch('https://zenquotes.io/api/random').then(res=> {
                return res.json(); 
        })
        .then(data=>{
                return data[0]['q'] + ' -' +data[0]['a']
                });
}

// Start of DiscordBot api :: (msg.content) (msg.author.not) (msg.channel.send)

client.on('ready', () => `logged in as ${client.user.tag}`);
client.on('message', msg => {
        const date = new Date();
        if (msg.author.bot){ // exit function if author is bot 
                console.log('message from author bot');
                return
        }
        if (msg.content ==='help'){
                console.log('test post-response');
                msg.channel.send('del = delete db with new msg.. new = update db list = show available db');
        } // array, find .some(val then create function for logic  )
        if (sad_words.some(word => msg.content.includes(word))){ // loop thru array, and return true for matching vals 
                db.get('encouragements').then(encouragements => {
                const encouragement = encouragements[Math.floor(Math.random()*encouragements.length)];
                console.log('client needs to be encouraged'+ date);
                msg.reply(encouragement); 
                });
        // update the encouragements array / db ( string splicing )
        if (msg.content.startsWith('$new')){
                let encouragingMessage = msg.content.split('$new ')[1].toLowerCase; // string splicing 
                updateEncouragements(encouragingMessage);
                console.log('Client request db update' + date);
                msg.channel.send('updating db with new msg.. ');
        };
        if (msg.content.startsWith('$del')){
                let index = parseInt(msg.content.split('$del')[1]); // parseInt converts string to int 
                console.log(date + 'Client requested index: ' + index );
                deleteEncouragement(index).then(msg.channel.send('encouragement deleted: '))
        }
        if (msg.content.startsWith('$list')){
                db.get('encouragements').then(encouragements=>{
                msg.channel.send(encouragements);
                console.log('Client called list'+ date)
                })
        }
        };
})

client.login(process.env.TOKEN)



// using replit to store database query/entry
/* 
const Database = require('@replit/database'); // require is node
*/ 
/* The some() method tests whether at least one element in the array passes the
 test implemented by the provided function.  */
