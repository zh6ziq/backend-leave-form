module.exports = (sequelize, DataTypes) => {
    const Forms = sequelize.define('Forms', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        contact: DataTypes.STRING,
        department: DataTypes.STRING,
        fromdate: DataTypes.DATEONLY,
        todate: DataTypes.DATEONLY,
        text: DataTypes.STRING,
    })


    return Forms;
}