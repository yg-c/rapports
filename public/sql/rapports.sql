-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  mer. 03 juil. 2019 à 18:46
-- Version du serveur :  5.7.26
-- Version de PHP :  7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `rapports`
--

-- --------------------------------------------------------

--
-- Structure de la table `rapport`
--

DROP TABLE IF EXISTS `rapport`;
CREATE TABLE IF NOT EXISTS `rapport` (
  `idRapport` int(11) NOT NULL AUTO_INCREMENT,
  `dateRapport` date NOT NULL,
  `caBoissons` decimal(10,2) NOT NULL,
  `caNourriture` decimal(10,2) NOT NULL,
  `facture77` decimal(10,2) DEFAULT NULL,
  `facture25` decimal(10,2) DEFAULT NULL,
  `bons` decimal(10,2) DEFAULT NULL,
  `chf` decimal(10,2) DEFAULT NULL,
  `eur` decimal(10,2) DEFAULT NULL,
  `reka` decimal(10,2) DEFAULT NULL,
  `idRestaurant` int(11) NOT NULL,
  PRIMARY KEY (`idRapport`),
  KEY `idRestaurant` (`idRestaurant`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `rapport`
--

INSERT INTO `rapport` (`idRapport`, `dateRapport`, `caBoissons`, `caNourriture`, `facture77`, `facture25`, `bons`, `chf`, `eur`, `reka`, `idRestaurant`) VALUES
(10, '2019-07-01', '1.00', '1.00', '1.00', '1.00', '1.00', '1.00', '1.00', '1.00', 1),
(11, '2019-07-02', '2.00', '2.00', '2.00', '2.00', '2.00', '2.00', '2.00', '2.00', 2),
(12, '2019-07-03', '33.33', '33.33', '33.33', '33.33', '33.33', '33.33', '33.33', '33.33', 2);

-- --------------------------------------------------------

--
-- Structure de la table `restaurant`
--

DROP TABLE IF EXISTS `restaurant`;
CREATE TABLE IF NOT EXISTS `restaurant` (
  `idRestaurant` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `compteCaisse` int(11) NOT NULL,
  `compteCout` int(11) NOT NULL,
  `compteChf` int(11) NOT NULL,
  `compteEur` int(11) NOT NULL,
  `compteReka` int(11) NOT NULL,
  PRIMARY KEY (`idRestaurant`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `restaurant`
--

INSERT INTO `restaurant` (`idRestaurant`, `name`, `compteCaisse`, `compteCout`, `compteChf`, `compteEur`, `compteReka`) VALUES
(1, 'Arnouva', 10050, 5130, 10041, 10043, 10042),
(2, 'Cry d\'Er', 10051, 5110, 10021, 10023, 10022);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `rapport`
--
ALTER TABLE `rapport`
  ADD CONSTRAINT `rapport_ibfk_1` FOREIGN KEY (`idRestaurant`) REFERENCES `restaurant` (`idRestaurant`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
