const express = require('express');
const router = express.Router();
const path = require('path');

// replace app with router for obj nav
// the routing is established in index, no need to use full path names
// fetching al memebrs

const members = require('../Members') // api model (json wrapped as .js)
const idFilter = req => member => member.id === parseInt(req.params.id);

//GET
router.get('/', (req, res) => {
    res.json(members);
});

// fetch single member iD
router.get('/:id', (req, res) => {
    res.send(req.params.id);
})
// fetch single id from api (req transcodes req to str and needs to be parsed as int)
router.get('/api/members/:id', (req, res)=>{
    const found = members.some(member=> member.id === parseInt(req.params.id));  // .some iterates thru array and returns bool if element exists
    console.log(found)
    if(found){
        get_request= members.filter(member => member.id === parseInt(req.params.id));
        console.log('get request\n', get_request)

        res.json({
            msg: members.filter(member => member.id === parseInt(req.params.id))
        });
    }else{
        res.status(400).json({ msg: `could not find array ${req.params.id}`}) // sets status, and appends message.
    }
})

// create a member (POST)
router.post('/', (req, res) => {
    const newMember ={
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    };
    if(!newMember.name || !newMember.email){
        return res.status(400).json({msg: ' name and email required'})
    }
    else{
        members.push(newMember);
        res.json(members)
        res.send(req.body);
    }

});
module.exports = router;

// PUT REQUEST - (UDPATE DB) * first check if memebr is in db then add
router.put('/api/members/:id', (req, res)=> {
    const found = members.some(member => member.id === parseInt(req.params.id));  // .some iterates thru array and returns bool if element exists
    console.log(found);

    if (found) {
        const updMember = req.body;
        members.forEach(member => {
            if (member.id === parseInt(req.params.id)) {
                member.name = updMember.name ? updMember.name : member.name;
                member.email = updMember.email ? updMember.email : member.email;
            }
        });
    } else {
        res.status(400).json({msg: `could not find array ${req.params.id}`}) // sets status, and appends message.
    }
});


// PUT REQUEST - (UDPATE DB) * first check if memebr is in db then add
router.put('/api/members/:id', (req, res)=> {
    const found = members.some(member => member.id === parseInt(req.params.id));  // .some iterates thru array and returns bool if element exists
    console.log(found);

    if (found) {
        const updMember = req.body;
        members.forEach(member => {
            if (member.id === parseInt(req.params.id)) {
                member.name = updMember.name ? updMember.name : member.name;
                member.email = updMember.email ? updMember.email : member.email;
                res.json({
                    msg: 'database updated',
                    members: filter(member => member.id !== parseInt(req.params.id))
                })
            }
        });
    } else {
        res.status(400).json({msg: `could not find array ${req.params.id}`}) // sets status, and appends message.
    }
});



// Del REQUEST - (UDPATE DB) * first check if memebr is in db then add
router.delete('/api/members/:id', (req, res)=> {
    const found = members.some(member => member.id === parseInt(req.params.id));  // .some iterates thru array and returns bool if element exists
    console.log(found);

    if (found) {
        const updMember = req.body;
        members.forEach(member => {
            if (member.id === parseInt(req.params.id)) {
                res.json({
                    msg: 'Members Deleted',
                    members: filter(member => member.id !== parseInt(req.params.id)),

                });
                member.name = updMember.name ? updMember.name : member.name;
                member.email = updMember.email ? updMember.email : member.email;
            }
        });
    } else {
        res.status(400).json({msg: `could not find array ${req.params.id}`}) // sets status, and appends message.
    }
});
module.exports = router;


