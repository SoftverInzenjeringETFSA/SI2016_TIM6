-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 09, 2017 at 11:39 AM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `isss_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `id` int(11) NOT NULL,
  `ime` varchar(256) COLLATE utf8_slovenian_ci NOT NULL,
  `prezime` varchar(256) COLLATE utf8_slovenian_ci NOT NULL,
  `email` varchar(256) COLLATE utf8_slovenian_ci NOT NULL,
  `password` varchar(256) COLLATE utf8_slovenian_ci NOT NULL,
  `jmbg` varchar(13) COLLATE utf8_slovenian_ci NOT NULL,
  `datum_rodjenja` date NOT NULL,
  `mjesto_rodjenja` varchar(256) COLLATE utf8_slovenian_ci NOT NULL,
  `semestar` int(11) NOT NULL,
  `odsjek_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_slovenian_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`id`, `ime`, `prezime`, `email`, `password`, `jmbg`, `datum_rodjenja`, `mjesto_rodjenja`, `semestar`, `odsjek_id`) VALUES
(1, 'Alija', 'Izetbegović', 'zlatna_kasika@sda.ba', '123123', '1122331122334', '2017-05-08', 'Bosanski Šamac', 1, 1),
(2, 'Alija', 'Izetbegović', 'zlatna_kasika@sda.ba', '123123', '1122331122334', '2017-05-08', 'Bosanski Šamac', 1, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
