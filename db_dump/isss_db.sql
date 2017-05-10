-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 10, 2017 at 12:19 PM
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
-- Table structure for table `fakultet`
--

CREATE TABLE `fakultet` (
  `id` int(11) NOT NULL,
  `naziv` varchar(256) COLLATE utf8_slovenian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_slovenian_ci;

--
-- Dumping data for table `fakultet`
--

INSERT INTO `fakultet` (`id`, `naziv`) VALUES
(1, 'Elektrotehnički fakultet'),
(2, 'Ekonomski fakultet');

-- --------------------------------------------------------

--
-- Table structure for table `ispit`
--

CREATE TABLE `ispit` (
  `id` int(11) NOT NULL,
  `prijave_do` datetime NOT NULL,
  `termin` datetime NOT NULL,
  `predmet_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_slovenian_ci;

--
-- Dumping data for table `ispit`
--

INSERT INTO `ispit` (`id`, `prijave_do`, `termin`, `predmet_id`) VALUES
(1, '2017-05-17 00:00:00', '2017-05-24 12:05:00', 1),
(2, '2017-05-19 00:00:00', '2017-05-31 00:00:10', 2);

-- --------------------------------------------------------

--
-- Table structure for table `obavjestenja`
--

CREATE TABLE `obavjestenja` (
  `id` int(11) NOT NULL,
  `naslov` varchar(256) COLLATE utf8_slovenian_ci NOT NULL,
  `tekst` text COLLATE utf8_slovenian_ci NOT NULL,
  `vrijeme` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `predmet_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_slovenian_ci;

--
-- Dumping data for table `obavjestenja`
--

INSERT INTO `obavjestenja` (`id`, `naslov`, `tekst`, `vrijeme`, `predmet_id`) VALUES
(1, 'Pažnja', 'Obavještavaju se studenti da je otkazan ispit iz Matematike 1.', '2017-05-09 12:53:02', 2),
(2, 'Obavijest', 'S obzirom na veliki broj studenata formirane su nove grupe za vježbe iz Fizike 1.', '2017-05-09 12:53:02', 1);

-- --------------------------------------------------------

--
-- Table structure for table `odsjek`
--

CREATE TABLE `odsjek` (
  `id` int(11) NOT NULL,
  `naziv` varchar(256) COLLATE utf8_slovenian_ci NOT NULL,
  `fakultet_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_slovenian_ci;

--
-- Dumping data for table `odsjek`
--

INSERT INTO `odsjek` (`id`, `naziv`, `fakultet_id`) VALUES
(1, 'Računarstvo i informatika', 1),
(2, 'Automatika i elektronika', 1);

-- --------------------------------------------------------

--
-- Table structure for table `pohadjanje`
--

CREATE TABLE `pohadjanje` (
  `id` int(11) NOT NULL,
  `ocjena` int(11) DEFAULT NULL,
  `predmet_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_slovenian_ci;

--
-- Dumping data for table `pohadjanje`
--

INSERT INTO `pohadjanje` (`id`, `ocjena`, `predmet_id`, `student_id`) VALUES
(1, 6, 1, 1),
(2, 8, 2, 2),
(3, 10, 2, 1),
(4, 9, 4, 1);

-- --------------------------------------------------------

--
-- Table structure for table `predmet`
--

CREATE TABLE `predmet` (
  `id` int(11) NOT NULL,
  `naziv` varchar(256) COLLATE utf8_slovenian_ci NOT NULL,
  `semestar` int(11) NOT NULL,
  `profesor_id` int(11) NOT NULL,
  `odsjek_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_slovenian_ci;

--
-- Dumping data for table `predmet`
--

INSERT INTO `predmet` (`id`, `naziv`, `semestar`, `profesor_id`, `odsjek_id`) VALUES
(1, 'Fizika', 1, 4, 1),
(2, 'Matematika 1', 1, 1, 1),
(3, 'Elektrotehnika 1', 1, 3, 1),
(4, 'Tehnike programiranja', 2, 6, 1),
(5, 'Operativni sistemi', 2, 5, 1),
(6, 'Matematika 2', 2, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `prijava`
--

CREATE TABLE `prijava` (
  `id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `ispit_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_slovenian_ci;

--
-- Dumping data for table `prijava`
--

INSERT INTO `prijava` (`id`, `student_id`, `ispit_id`) VALUES
(1, 1, 2),
(2, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `profesor`
--

CREATE TABLE `profesor` (
  `id` int(11) NOT NULL,
  `ime` varchar(256) COLLATE utf8_slovenian_ci NOT NULL,
  `prezime` varchar(256) COLLATE utf8_slovenian_ci NOT NULL,
  `email` varchar(256) COLLATE utf8_slovenian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_slovenian_ci;

--
-- Dumping data for table `profesor`
--

INSERT INTO `profesor` (`id`, `ime`, `prezime`, `email`) VALUES
(1, 'Huse', 'Fatkić', 'hfatkic@etf.unsa.ba'),
(2, 'Novica', 'Nosović', 'nnosovic@etf.unsa.ba'),
(3, 'Narcis', 'Behlilović', 'nbehlilovic@etf.unsa.ba'),
(4, 'Hasna', 'Šamić', 'hsamic@etf.unsa.ba'),
(5, 'Samir', 'Ribić', 'sribic@eetf.unsa.ba'),
(6, 'Željko', 'Jurić', 'zjuric@etf.unsa.ba');

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
(2, 'Alija', 'Izetbegović', 'zlatna_kasika@sda.ba', '123123', '1122331122334', '2017-05-08', 'Bosanski Šamac', 1, 1),
(3, 'Mujo', 'Mujić', 'mmujic1@etf.unsa.ba', 'pass', '1234545984521', '2017-05-01', 'Gusinje', 1, 1),
(4, 'Suljo', 'Suljić', 'ssuljic@etf.unsa.ba', 'pass', '1234567890123', '2017-05-02', 'Sarajevo', 2, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fakultet`
--
ALTER TABLE `fakultet`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ispit`
--
ALTER TABLE `ispit`
  ADD PRIMARY KEY (`id`),
  ADD KEY `predmet_id` (`predmet_id`);

--
-- Indexes for table `obavjestenja`
--
ALTER TABLE `obavjestenja`
  ADD PRIMARY KEY (`id`),
  ADD KEY `predmet_id` (`predmet_id`);

--
-- Indexes for table `odsjek`
--
ALTER TABLE `odsjek`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fakultet_id` (`fakultet_id`);

--
-- Indexes for table `pohadjanje`
--
ALTER TABLE `pohadjanje`
  ADD PRIMARY KEY (`id`),
  ADD KEY `predmet_id` (`predmet_id`),
  ADD KEY `student_id` (`student_id`);

--
-- Indexes for table `predmet`
--
ALTER TABLE `predmet`
  ADD PRIMARY KEY (`id`),
  ADD KEY `profesor_id` (`profesor_id`),
  ADD KEY `odsjek_id` (`odsjek_id`);

--
-- Indexes for table `prijava`
--
ALTER TABLE `prijava`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ispit_id` (`ispit_id`),
  ADD KEY `student_id` (`student_id`);

--
-- Indexes for table `profesor`
--
ALTER TABLE `profesor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`),
  ADD KEY `odsjek_id` (`odsjek_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fakultet`
--
ALTER TABLE `fakultet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `ispit`
--
ALTER TABLE `ispit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `obavjestenja`
--
ALTER TABLE `obavjestenja`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `odsjek`
--
ALTER TABLE `odsjek`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `pohadjanje`
--
ALTER TABLE `pohadjanje`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `predmet`
--
ALTER TABLE `predmet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `prijava`
--
ALTER TABLE `prijava`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `profesor`
--
ALTER TABLE `profesor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `ispit`
--
ALTER TABLE `ispit`
  ADD CONSTRAINT `ispit_ibfk_1` FOREIGN KEY (`predmet_id`) REFERENCES `predmet` (`id`);

--
-- Constraints for table `obavjestenja`
--
ALTER TABLE `obavjestenja`
  ADD CONSTRAINT `obavjestenja_ibfk_1` FOREIGN KEY (`predmet_id`) REFERENCES `predmet` (`id`);

--
-- Constraints for table `odsjek`
--
ALTER TABLE `odsjek`
  ADD CONSTRAINT `odsjek_ibfk_1` FOREIGN KEY (`fakultet_id`) REFERENCES `fakultet` (`id`);

--
-- Constraints for table `pohadjanje`
--
ALTER TABLE `pohadjanje`
  ADD CONSTRAINT `pohadjanje_ibfk_1` FOREIGN KEY (`predmet_id`) REFERENCES `predmet` (`id`),
  ADD CONSTRAINT `pohadjanje_ibfk_2` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`);

--
-- Constraints for table `predmet`
--
ALTER TABLE `predmet`
  ADD CONSTRAINT `predmet_ibfk_1` FOREIGN KEY (`odsjek_id`) REFERENCES `odsjek` (`id`),
  ADD CONSTRAINT `predmet_ibfk_2` FOREIGN KEY (`profesor_id`) REFERENCES `profesor` (`id`);

--
-- Constraints for table `prijava`
--
ALTER TABLE `prijava`
  ADD CONSTRAINT `prijava_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`),
  ADD CONSTRAINT `prijava_ibfk_2` FOREIGN KEY (`ispit_id`) REFERENCES `ispit` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
