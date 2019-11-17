module.exports = (sequelize, type) => {
    return sequelize.define('Author_Books', {
        id: {
            field: 'id',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        authorId: {
            type: type.INTEGER,
            allowNull: false
        },
        isbn: {
            type: type.INTEGER,
            allowNull: false
        },
    }, { timestamps: false })
}