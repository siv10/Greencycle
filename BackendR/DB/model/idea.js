const mongoose = require('mongoose');
var url = 'mongodb+srv://sivan1:sivan1@cluster0.cmgpe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected successfully to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));


const ideaSchema = new mongoose.Schema(
    {
        title: String,
        content: String

    },
    { timestamps: true }
);



module.exports.Ideas = mongoose.model('Ideas', ideaSchema);
