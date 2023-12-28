-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 23, 2023 at 01:12 PM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sharkawi_muc`
--

-- --------------------------------------------------------

--
-- Table structure for table `blocked_users`
--

DROP TABLE IF EXISTS `blocked_users`;
CREATE TABLE IF NOT EXISTS `blocked_users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `blocked_user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `blocked_user_id` (`blocked_user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `channels`
--

DROP TABLE IF EXISTS `channels`;
CREATE TABLE IF NOT EXISTS `channels` (
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `is_private` tinyint(1) NOT NULL,
  `participants` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `id` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ;

--
-- Dumping data for table `channels`
--

INSERT INTO `channels` (`name`, `is_private`, `participants`, `id`) VALUES
('General', 0, '[]', 'General'),
('Engineering', 0, '[]', 'Engineering'),
('Physical Therapy', 0, '[]', 'Physical Therapy'),
('Business', 0, '[]', 'Business'),
('Employees', 0, '[]', 'Employees'),
('omar_issa', 1, '[22120276,22120302]', 'v07cGkrUgKtwataMA4hLWFaw');

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
CREATE TABLE IF NOT EXISTS `messages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sender` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `message` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `channel_id` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `timestamp` datetime DEFAULT NULL,
  `userid` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=340 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `sender`, `message`, `channel_id`, `timestamp`, `userid`) VALUES
(293, 'omar', 'hi', 'General', '2023-12-19 08:10:48', 22120302),
(294, 'omar', 'asd', 'General', '2023-12-19 08:11:27', 22120302),
(295, 'omar', 'hi', 'General', '2023-12-19 08:13:24', 22120303),
(296, 'issa', 'hello omar', 'General', '2023-12-19 01:23:18', 22120276),
(297, 'omar', 'hi', 'General', '2023-12-19 01:23:40', 22120302),
(298, 'omar', 'eh ya 3issa', 'v07cGkrUgKtwataMA4hLWFaw', '2023-12-19 01:24:05', 22120302),
(299, 'omar', 'asd', 'General', '2023-12-23 01:09:06', 22120302),
(300, 'omar', 'asd', 'General', '2023-12-23 01:09:07', 22120302),
(301, 'omar', 'asd', 'General', '2023-12-23 01:09:08', 22120302),
(302, 'omar', 'asd', 'General', '2023-12-23 01:09:08', 22120302),
(303, 'omar', 'asd', 'General', '2023-12-23 01:10:34', 22120302),
(304, 'omar', 'asd', 'General', '2023-12-23 01:10:35', 22120302),
(305, 'omar', 'as', 'General', '2023-12-23 01:10:35', 22120302),
(306, 'omar', 'd', 'General', '2023-12-23 01:10:35', 22120302),
(307, 'omar', 'asd', 'General', '2023-12-23 01:10:35', 22120302),
(308, 'omar', 'asd', 'General', '2023-12-23 01:10:55', 22120302),
(309, 'omar', 'asd', 'General', '2023-12-23 01:10:55', 22120302),
(310, 'omar', 'a', 'General', '2023-12-23 01:10:56', 22120302),
(311, 'omar', 'a', 'General', '2023-12-23 01:10:56', 22120302),
(312, 'omar', 'a', 'General', '2023-12-23 01:10:56', 22120302),
(313, 'omar', 'v', 'General', '2023-12-23 01:11:03', 22120302),
(314, 'omar', 'v', 'General', '2023-12-23 01:11:03', 22120302),
(315, 'omar', 'v', 'General', '2023-12-23 01:11:03', 22120302),
(316, 'omar', 'v', 'General', '2023-12-23 01:11:03', 22120302),
(317, 'omar', 'v', 'General', '2023-12-23 01:11:03', 22120302),
(318, 'omar', 'v', 'General', '2023-12-23 01:11:04', 22120302),
(319, 'omar', 'v', 'General', '2023-12-23 01:11:04', 22120302),
(320, 'omar', 'v', 'General', '2023-12-23 01:11:04', 22120302),
(321, 'omar', 'v', 'General', '2023-12-23 01:11:04', 22120302),
(322, 'omar', 'v', 'General', '2023-12-23 01:11:04', 22120302),
(323, 'omar', 'v', 'General', '2023-12-23 01:11:05', 22120302),
(324, 'omar', 'v', 'General', '2023-12-23 01:11:05', 22120302),
(325, 'omar', 'v', 'General', '2023-12-23 01:11:05', 22120302),
(326, 'omar', 'v', 'General', '2023-12-23 01:11:05', 22120302),
(327, 'omar', 'v', 'General', '2023-12-23 01:11:05', 22120302),
(328, 'omar', 'v', 'General', '2023-12-23 01:11:06', 22120302),
(329, 'omar', 'v', 'General', '2023-12-23 01:11:06', 22120302),
(330, 'omar', 'v', 'General', '2023-12-23 01:11:06', 22120302),
(331, 'omar', 'v', 'General', '2023-12-23 01:11:06', 22120302),
(332, 'omar', 'v', 'General', '2023-12-23 01:11:06', 22120302),
(333, 'omar', 'v', 'General', '2023-12-23 01:11:07', 22120302),
(334, 'omar', 'v', 'General', '2023-12-23 01:11:07', 22120302),
(335, 'omar', 'v', 'General', '2023-12-23 01:11:07', 22120302),
(336, 'omar', 'ddddddddddd', 'General', '2023-12-23 01:11:11', 22120302),
(337, 'omar', 'dddddddddddddddddd', 'General', '2023-12-23 01:11:13', 22120302),
(338, 'omar', 'ddddddddddddddddddddddddddddddd', 'General', '2023-12-23 01:11:15', 22120302),
(339, 'omar', 'ddddddddddddddddddddddddddddddddddd', 'General', '2023-12-23 01:11:17', 22120302);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `faculty` varchar(255) COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Employee',
  `session_duration` int DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=221205436 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `faculty`, `session_duration`) VALUES
(22120302, 'omar.22120302@muc.edu.eg', 'Omar@1234', 'Engineering', 0);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `blocked_users`
--
ALTER TABLE `blocked_users`
  ADD CONSTRAINT `blocked_users_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `blocked_users_ibfk_2` FOREIGN KEY (`blocked_user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
