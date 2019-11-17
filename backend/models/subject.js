module.exports = (sequelize, type) => {
    return sequelize.define('Subjects', {
        id: {
            field: 'subjectId',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        subjectName: {
            type: type.STRING,
            allowNull: false
        },
    }, { timestamps: false })
}