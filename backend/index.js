var bodyParser = require('body-parser')
const cors = require('cors');
const express = require('express');
var app = express();

const auth = require('./middleware/auth');
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header("Access-Control-Allow-Methods", 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    next();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

const authorCtrl = require('./controllers/authors');
app.use('/authors', authorCtrl);

const authorBookCtrl = require('./controllers/author_books');
app.use('/authorBooks', authorBookCtrl);

const subjectCtrl = require('./controllers/subjects');
app.use('/subjects', subjectCtrl);

const subjectBookCtrl = require('./controllers/subject_books');
app.use('/subjectBooks', subjectBookCtrl);

const memberCtrl = require('./controllers/members');
app.use('/members', memberCtrl);

const cardCtrl = require('./controllers/cards');
app.use('/cards', cardCtrl);

const librarianCtrl = require('./controllers/librarians');
app.use('/librarians', librarianCtrl);

const booklendingCtrl = require('./controllers/booklendings');
app.use('/booklendings', booklendingCtrl);

const bookdetaillendingCtrl = require('./controllers/bookdetaillendings');
app.use('/bookdetaillendings', bookdetaillendingCtrl);

const bookitemCtrl = require('./controllers/bookitems');
app.use('/bookitems', bookitemCtrl);

const publisherCtrl = require('./controllers/publishers');
app.use('/publishers', publisherCtrl);

const languageCtrl = require('./controllers/languages');
app.use('/languages', languageCtrl);

const bookCtrl = require('./controllers/books');
app.use('/books', bookCtrl);


app.use((req, res) => {
    res.status(404).send('Api Not Found');
});

var server = app.listen(8081, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Server is running at http://%s:%s', host, port);
})