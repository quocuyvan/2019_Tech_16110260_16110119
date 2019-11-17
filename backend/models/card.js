module.exports = (sequelize, type) => {
    return sequelize.define('Cards', {
        id: {
            field: 'cardId',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        createDate: {
            type: type.DATE,
            allowNull: false
        },
        dueDate: {
            type: type.DATE,
            allowNull: false
        },
        memberId: {
            type: type.INTEGER,
            allowNull: false
        },
    }, { timestamps: false })
}