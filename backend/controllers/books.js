const express = require('express');
const { check, validationResult } = require('express-validator');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const { Book, Language, Publisher } = require('../models/db')
const { ErrorResult, Result, PagingResult } = require('../utils/base_response')
const router = express.Router();
router.use((req, res, next) => {
    next();
})

//fill books apis here
router.get('/', (req, res) => {
    let page = 0;
    if (req.query.p) page = parseInt(req.query.p);
    let pageSize = 20;
    if (req.query.s) pageSize = parseInt(req.query.s);
    let queryString = '';
    if (req.query.q) queryString = '%' + decodeURIComponent(req.query.q) + '%';
    let sortColumn = 'title';
    let sortDirection = 'ASC';
    if (req.query.so) {
        const sortStr = decodeURIComponent(req.query.so).split(' ');
        sortColumn = sortStr[0];
        if (sortStr.length == 2) sortDirection = sortStr[1];
    }

    const offset = (page) * pageSize;
    if (queryString.length <= 2) {
        Book.count().then(numRow => {
            const totalRows = numRow;
            const totalPages = Math.ceil(totalRows / pageSize);
            Book.findAll({
                order: [
                    [sortColumn, sortDirection]
                ],
                offset: offset,
                limit: pageSize,
                include: [{ model: Language, as: 'language' }, { model: Publisher, as: 'publisher' }]
            }).then(books => {
                return res.json(PagingResult(books, {
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
                    title: {
                        [Op.like]: queryString
                    }
                },
                {
                    publisherId: {
                        [Op.like]: queryString
                    }
                },
                {
                    languageId: {
                        [Op.like]: queryString
                    }
                },
                {
                    edition: {
                        [Op.like]: queryString
                    }
                },
                {
                    publishingYear: {
                        [Op.like]: queryString
                    }
                },

                {
                    page: {
                        [Op.like]: queryString
                    }
                },

                {
                    size: {
                        [Op.like]: queryString
                    }
                },

                {
                    callNumber: {
                        [Op.like]: queryString
                    }
                },

                {
                    description: {
                        [Op.like]: queryString
                    }
                },

                {
                    tableOfContent: {
                        [Op.like]: queryString
                    }
                }
            ]
        };
        Book.count({ where: whereClause }).then(numRow => {
            const totalRows = numRow;
            const totalPages = Math.ceil(totalRows / pageSize);
            Book.findAll({
                where: whereClause,
                offset: offset,
                limit: pageSize,
                include: [{ model: Language, as: 'language' }, { model: Publisher, as: 'publisher' }]
            }).then(books => {
                return res.json(PagingResult(books, {
                    pageNumber: page,
                    pageSize: pageSize,
                    totalRows: totalRows,
                    totalPages: totalPages
                }))
            })
        })
    }
});

router.get('/getByLanguage/:id(\\d+)', (req, res) => {
    let page = 0;
    if (req.query.p) page = parseInt(req.query.p);
    let pageSize = 20;
    if (req.query.s) pageSize = parseInt(req.query.s);
    let queryString = '';
    if (req.query.q) queryString = '%' + decodeURIComponent(req.query.q) + '%';
    let sortColumn = 'title';
    let sortDirection = 'ASC';
    if (req.query.so) {
        const sortStr = decodeURIComponent(req.query.so).split(' ');
        sortColumn = sortStr[0];
        if (sortStr.length == 2) sortDirection = sortStr[1];
    }

    const offset = (page) * pageSize;
    if (queryString.length <= 2) {
        // conditions
        const whereClause = { languageId: req.params.id };

        Book.count({ where: whereClause }).then(numRow => {
            const totalRows = numRow;
            const totalPages = Math.ceil(totalRows / pageSize);
            Book.findAll({
                where: whereClause,
                order: [
                    [sortColumn, sortDirection]
                ],
                offset: offset,
                limit: pageSize,
                include: [{ model: Language, as: 'language' }, { model: Publisher, as: 'publisher' }]
            }).then(books => {
                return res.json(PagingResult(books, {
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
            languageId: req.params.id,
            [Op.or]: [{
                    title: {
                        [Op.like]: queryString
                    }
                },
                {
                    publisherId: {
                        [Op.like]: queryString
                    }
                },
                {
                    languageId: {
                        [Op.like]: queryString
                    }
                },
                {
                    edition: {
                        [Op.like]: queryString
                    }
                },
                {
                    publishingYear: {
                        [Op.like]: queryString
                    }
                },

                {
                    page: {
                        [Op.like]: queryString
                    }
                },

                {
                    size: {
                        [Op.like]: queryString
                    }
                },

                {
                    callNumber: {
                        [Op.like]: queryString
                    }
                },

                {
                    description: {
                        [Op.like]: queryString
                    }
                },

                {
                    tableOfContent: {
                        [Op.like]: queryString
                    }
                }
            ]
        };

        Book.count({ where: whereClause }).then(numRow => {
            const totalRows = numRow;
            const totalPages = Math.ceil(totalRows / pageSize);
            Book.findAll({
                where: whereClause,
                offset: offset,
                limit: pageSize,
                include: [{ model: Language, as: 'language' }, { model: Publisher, as: 'publisher' }]
            }).then(books => {
                return res.json(PagingResult(books, {
                    pageNumber: page,
                    pageSize: pageSize,
                    totalRows: totalRows,
                    totalPages: totalPages
                }))
            })
        })
    }
});

router.get('/getByPublisher/:id(\\d+)', (req, res) => {
    let page = 0;
    if (req.query.p) page = parseInt(req.query.p);
    let pageSize = 20;
    if (req.query.s) pageSize = parseInt(req.query.s);
    let queryString = '';
    if (req.query.q) queryString = '%' + decodeURIComponent(req.query.q) + '%';
    let sortColumn = 'title';
    let sortDirection = 'ASC';
    if (req.query.so) {
        const sortStr = decodeURIComponent(req.query.so).split(' ');
        sortColumn = sortStr[0];
        if (sortStr.length == 2) sortDirection = sortStr[1];
    }

    const offset = (page) * pageSize;
    if (queryString.length <= 2) {
        // conditions
        const whereClause = { publisherId: req.params.id };

        Book.count({ where: whereClause }).then(numRow => {
            const totalRows = numRow;
            const totalPages = Math.ceil(totalRows / pageSize);
            Book.findAll({
                where: whereClause,
                order: [
                    [sortColumn, sortDirection]
                ],
                offset: offset,
                limit: pageSize,
                include: [{ model: Language, as: 'language' }, { model: Publisher, as: 'publisher' }]
            }).then(books => {
                return res.json(PagingResult(books, {
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
            publisherId: req.params.id,
            [Op.or]: [{
                    title: {
                        [Op.like]: queryString
                    }
                },
                {
                    publisherId: {
                        [Op.like]: queryString
                    }
                },
                {
                    languageId: {
                        [Op.like]: queryString
                    }
                },
                {
                    edition: {
                        [Op.like]: queryString
                    }
                },
                {
                    publishingYear: {
                        [Op.like]: queryString
                    }
                },

                {
                    page: {
                        [Op.like]: queryString
                    }
                },

                {
                    size: {
                        [Op.like]: queryString
                    }
                },

                {
                    callNumber: {
                        [Op.like]: queryString
                    }
                },

                {
                    description: {
                        [Op.like]: queryString
                    }
                },

                {
                    tableOfContent: {
                        [Op.like]: queryString
                    }
                }
            ]
        };

        Book.count({ where: whereClause }).then(numRow => {
            const totalRows = numRow;
            const totalPages = Math.ceil(totalRows / pageSize);
            Book.findAll({
                where: whereClause,
                offset: offset,
                limit: pageSize,
                include: [{ model: Language, as: 'language' }, { model: Publisher, as: 'publisher' }]
            }).then(books => {
                return res.json(PagingResult(books, {
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
    Book.findOne({
        where: { id: req.params.id },
        include: [{ model: Language, as: 'language' }, { model: Publisher, as: 'publisher' }]
    }).then(Book => {
        if (Book != null) {
            return res.json(Result(Book));
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

    Book.create(req.body).then(Book => {
        return res.json(Result(Book))
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

    Book.findByPk(req.params.id).then(Book => {
        if (Book != null) {
            Book.update({
                title: req.body.title,
                publisherId: req.body.publisherId,
                languageId: req.body.languageId,
                edition: req.body.edition,
                publishingYear: req.body.publishingYear,
                page: req.body.page,
                size: req.body.size,
                callNumber: req.body.callNumber,
                description: req.body.description,
                tableOfContent: req.body.tableOfContent
            }).then(Book => {
                return res.json(Result(Book));
            }).catch(err => {
                return res.status(400).send(ErrorResult(400, err.errors));
            });
        } else {
            return res.status(404).send(ErrorResult(404, 'Not Found!'));
        }
    });
});

router.delete('/:id(\\d+)', (req, res) => {
    Book.destroy({
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