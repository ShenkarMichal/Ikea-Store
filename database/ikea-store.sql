-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 27, 2023 at 12:11 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ikea-store`
--
CREATE DATABASE IF NOT EXISTS `ikea-store` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `ikea-store`;

-- --------------------------------------------------------

--
-- Table structure for table `furniture`
--

DROP TABLE IF EXISTS `furniture`;
CREATE TABLE `furniture` (
  `furnitureID` int(11) NOT NULL,
  `furnitureTypeID` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `description` varchar(200) NOT NULL,
  `size` varchar(20) NOT NULL,
  `color` varchar(20) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `discount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `furniture`
--

INSERT INTO `furniture` (`furnitureID`, `furnitureTypeID`, `name`, `description`, `size`, `color`, `price`, `discount`) VALUES
(1, 1, 'round-table', '...', '60X60X90', 'green', 455.00, 2),
(2, 2, 'gaming-chair', '...', '70X40X100', 'black&white', 350.00, 5),
(3, 4, 'amazing sofa', '...', '120X70X50', 'blue', 900.00, 10),
(4, 3, 'bad-room-cabinet', '...', '200X40X180', 'pink', 4000.00, 10),
(5, 3, 'living-room-cabinet', '...', '180X40X70', 'brown', 1500.00, 3),
(6, 3, 'living-room-cabinet', '...', '180X40X70', 'brown', 1500.00, 3),
(7, 1, 'Kitchen Table', 'WoW Kitchen Table', '140X70X90', 'Green', 550.00, 15),
(8, 2, 'TV chair', 'So nice tv-chair', 'very big', 'gray', 5000.00, 10),
(9, 3, 'children-room cabine', 'very nice cabinet', '4 dlatot', 'pink', 7000.00, 10);

-- --------------------------------------------------------

--
-- Table structure for table `furnituretype`
--

DROP TABLE IF EXISTS `furnituretype`;
CREATE TABLE `furnituretype` (
  `furnitureTypeID` int(11) NOT NULL,
  `furnitureTypeName` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `furnituretype`
--

INSERT INTO `furnituretype` (`furnitureTypeID`, `furnitureTypeName`) VALUES
(1, 'table'),
(2, 'chair'),
(3, 'cabinet'),
(4, 'sofa');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `furniture`
--
ALTER TABLE `furniture`
  ADD PRIMARY KEY (`furnitureID`),
  ADD KEY `furnitureTypeID` (`furnitureTypeID`);

--
-- Indexes for table `furnituretype`
--
ALTER TABLE `furnituretype`
  ADD PRIMARY KEY (`furnitureTypeID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `furniture`
--
ALTER TABLE `furniture`
  MODIFY `furnitureID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `furnituretype`
--
ALTER TABLE `furnituretype`
  MODIFY `furnitureTypeID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `furniture`
--
ALTER TABLE `furniture`
  ADD CONSTRAINT `furniture_ibfk_1` FOREIGN KEY (`furnitureTypeID`) REFERENCES `furnituretype` (`furnitureTypeID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
