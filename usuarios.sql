-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-05-2023 a las 01:12:46
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `coffeandbooks_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id_user` int(11) NOT NULL,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(255) NOT NULL,
  `profileImg` varchar(255) DEFAULT 'default-user.png',
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_user`, `firstName`, `lastName`, `email`, `password`, `profileImg`) VALUES
(1, 'Julian', 'Barrionuevo', 'julianbarrionuevo10@gmail.com', '$2a$10$HC7yBeNKloOa0UssmI8yoeLHBA5GaLwOdkyXVp7AU50ZoLoUIk0fC', 'user-img-1680741202868.jpeg'),
(2, 'Kiara', 'Ramos', 'kiarramos@gmail.com', '$2a$10$Gf45YBVAt1dvxEBgvx8z1.NeHK5GZlpqKd5OK5UoRryMmJHP9DFAq', 'user-img-1680741482826.jpeg'),
(3, 'Vicenzo', 'Rubio', 'vaclod892@gmail.com', '$2a$10$MyfpxXa6XWThLikVkcifJeFb7o2.WuDeZJBUvcje929VfKZrZRc9m', 'user-img-1680825070740.png'),
(4, 'Walter', 'White', 'Heisenberg@gmail.com', '$2a$10$Ph8rYsFBgO7eaLMnCY4N/eKY9LIbDt4XkO50RMwDyQNEAwSmzi7ru', 'user-img-1680801454630.jpg'),
(5, 'Leon', 'Kennedy', 'leoncapo@gmail.com', '$2a$10$sQFAZuacVSgYAwp4JxrsNOsDJCNcCIK57VIsoUAbMdFcjGO4gunX2', 'user-img-1680932215990.jpg'),
(6, 'EvilJuli', 'Barrioviejo', 'eviljuli@gmail.com', '$2a$10$gS/kiUtonmyX2.KqTmNOEeG51SYzJKXxM3.WC7Y515pDnht0DmG9O', 'user-img-1681074077568.jpeg'),
(7, 'alby', 'Ramos', 'kiararamosrocha1@gmail.com', '$2a$10$JDusjA6pjoM.nAW4l6EzVO5J/hsmYPrpO8EWe7.L1JnQykBohL9Am', 'default-user.png');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
