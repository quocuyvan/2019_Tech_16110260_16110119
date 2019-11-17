module.exports = (sequelize, type) => {
    return sequelize.define('Languages', {
        id: {
            field: 'languageId',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        languageName: {
            type: type.STRING,
            allowNull: false
        },
    }, { timestamps: false })
}