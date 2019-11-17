module.exports = (sequelize, type) => {
    return sequelize.define('Books', {
        id: {
            field: 'isbn',
            type: type.INTEGER,
            primaryKey: true
        },
        title: {
            type: type.STRING,
            allowNull: false
        },
        publisherId: {
            type: type.INTEGER,
            allowNull: false
        },
        languageId: {
            type: type.INTEGER,
            allowNull: false
        },
        edition: {
            type: type.INTEGER,
            allowNull: false
        },
        publishingYear: {
            type: type.INTEGER,
            allowNull: false
        },
        page: {
            type: type.INTEGER,
            allowNull: false
        },
        size: {
            type: type.INTEGER,
            allowNull: false
        },
        callNumber: {
            type: type.STRING,
            allowNull: false
        },
        description: {
            type: type.STRING,
            allowNull: false
        },
        tableOfContent: {
            type: type.STRING,
            allowNull: false
        },
    }, { timestamps: false })
}