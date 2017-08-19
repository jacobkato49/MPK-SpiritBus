var GTFS = require("gtfs-sequelize");

var pgConfig = {
  database: "server=localhost;uid=root;pwd=password;database=throw;",
  // downloadsDir: "downloads",
  gtfsFilename: "C:\Users\Jacob Kato\Desktop\web_dev_ucla\MPK-SpiritBus\scripts\downloads\google_transit.zip",
  spatial: true,
  sequelizeOptions: {
    logging: true
  }
};

var gtfs = GTFS(pgConfig);
gtfs.loadGtfs(function(a1, a2, a3) {
  debugger;
  //database loading has finished callback
});


// var GTFS = require("gtfs-sequelize");
//
// var downloadConfig = {
//   gtfsUrl: "http://transitfeeds.com/p/spirit-bus/757/google_transit.zip",
//   downloadsDir: "downloads"
// };

// var gtfs = GTFS(downloadConfig);
// gtfs.downloadGtfs(function() {
//     //download has finished callback
// });
