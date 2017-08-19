var GTFS = require("gtfs-sequelize");

var pgConfig = {
  database: "server=localhost;uid=root;pwd=password;database=throw;",
  downloadsDir: "downloads",
  gtfsFilename: "/c/Users/Jacob Kato/Desktop/web_dev_ucla/MPK-SpiritBus/data/Improved_GTFS.zip",
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
