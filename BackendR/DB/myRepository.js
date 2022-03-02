const allUsers = require('./model/user').Users;
const allIdeas = require('./model/idea').Ideas;

//users:
const getall = () => {
    return allUsers;
};
exports.getall = getall;
///////////////////////////////////
//ideas:
const getallideas = async () => {
    const x = await allIdeas.find({})
    return x;
};
exports.getallideas = getallideas;

const deleteIdea = async (title) => {
    const x = await allIdeas.deleteOne({ title: title })
    return true;
};
exports.deleteIdea = deleteIdea;

const updateIdea = async (idea) => {
    console.log("the idea is ", idea);
    const x = await allIdeas.updateOne({ title: idea.title }, { $set: { content: idea.content } })
    return true;
};
exports.updateIdea = updateIdea;

///////////////////////////////////
const findUserByname = async (username) => {
    console.log('hi');
    const x = await allUsers.findOne({ name: username })

    return x;
}
exports.findUserByname = findUserByname;

const addUser = async (newuser) => {
    const newUser = new allUsers(newuser);
    const x = await newUser.save();
    console.log('added new user =] ');
    return true;
}
exports.addUser = addUser;

//ideas:
const addIdea = async (newidea) => {
    const newIdea = new allIdeas(newidea);
    const x = await newIdea.save();
    console.log('added new idea ');
    return true;
}
exports.addIdea = addIdea;

