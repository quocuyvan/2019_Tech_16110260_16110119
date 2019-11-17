module.exports = (sequelize, type) => {
    return sequelize.define('Subject_Books', {
        id: {
            field: 'id',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        subjectId: {
            type: type.INTEGER,
            allowNull: false
        },
        isbn: {
            type: type.INTEGER,
            allowNull: false
        },
    }, { timestamps: false })
}