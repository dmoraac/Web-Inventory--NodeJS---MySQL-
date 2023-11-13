-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 24-10-2023 a las 19:06:57
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `crud_app_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_customer`
--

DROP TABLE IF EXISTS `tbl_customer`;
CREATE TABLE IF NOT EXISTS `tbl_customer` (
  `id` int NOT NULL,
  `name` varchar(25) COLLATE utf8mb3_bin NOT NULL,
  `last_name` varchar(25) COLLATE utf8mb3_bin NOT NULL,
  `user` varchar(25) COLLATE utf8mb3_bin NOT NULL,
  `password` varchar(25) COLLATE utf8mb3_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;

--
-- Volcado de datos para la tabla `tbl_customer`
--

INSERT INTO `tbl_customer` (`id`, `name`, `last_name`, `user`, `password`) VALUES
(115100895, 'Dylan', 'Mora', 'dmora92', '1234');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
