const allUsers = require('./model/user').Users;
// const allIdeas = require('./model/idea').Ideas;

//users:
const getall = () => {
    return allUsers;
};
exports.getall = getall;

//find if user is available
const findUserByname = async (username) => {
    console.log('hi');
    const x = await allUsers.findOne({ name: username })

    return x;
}
exports.findUserByname = findUserByname;
//adding user
const addUser = async (newuser) => {
    const newUser = new allUsers(newuser);
    const x = await newUser.save();
    console.log('added new user =] ');
    return true;
}
exports.addUser = addUser;
///////////////////////////////////
//ideas:
const getallideas = async () => {
    const x = await allUsers.find({ ideas: { $exists: true, $not: { $size: 0 } } }, { ideas: 1, _id: 0, name: 1 })
    // console.log(x[0].ideas, "1");
    let results = [];
    let k = 0;
    for (let i = 0; i < x.length; i++) {
        for (let j = 0; j < x[i].ideas.length; j++) {
            results[k] = { idea: x[i].ideas[j], name: x[i].name };
            k++;
        }

    }
    return results;
};

exports.getallideas = getallideas;

//delete idea
const deleteIdea = async (title, name) => {
    console.log(title, name);
    const x = await allUsers.updateOne({ name: name }, { $pull: { ideas: { title: title } } })
    return true;
};
exports.deleteIdea = deleteIdea;

//edit idea
const updateIdea = async (idea, title, name) => {
    console.log("the idea is ", idea, name);
    const x = await allUsers.updateOne({ name: name, ideas: { $elemMatch: { title: idea.title } } }, { $set: { "ideas.$.content": idea.content } })
    return true;
};
exports.updateIdea = updateIdea;

//join idea
const joinIdea = async (title, name, join) => {
    console.log(title, name, join);
    const x = await allUsers.updateOne({ name: name, ideas: { $elemMatch: { title: title } } }, { $set: { "ideas.$.join": join } })
    return true;
};
exports.joinIdea = joinIdea;

//ideas:
const addIdea = async (name, newidea) => {
    const newIdea = await allUsers.updateOne({ name: name }, { $push: { ideas: newidea } });
    console.log('added new idea ');
    return true;
}

exports.addIdea = addIdea;

const updateAmount = async (amount, name) => {
    console.log("the amount is ", amount);
    const x = await allUsers.updateOne({ name: name }, { $set: { amount: amount } })
    return true;
};
exports.updateAmount = updateAmount;