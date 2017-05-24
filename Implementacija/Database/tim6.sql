-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 11, 2017 at 01:25 PM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

CREATE DATABASE tim6;
USE  tim6;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tim6`
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
(1,'2017-06-17 00:00:00','2017-06-24 12:05:00',1),
(2,'2017-05-24 00:00:00','2017-05-31 00:00:10',2),
(3,'2017-04-10 00:00:00','2017-04-22 00:00:23',4),
(4,'2017-06-28 00:00:00','2017-06-30 00:00:00',2),
(5,'2017-07-01 00:00:00','2017-08-01 00:00:00',9),
(6,'2017-07-02 00:00:00','2017-07-02 00:00:00',9),
(7,'2017-05-24 00:00:00','2017-05-31 00:00:10',20),
(8,'2017-06-28 00:00:00','2017-06-30 00:00:00',20);


-- --------------------------------------------------------

--
-- Table structure for table `obavjestenja`
--

CREATE TABLE `obavjestenja` (
  `id` int(11) NOT NULL,
  `naslov` varchar(256) COLLATE utf8_slovenian_ci NOT NULL,
  `tekst` text COLLATE utf8_slovenian_ci NOT NULL,
  `vrijeme` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
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
(1,'Računarstvo i informatika',1),
(2,'Automatika i elektronika',1),
(3,'Telekomunikacije',1),
(4,'Energetika',1);

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
(1,NULL,1,1),
(2,10,2,1),
(3,9,4,1),
(4,9,9,1),
(5,NULL,6,1),
(6,6,3,1),
(7,7,22,1),
(8,8,23,1),
(9,6,11,1),
(10,9,10,1),
(11,6,17,5),
(12,7,18,5),
(13,8,19,5),
(14,6,20,5),
(15,10,21,5),
(16,NULL,16,5),
(17,NULL,15,5),
(18,6,14,5),
(19,6,13,5),
(20,NULL,12,5),
(21,6,7,3),
(22,7,24,3),
(23,8,25,3),
(24,6,27,3),
(25,10,28,3),
(26,8,29,3),
(27,6,1,3),
(28,7,2,3),
(29,8,4,3),
(30,9,9,3),
(31,10,6,3),
(32,9,3,3),
(33,8,22,3),
(34,7,23,3),
(35,6,11,3),
(36,6,10,3);

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
(1,'Inženjerska fizika 1',1,4,1),
(2,'Inženjerska matematika 1',1,1,1),
(3,'Osnove elektrotehnike',1,3,1),
(4,'Tehnike programiranja',2,6,1),
(5,'Operativni sistemi',2,5,1),
(6,'Inženjerska matematika 2',2,1,1),
(7,'Diskretna matematika',3,6,1),
(8,'Računarske arhitekture',4,2,1),
(9,'Operativni sistemi',2,5,1),
(10,'Vjerovatnoća i statistika',2,10,1),
(11,'Matematička logika',2,6,1),
(12,'Elektronički elementi ',2,9,2),
(13,'Električni krugovi 1',2,3,2),
(14,'Inženjerska fizika 2',2,4,2),
(15,'Tehnike programiranja',2,6,2),
(16,'Inženjerska matematika 2',2,1,2),
(17,'Inženjerska fizika 1',1,4,2),
(18,'Linearna algebra i geometrija',1,7,2),
(19,'Osnove računarstva',1,8,2),
(20,'Inženjerska matematika 1',1,1,2),
(21,'Osnove elektrotehnike',1,3,2),
(22,'Linearna algebra i geometrija',1,7,1),
(23,'Osnove računarstva',1,8,1),
(24,'Osnove baza podataka',3,16,1),
(25,'Razvoj programskih rješenja',3,12,1),
(26,'Numerički algoritmi',3,6,1),
(27,'Sistemsko programiranje',3,5,1),
(28,'Algoritmi i strukture podataka',3,11,1),
(29,'Logički dizajn',3,2,1),
(30,'Automati i formalni jezici',4,11,1),
(31,'Objektno orijentisana analiza',4,12,1),
(32,'Razvoj mobilnih aplikacija',4,14,1),
(33,'Osnove računarskih mreža',4,15,1),
(34,'Ugradbeni sistemi',4,13,1);


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
(2, 5, 8),
(3, 1, 3);

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
(1,'Huse','Fatkić','hfatkic@etf.unsa.ba'),
(2,'Novica','Nosović','nnosovic@etf.unsa.ba'),
(3,'Narcis','Behlilović','nbehlilovic@etf.unsa.ba'),
(4,'Hasna','Šamić','hsamic@etf.unsa.ba'),
(5,'Samir','Ribić','sribic@eetf.unsa.ba'),
(6,'Željko','Jurić','zjuric@etf.unsa.ba'),
(7,'Almasa','Odžak','aodzak@etf.unsa.ba'),
(8,'Vedran','Ljubović','vljubovic@etf.unsa.ba'),
(9,'Jasna','Pašić','jpasic@etf.unsa.ba'),
(10,'Alma','Ribić','aribic@etf.usna.ba'),
(11,'Haris','Šupić','hsupic@etf.unsa.ba'),
(12,'Dzenana','Đonko','ddonko@etf.unsa.ba'),
(13,'Samim','Konjicija','skonjicija@etf.unsa.ba'),
(14,'Vensada','Okanovic','vokanovic@etf.unsa.ba'),
(15,'Kemal','Hajdarevic','khajdarevic@etf.unsa.ba'),
(16,'Emir','Buza','ebuza@etf.unsa.ba');


-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `id` int(11) NOT NULL,
  `ime` varchar(256) COLLATE utf8_slovenian_ci NOT NULL,
  `prezime` varchar(256) COLLATE utf8_slovenian_ci NOT NULL,
  `email` varchar(256) COLLATE utf8_slovenian_ci NOT NULL,
  `spol` varchar(1) COLLATE utf8_slovenian_ci NOT NULL,
  `username` varchar(45) COLLATE utf8_slovenian_ci NOT NULL,
  `password` varchar(256) COLLATE utf8_slovenian_ci NOT NULL,
  `jmbg` varchar(13) COLLATE utf8_slovenian_ci NOT NULL,
  `datum_rodjenja` date NOT NULL,
  `mjesto_rodjenja` varchar(256) COLLATE utf8_slovenian_ci NOT NULL,
  `semestar` int(11) NOT NULL,
  `odsjek_id` int(11) NOT NULL,
  `adresa` varchar(256) COLLATE utf8_slovenian_ci NOT NULL,
  `telefon` varchar(256) COLLATE utf8_slovenian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_slovenian_ci;

--
-- Dumping data for table `student`
--

-- Password: pass
INSERT INTO `student` (`id`, `ime`, `prezime`, `email`, `spol`, `username`, `password`, `jmbg`, `datum_rodjenja`, `mjesto_rodjenja`, `semestar`, `odsjek_id`, `adresa`, `telefon`) VALUES
(1,'Mehmed','Baždarević','mbazdarevic@etf.unsa.ba','M','mesa1','1a1dc91c907325c69271ddf0c944bc72','2810995180046','1995-10-28','Višegrad',2,1,'Zvornicka bb','033256322'),
(3,'Silvana','Armenulić','sarmenulic@etf.unsa.ba','Ž','silvana2','1a1dc91c907325c69271ddf0c944bc72','1805994232245','1994-05-18','Doboj',3,1,'Pofalićka 2','033568984'),
(5,'Nihad','Alibegović','nalibegovic@etf.unsa.ba','M','nihad1','1a1dc91c907325c69271ddf0c944bc72','0101996116432','1995-01-01','Gornji Vakuf',2,2,'Sutjeska 23','035332312');

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

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `student_ibfk_1` FOREIGN KEY (`odsjek_id`) REFERENCES `odsjek` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;