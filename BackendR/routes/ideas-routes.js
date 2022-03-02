const myRepository = require('../DB/myRepository');
const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

router.get("/allideas", async (req, res) => {
    res.send(await myRepository.getallideas());
});


router.delete("/:title", async (req, res) => {
    console.log("the req.body = ", req.params);
    let isAllOK = await myRepository.deleteIdea(req.params.title);
    if (isAllOK === true) {
        res.send("deleted  idea");
    }
    else {
        res.send("unsuccessful delete idea!!");
    }
})
router.put("/:title", async (req, res) => {
    console.log("the req.body = ", req.params);
    let isAllOK = await myRepository.updateIdea(req.body);
    if (isAllOK === true) {
        res.send("updated idea");
    }
    else {
        res.send("unsuccessful update!!");
    }
})

router.post("/", async (req, res) => {
    console.log("the req.body = ", req.body);
    let isAllOK = await myRepository.addIdea(req.body);
    if (isAllOK === true) {
        res.send("added new idea");
    }
    else {
        res.send("unsuccessful adding new idea!!");
    }
});

module.exports = router;
