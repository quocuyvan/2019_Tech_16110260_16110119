const express = require('express');
const { check, validationResult } = require('express-validator');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const { BookLending, BookDetailLending, BookItem, Book } = require('../models/db')
const { ErrorResult, Result, PagingResult } = require('../utils/base_response')
const router = express.Router();
router.use((req, res, next) => {
    next();
})

//fill bookdetaillendings apis here
router.get('/', (req, res) => {
    let page = 0;
    if (req.query.p) page = parseInt(req.query.p);
    let pageSize = 20;
    if (req.query.s) pageSize = parseInt(req.query.s);
    let queryString = '';
    if (req.query.q) queryString = '%' + decodeURIComponent(req.query.q) + '%';
    let sortColumn = 'lendingId';
    let sortDirection = 'ASC';
    if (req.query.so) {
        const sortStr = decodeURIComponent(req.query.so).split(' ');
        sortColumn = sortStr[0];
        if (sortStr.length == 2) sortDirection = sortStr[1];
    }

    const offset = (page) * pageSize;
    if (queryString.length <= 2) {
        BookDetailLending.count().then(numRow => {
            const totalRows = numRow;
            const totalPages = Math.ceil(totalRows / pageSize);
            BookDetailLending.findAll({
                order: [
                    [sortColumn, sortDirection]
                ],
                offset: offset,
                limit: pageSize,
                include: [{ model: BookLending, as: 'bookLending' }, { model: BookItem, as: 'bookItem' }]
            }).then(bookdetaillendings => {
                return res.json(PagingResult(bookdetaillendings, {
                    pageNumber: page,
                    pageSize: pageSize,
                    totalRows: totalRows,
                    totalPages: totalPages
                }))
            })
        })
    } else { // search
        // conditions
        const whereClause = {
            [Op.or]: [{
                    dueDate: {
                        [Op.like]: queryString
                    }
                },
                {
                    returnDate: {
                        [Op.like]: queryString
                    }
                },
                {
                    bookId: {
                        [Op.like]: queryString
                    }
                },
                {
                    lendingId: {
                        [Op.like]: queryString
                    }
                }
            ]
        };
        BookDetailLending.count({ where: whereClause }).then(numRow => {
            const totalRows = numRow;
            const totalPages = Math.ceil(totalRows / pageSize);
            BookDetailLending.findAll({
                where: whereClause,
                offset: offset,
                limit: pageSize,
                include: [{ model: BookLending, as: 'bookLending' }, { model: BookItem, as: 'bookItem' }]
            }).then(bookdetaillendings => {
                return res.json(PagingResult(bookdetaillendings, {
                    pageNumber: page,
                    pageSize: pageSize,
                    totalRows: totalRows,
                    totalPages: totalPages
                }))
            })
        })
    }
});

router.get('/getByBookLending/:id(\\d+)', (req, res) => {
    let page = 0;
    if (req.query.p) page = parseInt(req.query.p);
    let pageSize = 20;
    if (req.query.s) pageSize = parseInt(req.query.s);
    let queryString = '';
    if (req.query.q) queryString = '%' + decodeURIComponent(req.query.q) + '%';
    let sortColumn = 'lendingId';
    let sortDirection = 'ASC';
    if (req.query.so) {
        const sortStr = decodeURIComponent(req.query.so).split(' ');
        sortColumn = sortStr[0];
        if (sortStr.length == 2) sortDirection = sortStr[1];
    }

    const offset = (page) * pageSize;
    if (queryString.length <= 2) {
        // conditions
        const whereClause = { lendingId: req.params.id };

        BookDetailLending.count({ where: whereClause }).then(numRow => {
            const totalRows = numRow;
            const totalPages = Math.ceil(totalRows / pageSize);
            BookDetailLending.findAll({
                where: whereClause,
                order: [
                    [sortColumn, sortDirection]
                ],
                offset: offset,
                limit: pageSize,
                include: [{ model: BookLending, as: 'bookLending' }, { model: BookItem, as: 'bookItem' }]
            }).then(bookdetaillendings => {
                return res.json(PagingResult(bookdetaillendings, {
                    pageNumber: page,
                    pageSize: pageSize,
                    totalRows: totalRows,
                    totalPages: totalPages
                }))
            })
        })
    } else { // search
        // conditions
        const whereClause = {
            lendingId: req.params.id,
            [Op.or]: [{
                    dueDate: {
                        [Op.like]: queryString
                    }
                },
                {
                    returnDate: {
                        [Op.like]: queryString
                    }
                },
                {
                    bookId: {
                        [Op.like]: queryString
                    }
                },
                {
                    lendingId: {
                        [Op.like]: queryString
                    }
                }
            ]
        };

        BookDetailLending.count({ where: whereClause }).then(numRow => {
            const totalRows = numRow;
            const totalPages = Math.ceil(totalRows / pageSize);
            BookDetailLending.findAll({
                where: whereClause,
                offset: offset,
                limit: pageSize,
                include: [{ model: BookLending, as: 'bookLending' }, { model: BookItem, as: 'bookItem' }]
            }).then(bookdetaillendings => {
                return res.json(PagingResult(bookdetaillendings, {
                    pageNumber: page,
                    pageSize: pageSize,
                    totalRows: totalRows,
                    totalPages: totalPages
                }))
            })
        })
    }
});

router.get('/getByBookItem/:id(\\d+)', (req, res) => {
    let page = 0;
    if (req.query.p) page = parseInt(req.query.p);
    let pageSize = 20;
    if (req.query.s) pageSize = parseInt(req.query.s);
    let queryString = '';
    if (req.query.q) queryString = '%' + decodeURIComponent(req.query.q) + '%';
    let sortColumn = 'lendingId';
    let sortDirection = 'ASC';
    if (req.query.so) {
        const sortStr = decodeURIComponent(req.query.so).split(' ');
        sortColumn = sortStr[0];
        if (sortStr.length == 2) sortDirection = sortStr[1];
    }

    const offset = (page) * pageSize;
    if (queryString.length <= 2) {
        // conditions
        const whereClause = { bookId: req.params.id };

        BookDetailLending.count({ where: whereClause }).then(numRow => {
            const totalRows = numRow;
            const totalPages = Math.ceil(totalRows / pageSize);
            BookDetailLending.findAll({
                where: whereClause,
                order: [
                    [sortColumn, sortDirection]
                ],
                offset: offset,
                limit: pageSize,
                include: [{ model: BookLending, as: 'bookLending' }, { model: BookItem, as: 'bookItem', include: [{ model: Book, as: 'book' }] }]
            }).then(bookdetaillendings => {
                return res.json(PagingResult(bookdetaillendings, {
                    pageNumber: page,
                    pageSize: pageSize,
                    totalRows: totalRows,
                    totalPages: totalPages
                }))
            })
        })
    } else { // search
        // conditions
        const whereClause = {
            bookId: req.params.id,
            [Op.or]: [{
                    dueDate: {
                        [Op.like]: queryString
                    }
                },
                {
                    returnDate: {
                        [Op.like]: queryString
                    }
                },
                {
                    bookId: {
                        [Op.like]: queryString
                    }
                },
                {
                    lendingId: {
                        [Op.like]: queryString
                    }
                }
            ]
        };

        BookDetailLending.count({ where: whereClause }).then(numRow => {
            const totalRows = numRow;
            const totalPages = Math.ceil(totalRows / pageSize);
            BookDetailLending.findAll({
                where: whereClause,
                offset: offset,
                limit: pageSize,
                include: [{ model: BookLending, as: 'bookLending' }, { model: BookItem, as: 'bookItem' }]
            }).then(bookdetaillendings => {
                return res.json(PagingResult(bookdetaillendings, {
                    pageNumber: page,
                    pageSize: pageSize,
                    totalRows: totalRows,
                    totalPages: totalPages
                }))
            })
        })
    }
});

router.get('/:id(\\d+)', (req, res) => {
    BookDetailLending.findOne({
        where: { id: req.params.id },
        include: [{ model: BookLending, as: 'bookLending' }, { model: BookItem, as: 'bookItem' }]
    }).then(BookDetailLending => {
        if (BookDetailLending != null) {
            return res.json(Result(BookDetailLending));
        } else {
            return res.status(404).json(ErrorResult(404, 'Not Found!'));
        }
    });
});

router.post('/', [
    // check('CUT_ID', 'Invalid number').isNumeric(),
    // check('name', 'Length from 2 to 100').isLength({ min: 2, max: 100 }),
    // check('email', 'Invalid email').isEmail(),
    // check('address', 'Required').not().isEmpty()
], (req, res) => {
    //validate data here
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json(ErrorResult(422, errors.array()));
    }

    BookDetailLending.create(req.body).then(BookDetailLending => {
        return res.json(Result(BookDetailLending))
    }).catch(err => {
        return res.status(400).send(ErrorResult(400, err.errors));
    });
});

router.put('/:id(\\d+)', [
    // check('CUT_ID', 'Invalid number').isNumeric(),
    // check('name', 'Length from 2 to 100').isLength({ min: 2, max: 100 }),
    // check('email', 'Invalid email').isEmail(),
    // check('address', 'Required').not().isEmpty()
], (req, res) => {
    //validate data here
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json(ErrorResult(422, errors.array()));
    }

    BookDetailLending.findByPk(req.params.id).then(BookDetailLending => {
        if (BookDetailLending != null) {
            BookDetailLending.update({
                dueDate: req.body.dueDate,
                returnDate: req.body.returnDate,
                bookId: req.body.bookId,
                lendingId: req.body.lendingId
            }).then(BookDetailLending => {
                return res.json(Result(BookDetailLending));
            }).catch(err => {
                return res.status(400).send(ErrorResult(400, err.errors));
            });
        } else {
            return res.status(404).send(ErrorResult(404, 'Not Found!'));
        }
    });
});

router.delete('/:id(\\d+)', (req, res) => {
    BookDetailLending.destroy({
        where: {
            id: req.params.id
        }
    }).then(type => {
        res.json(Result(type))
    }).catch(err => {
        return res.status(500).send(ErrorResult(500, err.errors));
    });
});


module.exports = router;