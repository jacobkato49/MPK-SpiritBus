var GTFS = require("gtfs-sequelize");

var pgConfig = {
  database: "mysql://gtfs_sequelize:gtfs_sequelize@localhost:3000/gtfs-sequelize-test",
  downloadsDir: "downloads",
  gtfsFilename: "Improved_GTFS.zip",
  spatial: true,
  sequelizeOptions: {
    logging: false,
    schema: "throw"
  }
}

var gtfs = GTFS(pgConfig);
gtfs.loadGtfs(function() {
  //database loading has finished callback
});
