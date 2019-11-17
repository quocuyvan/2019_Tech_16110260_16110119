module.exports = (sequelize, type) => {
    return sequelize.define('Authors', {
        id: {
            field: 'authorId',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        authorName: {
            type: type.STRING,
            allowNull: false
        },
    }, { timestamps: false })
}