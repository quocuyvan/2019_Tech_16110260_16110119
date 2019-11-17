module.exports = (sequelize, type) => {
    return sequelize.define('BookItems', {
        id: {
            field: 'bookId',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        createDate: {
            type: type.DATE,
            allowNull: false
        },
        status: {
            type: type.INTEGER,
            allowNull: false
        },
        isbn: {
            type: type.INTEGER,
            allowNull: false
        },
    }, { timestamps: false })
}