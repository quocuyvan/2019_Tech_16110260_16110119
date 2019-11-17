module.exports = (sequelize, type) => {
    return sequelize.define('Publishers', {
        id: {
            field: 'publisherId',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        publisherName: {
            type: type.STRING,
            allowNull: false
        },
    }, { timestamps: false })
}