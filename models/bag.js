module.exports = function(sequelize,DataTypes){
    var bag = sequelize.define('bag',{
        name:{
            type: DataTypes.STRING
        },
        model:{
            type: DataTypes.STRING
        },
        quantity:{
            type:DataTypes.INTEGER
        },
        price:{
            type:DataTypes.FLOAT
        },
        color:{
            type:DataTypes.STRING
        },
        material:{
            type:DataTypes.STRING
        }
    })
    // bag.sync()
    return bag
}