const Usuario = (sequelize, DataType) => { 
    return sequelize.define ( 'Usuario', //nome do model
    { 
        id: { 
            type: DataType.INTEGER, 
            primaryKey: true, 
            autoIncrement: true, 
            allowNull: false }, 
            nome: { type: DataType.STRING, 
            allowNull: false 
        }, 
        email: {
            type: DataType.STRING, 
            allowNull: false }, 
            senha: { type: DataType.STRING, 
            allowNull: false 
        } 
        }, { 
            tableName: "usuarios", timestamps: false 
        })
    } 

    module.exports = Usuario; 