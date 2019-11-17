const Sequelize = require('sequelize');
const AuthorModel = require('./author');
const AuthorBookModel = require('./author_book');
const SubjectModel = require('./subject');
const SubjectBookModel = require('./subject_book');
const MemberModel = require('./member');
const CardModel = require('./card');
const LibrarianModel = require('./librarian');
const BookLendingModel = require('./booklending');
const BookDetailLendingModel = require('./bookdetaillending');
const BookItemModel = require('./bookitem');
const BookModel = require('./book');
const PublisherModel = require('./publisher');
const LanguageModel = require('./language');



const sequelize = new Sequelize('LibraryManagementFINAL', 'sa', '1234', {
    dialect: 'mssql',
    host: 'localhost',
    dialectoptions: {
        "options": {
            "instanceName": "SQLEXPRESS",
        }
    },
    pool: { max: 20, min: 0, acquire: 30000, idle: 10000 },
    logging: true
});

const Author = AuthorModel(sequelize, Sequelize)
const AuthorBook = AuthorBookModel(sequelize, Sequelize)

const Subject = SubjectModel(sequelize, Sequelize)
const SubjectBook = SubjectBookModel(sequelize, Sequelize)

const Member = MemberModel(sequelize, Sequelize)
const Card = CardModel(sequelize, Sequelize)

const Librarian = LibrarianModel(sequelize, Sequelize)
const BookLending = BookLendingModel(sequelize, Sequelize)

const BookDetailLending = BookDetailLendingModel(sequelize, Sequelize)
const BookItem = BookItemModel(sequelize, Sequelize)

const Book = BookModel(sequelize, Sequelize)
const Publisher = PublisherModel(sequelize, Sequelize)
const Language = LanguageModel(sequelize, Sequelize)



AuthorBook.belongsTo(Author, { foreignKey: 'authorId', as: 'author' });
Author.hasMany(AuthorBook, { foreignKey: 'authorId', as: 'authorBooks' });

SubjectBook.belongsTo(Subject, { foreignKey: 'subjectId', as: 'subject' });
Subject.hasMany(SubjectBook, { foreignKey: 'subjectId', as: 'subjectBooks' });

Card.belongsTo(Member, { foreignKey: 'memberId', as: 'member' });
Member.hasMany(Card, { foreignKey: 'memberId', as: 'cards' });

BookLending.belongsTo(Librarian, { foreignKey: 'librarianId', as: 'librarian' });
Librarian.hasMany(BookLending, { foreignKey: 'librarianId', as: 'bookLendings' });

BookLending.belongsTo(Card, { foreignKey: 'cardId', as: 'card' });
Card.hasMany(BookLending, { foreignKey: 'cardId', as: 'bookLendings' });

BookDetailLending.belongsTo(BookLending, { foreignKey: 'lendingId', as: 'bookLending' });
BookLending.hasMany(BookDetailLending, { foreignKey: 'lendingId', as: 'bookDetailLendings' });

BookDetailLending.belongsTo(BookItem, { foreignKey: 'bookId', as: 'bookItem' });
BookItem.hasMany(BookDetailLending, { foreignKey: 'bookId', as: 'bookDetailLendings' });

BookItem.belongsTo(Book, { foreignKey: 'isbn', as: 'book' });
Book.hasMany(BookItem, { foreignKey: 'isbn', as: 'bookItems' });

Book.belongsTo(Publisher, { foreignKey: 'publisherId', as: 'publisher' });
Publisher.hasMany(Book, { foreignKey: 'publisherId', as: 'books' });

Book.belongsTo(Language, { foreignKey: 'languageId', as: 'language' });
Language.hasMany(Book, { foreignKey: 'languageId', as: 'books' });

SubjectBook.belongsTo(Book, { foreignKey: 'isbn', as: 'book' });
Book.hasMany(SubjectBook, { foreignKey: 'isbn', as: 'subjectBooks' });

AuthorBook.belongsTo(Book, { foreignKey: 'isbn', as: 'book' });
Book.hasMany(AuthorBook, { foreignKey: 'isbn', as: 'authorBooks' });

// sequelize.sync({ force: true }).then(() => {
//     console.log('Database & tables created!')
// });


module.exports = {
    Author,
    AuthorBook,
    Subject,
    SubjectBook,
    Card,
    Member,
    BookLending,
    Librarian,
    BookDetailLending,
    BookItem,
    Book,
    Publisher,
    Language
}