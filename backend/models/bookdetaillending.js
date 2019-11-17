module.exports = (sequelize, type) => {
    return sequelize.define('BookDetailLendings', {
        id: {
            field: 'detailId',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dueDate: {
            type: type.DATE,
            allowNull: false
        },
        returnDate: {
            type: type.DATE,
            allowNull: true
        },
        bookId: {
            type: type.INTEGER,
            allowNull: false
        },
        lendingId: {
            type: type.INTEGER,
            allowNull: false
        },
    }, { timestamps: false })
}