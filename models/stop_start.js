module.exports = function(sequelize, DataTypes){

  var stop_start = sequelize.define("shapes", {

    route_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    shape_pt_lat: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    shape_pt_lon:{
      type: DataTypes.DECIMAL,
      allowNull: false,
    }
  })
  return stop_start;
}
