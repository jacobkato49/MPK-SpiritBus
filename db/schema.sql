CREATE DATABASE gtfs;
USE gtfs;

--
-- Table structure for table `agency`
--

CREATE TABLE IF NOT EXISTS `agency` (
  `agency_id` varchar(11) NOT NULL,
  `agency_name` varchar(255) DEFAULT NULL,
  `agency_url` varchar(255) DEFAULT NULL,
  `agency_timezone` varchar(50) DEFAULT NULL,
  `agency_lang` varchar(2) NOT NULL,
  `mode` int(11) NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `calendar`
--

CREATE TABLE IF NOT EXISTS `calendar` (
  `service_id` varchar(15) NOT NULL DEFAULT '',
  `monday` tinyint(1) DEFAULT NULL,
  `tuesday` tinyint(1) DEFAULT NULL,
  `wednesday` tinyint(1) DEFAULT NULL,
  `thursday` tinyint(1) DEFAULT NULL,
  `friday` tinyint(1) DEFAULT NULL,
  `saturday` tinyint(1) DEFAULT NULL,
  `sunday` tinyint(1) DEFAULT NULL,
  `start_date` varchar(8) DEFAULT NULL,
  `end_date` varchar(8) DEFAULT NULL,
  `mode` int(11) NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `calendar_dates`
--

CREATE TABLE IF NOT EXISTS `calendar_dates` (
  `service_id` varchar(15) NOT NULL DEFAULT '',
  `date` varchar(8) NOT NULL DEFAULT '',
  `date_timestamp` int(11) DEFAULT NULL,
  `exception_type` int(2) DEFAULT NULL,
  `mode` int(11) NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `routes`
--

CREATE TABLE IF NOT EXISTS `routes` (
  `route_id` varchar(15) NOT NULL,
  `agency_id` varchar(11) DEFAULT NULL,
  `route_short_name` varchar(50) DEFAULT NULL,
  `route_long_name` varchar(255) DEFAULT NULL,
  `route_type` int(2) DEFAULT NULL,
  `route_text_color` varchar(255) DEFAULT NULL,
  `route_color` varchar(255) DEFAULT NULL,
  `route_url` varchar(255) DEFAULT NULL,
  `route_desc` varchar(255) DEFAULT NULL,
  `mode` int(11) NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `shapes`
--

CREATE TABLE IF NOT EXISTS `shapes` (
  `shape_id` varchar(30) NOT NULL,
  `shape_pt_lat` decimal(18,15) NOT NULL,
  `shape_pt_lon` decimal(18,15) NOT NULL,
  `shape_pt_sequence` int(11) NOT NULL,
  `shape_dist_traveled` double NOT NULL,
  `mode` int(11) NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `stops`
--

CREATE TABLE IF NOT EXISTS `stops` (
  `stop_id` varchar(20) NOT NULL,
  `stop_code` varchar(50) DEFAULT NULL,
  `stop_name` varchar(255) DEFAULT NULL,
  `stop_desc` varchar(255) DEFAULT NULL,
  `stop_lat` decimal(18,15) DEFAULT NULL,
  `stop_lon` decimal(18,15) DEFAULT NULL,
  `zone_id` int(11) DEFAULT NULL,
  `stop_url` varchar(255) DEFAULT NULL,
  `location_type` int(2) DEFAULT NULL,
  `parent_station` int(11) DEFAULT NULL,
  `mode` int(11) NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `stop_times`
--

CREATE TABLE IF NOT EXISTS `stop_times` (
  `trip_id` varchar(35) NOT NULL,
  `arrival_time` time DEFAULT NULL,
  `arrival_time_seconds` int(11) DEFAULT NULL,
  `departure_time` time DEFAULT NULL,
  `departure_time_seconds` int(11) DEFAULT NULL,
  `stop_id` int(11) DEFAULT NULL,
  `stop_sequence` int(11) DEFAULT NULL,
  `stop_headsign` varchar(50) DEFAULT NULL,
  `pickup_type` int(2) DEFAULT NULL,
  `drop_off_type` int(2) DEFAULT NULL,
  `shape_dist_traveled` varchar(50) DEFAULT NULL,
  `mode` int(11) NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `trips`
--

CREATE TABLE IF NOT EXISTS `trips` (
  `route_id` varchar(15) DEFAULT NULL,
  `service_id` varchar(15) DEFAULT NULL,
  `trip_id` varchar(30) NOT NULL,
  `trip_headsign` varchar(255) DEFAULT NULL,
  `trip_short_name` varchar(255) DEFAULT NULL,
  `direction_id` tinyint(1) DEFAULT NULL,
  `block_id` int(11) DEFAULT NULL,
  `shape_id` varchar(20) DEFAULT NULL,
  `mode` int(11) NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Indexes for table `agency`
--
ALTER TABLE `agency`
 ADD PRIMARY KEY (`agency_id`);

--
-- Indexes for table `calendar`
--
ALTER TABLE `calendar`
 ADD PRIMARY KEY (`service_id`);

--
-- Indexes for table `calendar_dates`
--
ALTER TABLE `calendar_dates`
 ADD PRIMARY KEY (`service_id`,`date`), ADD KEY `service_id` (`service_id`), ADD KEY `date_timestamp` (`date_timestamp`), ADD KEY `exception_type` (`exception_type`);

--
-- Indexes for table `routes`
--
ALTER TABLE `routes`
 ADD PRIMARY KEY (`route_id`), ADD KEY `agency_id` (`agency_id`), ADD KEY `route_type` (`route_type`);
 
