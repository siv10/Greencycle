const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 }));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/users', require('./routes/users-routes'));
app.use('/ideas', require('./routes/ideas-routes'));


//=======================
var server = app.listen(5002, '127.0.0.1', function () {
    var host = server.address().address
    var port = server.address().port
    console.log("my app is listening at http://%s:%s", host, port)
});