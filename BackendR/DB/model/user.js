const mongoose = require('mongoose');
var url = 'mongodb+srv://sivan1:sivan1@cluster0.cmgpe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected successfully to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));


const userSchema = new mongoose.Schema(
    {
        name: String,
        password: String,
        email: String,
        role: String,
        amount: Number,
        ideas: {
            type: Array,
            default: []
        }

    },
    { timestamps: true }
);



module.exports.Users = mongoose.model('Users', userSchema);
