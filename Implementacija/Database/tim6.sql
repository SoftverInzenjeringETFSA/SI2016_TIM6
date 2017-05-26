-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 25, 2017 at 08:18 PM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

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
-- Drop all tables first
--

DROP TABLE IF EXISTS prijava;
DROP TABLE IF EXISTS ispit;
DROP TABLE IF EXISTS obavjestenja;
DROP TABLE IF EXISTS pohadjanje;
DROP TABLE IF EXISTS student;
DROP TABLE IF EXISTS predmet;
DROP TABLE IF EXISTS odsjek;
DROP TABLE IF EXISTS profesor;
DROP TABLE IF EXISTS fakultet;

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
(2, 'Ekonomski fakultet'),
(3, 'Fakultet za saobraćaj i komunikacije'),
(4, 'Fakultet zdravstvenih studija'),
(5, 'Akademija likovnih umjetnosti'),
(6, 'Fakultet političkih nauka'),
(7, 'Medicinski fakultet'),
(8, 'Farmaceutski fakultet'),
(9, 'Filozofski fakultet'),
(10, 'Pravni fakultet'),
(11, 'Prirodno-matematički fakultet'),
(12, 'Građevinski fakultet'),
(13, 'Mašinski fakultet');

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
(1, '2017-06-17 00:00:00', '2017-06-24 12:00:00', 1),
(2, '2017-05-30 00:00:00', '2017-05-31 10:00:00', 2),
(3, '2017-06-28 00:00:00', '2017-06-30 09:00:00', 2),
(4, '2017-04-10 00:00:00', '2017-04-20 15:00:00', 4),
(5, '2017-07-07 00:00:00', '2017-07-10 15:00:00', 6),
(6, '2017-06-14 00:00:00', '2017-06-17 12:00:00', 7),
(7, '2017-06-01 00:00:00', '2017-06-10 15:00:00', 9),
(8, '2017-07-02 00:00:00', '2017-07-05 13:00:00', 9),
(9, '2017-06-10 00:00:00', '2017-06-13 09:00:00', 10),
(10, '2017-06-08 00:00:00', '2017-06-10 12:00:00', 13),
(11, '2017-06-23 00:00:00', '2017-06-25 09:00:00', 13),
(12, '2017-07-10 00:00:00', '2017-07-12 09:00:00', 14),
(13, '2017-06-04 00:00:00', '2017-06-11 15:00:00', 15),
(14, '2017-06-13 00:00:00', '2017-06-20 10:00:00', 16),
(15, '2017-07-11 00:00:00', '2017-07-18 10:00:00', 18),
(16, '2017-05-28 00:00:00', '2017-05-30 09:00:00', 19),
(17, '2017-05-24 00:00:00', '2017-05-31 12:00:00', 20),
(18, '2017-06-28 00:00:00', '2017-06-30 13:00:00', 20);

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
(1, 'Pažnja', 'Obavještavaju se studenti da je otkazan ispit iz Matematike 1.', '2017-05-09 11:45:06', 2),
(2, 'Obavijest', 'S obzirom na veliki broj studenata formirane su nove grupe za vježbe iz Fizike 1.', '2017-05-10 12:53:02', 1),
(3, 'Obavijest', 'Dragi studenti, 24.05.17. neće biti predavanja iz OSP jer sam na putu. LP, V.prof.dr Samir Omanovic', '2017-05-20 18:37:32', 11),
(4, 'Obavijest', 'Sutra u 9:00 će se održati prvi SI sastanak. Dogovorit ćemo se za teme i tehnologije. SI nastavni ansambl', '2017-05-24 20:39:46', 6),
(5, 'Obavijest', 'Za realizaciju demonstratorskih vježbi iz predmeta Linearna algebra i geometrija potreban je izvjestan broj demonstratora. ', '2017-05-25 21:45:42', 14),
(6, 'Obavijest', 'Obavještavaju se studenti da će se vježbe planirane za 10.5.2017, održati 12.5.2017. u istom terminu. ', '2017-05-18 18:45:42', 42),
(7, 'Obavijest', 'Vježbe se nastavljaju odvijati prema ranije utvrđenom rasporedu. ', '2017-05-19 16:21:23', 46),
(8, 'Obavijest', 'Urađene su male korekcije u zadaći 2, pa se studentima savjetuje da istu ponovo pogledaju. ', '2017-05-22 10:07:06', 7);

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
(1, 'Odsjek za računarstvo i informatiku', 1),
(2, 'Odsjek za automatiku i elektroniku', 1),
(3, 'Odsjek za telekomunikacije', 1),
(4, 'Odsjek za energetiku', 1),
(5, 'Odsjek za menadžment', 2),
(6, 'Odsjek za poslovni biznis', 2),
(7, 'Odsjek za cestovni saobraćaj', 3),
(8, 'Odsjek za vazdušni saobraćaj', 3),
(9, 'Odsjek za željeznički saobraćaj', 3),
(10, 'Odsjek za komunikacije', 3),
(11, 'Odsjek za politologiju', 6),
(12, 'Odsjek za komunikologiju', 6),
(13, 'Odsjek za sociologiju', 6),
(14, 'Odsjek za SIMS', 6),
(15, 'Odsjek za anglistiku', 9),
(16, 'Odsjek za germanistiku', 9),
(17, 'Odsjek za filozifiju', 9),
(18, 'Odsjek za psihologiju', 9),
(19, 'Odsjek za pedagogiju', 9),
(20, 'Odsjek za bosanski, hrvatski i srpski jezik ', 9),
(21, 'Odsjek za matematiku', 11),
(22, 'Odsjek za fiziku', 11),
(23, 'Odsjek za hemiju', 11),
(24, 'Odsjek za biologiju', 11),
(25, 'Odsjek za geografiju', 11),
(26, 'Odsjek za mašinski proizvodni inžinjering', 13),
(27, 'Odsjek za industrijsko inžinjerstvo i menadžment', 13),
(28, 'Odsjek za energetiku, procesnu tehniku i okolinsko inžinjerstvo', 13),
(29, 'Odsjek za tehnologiju drveta ', 13),
(30, 'Odsjek za motore i vozila', 13),
(31, 'Odsjek odbrambene tehnologije', 13),
(32, 'Odsjek za mašinske konstrukcije', 13),
(33, 'Opći odsjek', 7);

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
(1, NULL, 1, 1),
(2, 10, 2, 1),
(3, 9, 4, 1),
(4, 9, 9, 2),
(5, NULL, 6, 2),
(6, 6, 3, 2),
(7, 7, 22, 2),
(8, 10, 23, 2),
(9, 10, 11, 3),
(10, 9, 10, 3),
(11, 6, 17, 4),
(12, 7, 18, 4),
(13, 8, 19, 4),
(14, 6, 20, 5),
(15, 10, 21, 5),
(16, NULL, 16, 6),
(17, NULL, 15, 7),
(18, NULL, 1, 8),
(19, 8, 13, 8),
(20, NULL, 12, 9),
(21, 6, 7, 9),
(22, 7, 24, 10),
(23, 8, 25, 10),
(24, 6, 27, 10),
(25, 10, 28, 11),
(26, 8, 29, 11),
(27, 6, 1, 12),
(28, 7, 2, 12),
(29, 8, 4, 12),
(30, 9, 9, 13),
(31, 10, 6, 13),
(32, NULL, 3, 14),
(33, 8, 22, 14),
(34, 7, 23, 14),
(35, NULL, 11, 15),
(36, 6, 10, 15),
(37, 10, 2, 8),
(38, 8, 16, 8),
(39, 10, 7, 8),
(40, NULL, 42, 8),
(41, NULL, 46, 8),
(42, 7, 11, 8),
(43, 8, 26, 8);

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
(1, 'Inženjerska fizika 1', 1, 4, 1),
(2, 'Inženjerska matematika 1', 1, 1, 1),
(3, 'Osnove elektrotehnike', 1, 3, 1),
(4, 'Tehnike programiranja', 2, 6, 1),
(5, 'Operativni sistemi', 2, 5, 1),
(6, 'Inženjerska matematika 2', 2, 1, 1),
(7, 'Diskretna matematika', 3, 6, 1),
(8, 'Računarske arhitekture', 4, 2, 1),
(9, 'Operativni sistemi', 2, 5, 1),
(10, 'Vjerovatnoća i statistika', 2, 10, 1),
(11, 'Matematička logika i teorija izračunljivosti', 2, 6, 1),
(12, 'Elektronički elementi ', 2, 9, 2),
(13, 'Električni krugovi 1', 2, 3, 2),
(14, 'Inženjerska fizika 2', 2, 4, 2),
(15, 'Tehnike programiranja', 2, 6, 2),
(16, 'Linearni sistemi automatskog upravljanja', 4, 27, 2),
(17, 'Aktuatori', 1, 26, 2),
(18, 'Računarsko modeliranje i simulacija', 1, 5, 1),
(19, 'Osnove računarstva', 1, 8, 2),
(20, 'Digitalni sistemi upravljanja', 1, 1, 2),
(21, 'Osnove elektrotehnike', 1, 3, 2),
(22, 'Linearna algebra i geometrija', 1, 7, 1),
(23, 'Robotika 1', 1, 26, 2),
(24, 'Osnove baza podataka', 3, 16, 1),
(25, 'Razvoj programskih rješenja', 3, 12, 1),
(26, 'Numerički algoritmi', 3, 6, 1),
(27, 'Sistemsko programiranje', 3, 5, 1),
(28, 'Algoritmi i strukture podataka', 3, 11, 1),
(29, 'Logički dizajn', 3, 2, 1),
(30, 'Automati i formalni jezici', 4, 11, 1),
(31, 'Objektno orijentisana analiza', 4, 12, 1),
(32, 'Razvoj mobilnih aplikacija', 4, 14, 1),
(33, 'Osnove računarskih mreža', 4, 15, 1),
(34, 'Ugradbeni sistemi', 4, 13, 1),
(35, 'Komunikacijske tehnologije', 1, 9, 17),
(36, 'Anatomija čovjeka 1', 3, 24, 33),
(37, 'Histologija 1', 1, 25, 33),
(38, 'Fiziologija', 3, 24, 33),
(39, 'Klasična mehanika 1', 3, 17, 22),
(40, 'Matematička analiza 1', 1, 23, 22),
(41, 'Matematička analiza 2', 2, 23, 22),
(42, 'Matematičke metode fizike 1', 3, 18, 22),
(43, 'Matematičke metode fizike 2', 4, 18, 22),
(44, 'Matematičke metode fizike 3', 5, 18, 22),
(45, 'Elektromagnetizam', 3, 19, 22),
(46, 'Optika', 4, 19, 22),
(47, 'Atomska fizika', 4, 19, 22),
(48, 'Opća hemija za fizičare', 2, 20, 22),
(49, 'Teorija elektromagnetnog polja', 5, 18, 22),
(50, 'Kvantna mehanika 1', 5, 21, 22),
(51, 'Kvantna mehanika 2', 6, 21, 22),
(52, 'Specijalna teorija relativnosti', 5, 22, 22),
(53, 'Digitalni integrirani krugovi', 5, 26, 2),
(54, 'Nelinearni sistemi automatskog upravljanja', 7, 27, 2),
(55, 'Inženjerska matematika 3', 3, 29, 2),
(56, 'Senzori i mjerenja', 3, 26, 2);

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
(3, 1, 3),
(4, 5, 9),
(5, 14, 7),
(6, 6, 8),
(7, 5, 8),
(8, 15, 4),
(9, 8, 9),
(10, 9, 9),
(11, 12, 10),
(12, 6, 5),
(13, 4, 4),
(14, 2, 2);

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
(6, 'Željko', 'Jurić', 'zjuric@etf.unsa.ba'),
(7, 'Almasa', 'Odžak', 'aodzak@etf.unsa.ba'),
(8, 'Vedran', 'Ljubović', 'vljubovic@etf.unsa.ba'),
(9, 'Jasna', 'Pašić', 'jpasic@etf.unsa.ba'),
(10, 'Alma', 'Ribić', 'aribic@etf.usna.ba'),
(11, 'Haris', 'Šupić', 'hsupic@etf.unsa.ba'),
(12, 'Dzenana', 'Đonko', 'ddonko@etf.unsa.ba'),
(13, 'Samim', 'Konjicija', 'skonjicija@etf.unsa.ba'),
(14, 'Vensada', 'Okanovic', 'vokanovic@etf.unsa.ba'),
(15, 'Kemal', 'Hajdarevic', 'khajdarevic@etf.unsa.ba'),
(16, 'Emir', 'Buza', 'ebuza@etf.unsa.ba'),
(17, 'Senad', 'Odžak', 'sodzak@pmf.unsa.ba'),
(18, 'Azra', 'Gazibegović-Busuladžić', 'agazibegovic@pmf.unsa.ba'),
(19, 'Mustafa', 'Busuladžić', 'mbusuladzic@pmf.unsa.ba'),
(20, 'Dejan', 'Milošević', 'dmilosevic@pmf.unsa.ba'),
(21, 'Elvedin', 'Hasović', 'ehasovic@pmf.unsa.ba'),
(22, 'Aner', 'Čerkić', 'acerkic@pmf.unsa.ba'),
(23, 'Nedžad', 'Dukić', 'ndukic@pmf.unsa.ba'),
(24, 'Amela', 'Kulenović', 'akulenovic@mf.unsa.ba'),
(25, 'Zakira', 'Mornjaković', 'zmornjakovic@mf.unsa.ba'),
(26, 'Tarik', 'Uzunović', 'tuzunovic@etf.unsa.ba'),
(27, 'Mujo', 'Hebibović', 'mhebibovic@etf.unsa.ba'),
(28, 'Jasmin', 'Velagić', 'jvelagic@etf.unsa.ba'),
(29, 'Senad', 'Huseinbegović', '@etf.unsa.ba');

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

INSERT INTO `student` (`id`, `ime`, `prezime`, `email`, `spol`, `username`, `password`, `jmbg`, `datum_rodjenja`, `mjesto_rodjenja`, `semestar`, `odsjek_id`, `adresa`, `telefon`) VALUES
(1, 'Mehmed', 'Baždarević', 'mbazdarevic@etf.unsa.ba', 'm', 'mesa1', 'd101975f12152ad8aee35ff1c1b48da2', '2810995180046', '1995-10-28', 'Višegrad', 2, 1, 'Zvornicka bb', '033256322'),
(2, 'Silvana', 'Armenulić', 'sarmenulic@etf.unsa.ba', 'ž', 'silvana2', '1474223e05c801a658c9ff3453c1d6ea', '1805994232245', '1994-05-18', 'Doboj', 3, 1, 'Pofalićka 2', '033568984'),
(3, 'Nihad', 'Alibegović', 'nalibegovic@etf.unsa.ba', 'm', 'nihad1', '18bdbd4f9a4d74ebea4969c5653b31cb', '0101996116432', '1995-01-01', 'Gornji Vakuf', 2, 2, 'Sutjeska 23', '035332312'),
(4, 'Enes', 'Babić', 'enes.predator@gmail.com', 'm', 'enes.babic', 'd9905c3d0bc20ec55c51abcaec2271e0', '1006996190058', '1996-06-10', 'Zenica', 3, 33, 'Lukovo polje 12', '062225883'),
(5, 'Nermedin', 'Džeković', 'nermedindz@gmail.com', 'm', 'nermedin.dzekovic', '3cecd24bfda12e41377494df16866c3f', '1205997190658', '1997-05-12', 'Sarajevo', 2, 13, 'Hrasnička 120', '061584753'),
(6, 'Nudžeim', 'Selimović', 'nudzeims@hotmail.com', 'm', 'nudzeim.selimovic', '5aa3226bc0e8db970384ed8f7393a092', '0811995190065', '1995-11-08', 'Sarajevo', 5, 15, 'Adema Buće 15', '062847596'),
(7, 'Senad', 'Isaković', 'isakovics@gmail.com', 'm', 'senad.isakovic', '147aaf1b6ed88a7bab7ed34a2f4e9179', '2207994190008', '1994-07-22', 'Tuzla', 5, 11, 'Mala aleja 12', '061358742'),
(8, 'Emir', 'Baručija', 'emir.barucija@gmail.com', 'm', 'emir.barucija', '2787f38ac501c2f79496ca96adc6e8a1', '1109995190066', '1995-09-11', 'Zenica', 6, 1, 'Travnička cesta 36', '062554128'),
(9, 'Šeila', 'Bećirović', 'seila.becirovic@gmail.com', 'ž', 'seila.becirovic', '79cfd09dc39ff4a89c23aee76a52b7ec', '0401995100015', '1995-01-04', 'Sarajevo', 6, 7, 'Adresa 345', '062358452'),
(10, 'Jasmina', 'Bajramović', 'jasmina.bajramovic@gmail.com', 'ž', 'jasmina.bajramovic', 'eba30a5ebd86e1bfe22e8b1d7e66353e', '0805995100033', '1995-05-08', 'Zavidovići', 6, 6, 'Adresa 321', '061123123'),
(11, 'Edin', 'Begić', 'edin.begic@gmail.com', 'm', 'edin.begic', '2a3a075e32d0d0054c54eacb4f003483', '1405994190056', '1994-05-14', 'Sarajevo', 6, 5, 'Dolac Malta 15', '061874458'),
(12, 'Ervin', 'Beus', 'ervin.beus@gmail.com', 'm', 'ervin.beus', 'fb7587134d8061ca2351e61386d4e430', '0105993190012', '1993-05-01', 'Kakanj', 6, 3, 'Čengić vila 12', '066985214'),
(13, 'Nejra', 'Bahtić', 'nejra.bahtic@gmail.com', 'ž', 'nejra.bahtic', '47a016a1cf1cb8c5274f52d1d21197bf', '0808994100135', '1994-08-08', 'Zenica', 4, 9, 'Pofalićka 33', '062458745'),
(14, 'Emir', 'Bećirović', 'emir.doktor@gmail.com', 'm', 'doktor', '288d78dd363fb0f4736f8e30c1f663a8', '0108995190054', '1995-08-01', 'Sarajevo', 6, 8, 'Trg solidarnosti 16', '062632854'),
(15, 'Zerina', 'Turković', 'emir.doktor@gmail.com', 'ž', 'zerina.turkovic', '0f5cff3d17d53eaaef6f82097c0c6821', '1204995100013', '1995-04-12', 'Sarajevo', 4, 8, 'Branilaca Dobrinje 13', '061225874');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `ispit`
--
ALTER TABLE `ispit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `obavjestenja`
--
ALTER TABLE `obavjestenja`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `odsjek`
--
ALTER TABLE `odsjek`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT for table `pohadjanje`
--
ALTER TABLE `pohadjanje`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
--
-- AUTO_INCREMENT for table `predmet`
--
ALTER TABLE `predmet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
--
-- AUTO_INCREMENT for table `prijava`
--
ALTER TABLE `prijava`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `profesor`
--
ALTER TABLE `profesor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
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
