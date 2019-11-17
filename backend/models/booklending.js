module.exports = (sequelize, type) => {
    return sequelize.define('BookLendings', {
        id: {
            field: 'lendingId',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        createDate: {
            type: type.DATE,
            allowNull: false
        },
        lendingDate: {
            type: type.DATE,
            allowNull: false
        },
        cardId: {
            type: type.INTEGER,
            allowNull: false
        },
        librarianId: {
            type: type.INTEGER,
            allowNull: false
        },
        type: {
            type: type.INTEGER,
            allowNull: false
        },
    }, { timestamps: false })
}