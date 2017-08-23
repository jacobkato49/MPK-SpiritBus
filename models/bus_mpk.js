module.exports= function(sequelize, DataTypes){

  var MpkBus =sequelize.define("routes",{

    route_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    route_short_name:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    route_desc: {
      type:DataTypes.STRING,
      allowNull: false
    },
    route_color: {
      type:DataTypes.STRING,
      allowNull: false
    }
  });

  return MpkBus;
};
