const myRepository = require('../DB/myRepository');
const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

router.get("/allideas", async (req, res) => {
    res.send(await myRepository.getallideas());
});
//adding new idea
router.put("/", async (req, res) => {
    console.log("the req.body = ", req.body);
    let isAllOK = await myRepository.addIdea(req.body.name, req.body.idea);
    if (isAllOK === true) {
        res.send("added new idea");
    }
    else {
        res.send("unsuccessful adding new idea!!");
    }
});
//delete idea
router.delete("/delete/:title/:name", async (req, res) => {
    console.log("the req.body = ", req.params);
    let isAllOK = await myRepository.deleteIdea(req.params.title, req.params.name);
    if (isAllOK === true) {
        res.send("deleted  idea");
    }
    else {
        res.send("unsuccessful delete idea!!");
    }
});
//edit idea
router.put("/edit/:title/:name", async (req, res) => {
    console.log("the req.body = ", req.body);
    let isAllOK = await myRepository.updateIdea(req.body, req.params.title, req.params.name);
    if (isAllOK === true) {
        res.send("updated idea");
    }
    else {
        res.send("unsuccessful update!!");
    }
});

//join idea
router.put("/join/:title/:name", async (req, res) => {
    console.log(req.body);
    let isAllOK = await myRepository.joinIdea(req.params.title, req.params.name, req.body.joinNum);
    if (isAllOK === true) {
        res.send("joined idea");
    }
    else {
        res.send("unsuccessful joined!!");
    }
});



module.exports = router;
