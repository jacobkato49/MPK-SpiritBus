module.exports= function(sequelize, DataTypes){

  var stops = sequelize.define("stops",{

    stop_id:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stop_name: {
      type: DataTypes.STRING,
      allowNull:false
    },
    stop_desc: {
      type: DataTypes.STRING,
      allowNull:false
    }
  })
  return stops;

};
