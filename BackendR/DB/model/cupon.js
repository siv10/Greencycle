const mongoose = require('mongoose');
var url = 'mongodb+srv://sivan1:sivan1@cluster0.cmgpe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected successfully to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));


const cuponSchema = new mongoose.Schema(
    {
        code: String,
        value: String,
        deadline: Date

    },
    { timestamps: true }
);



module.exports.Cupon = mongoose.model('Cupon', cuponSchema);
