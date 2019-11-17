module.exports = (sequelize, type) => {
    return sequelize.define('Librarians', {
        id: {
            field: 'librarianId',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fullName: {
            type: type.STRING,
            allowNull: false
        },
        email: {
            type: type.STRING,
            allowNull: false
        },
        phone: {
            type: type.STRING,
            allowNull: false
        },
        address: {
            type: type.STRING,
            allowNull: false
        },
        account: {
            type: type.STRING,
            allowNull: false
        },
        password: {
            type: type.STRING,
            allowNull: false
        },
    }, { timestamps: false })
}