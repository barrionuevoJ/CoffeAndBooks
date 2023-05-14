-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-05-2023 a las 05:24:02
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

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
-- Estructura de tabla para la tabla `autores`
--

CREATE TABLE IF NOT EXISTS `autores` (
  `id_autor` int(11) NOT NULL AUTO_INCREMENT,
  `autor` varchar(100) NOT NULL,
  PRIMARY KEY (`id_autor`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `autores`
--

INSERT INTO `autores` (`id_autor`, `autor`) VALUES
(1, 'Adam Silvera'),
(2, 'Veronica Roth'),
(3, 'Mo Xiang Tong Xiu'),
(4, 'E.L James'),
(5, 'Marissa Meyers'),
(6, 'J.K Rolling'),
(7, 'DC'),
(8, 'Jane Austen'),
(9, 'Toboso Yana (Ilustrations) & Jun Hioki');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE IF NOT EXISTS `categorias` (
  `id_categoria` int(11) NOT NULL AUTO_INCREMENT,
  `categoria` varchar(100) NOT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id_categoria`, `categoria`) VALUES
(1, 'ofertas'),
(2, 'mas_vendidos'),
(3, 'interes');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `generos`
--

CREATE TABLE IF NOT EXISTS `generos` (
  `id_genero` int(11) NOT NULL AUTO_INCREMENT,
  `genero` varchar(50) NOT NULL,
  PRIMARY KEY (`id_genero`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `generos`
--

INSERT INTO `generos` (`id_genero`, `genero`) VALUES
(1, 'Literatura Juvenil'),
(2, 'BL'),
(3, 'XianXia'),
(4, 'Fantasia'),
(5, 'Romance'),
(6, 'Erotic Romance'),
(7, 'Comic');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE IF NOT EXISTS `productos` (
  `id_producto` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `cantidad` int(11) DEFAULT 1,
  `precio` int(11) DEFAULT 1,
  `img` varchar(255) DEFAULT 'default-image.png',
  `descuento` int(11) DEFAULT 0,
  `id_autor` int(11) NOT NULL,
  `id_genero` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL,
  PRIMARY KEY (`id_producto`),
  KEY `FK_cdab2f19-6071-4278-b7b9-f7ebb0db7a61` (`id_categoria`),
  KEY `FK_600de83d-6964-4fe9-bc78-10d4e3d3f46d` (`id_autor`),
  KEY `FK_f3246963-dae2-4d49-9a0a-7b1fe23d4be4` (`id_genero`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_producto`, `titulo`, `descripcion`, `cantidad`, `precio`, `img`, `descuento`, `id_autor`, `id_genero`, `id_categoria`) VALUES
(1, 'They both die at the end', '¿Puede un solo día albergar toda una vida? En un presente alternativo, en el que es posible predecir la muerte con un plazo de veinticuatro horas, Mateo Torrez y Rufus Emeterio acaban de recibir la llamada más temida: la misma que te avisa de que ha llegado tu hora final.', 2, 13239, 'They-Both-Die-At-The-End.jpg', 4, 1, 1, 2),
(2, 'Divergent', 'En el Chicago distópico de Beatrice, la sociedad está dividida en cinco facciones. En una ceremonia anual, todos los chicos de dieciséis años deben decidir a qué facción dedicarán el resto de sus vidas. Beatrice tiene que elegir entre quedarse con su familia... y ser quien realmente es. Así que toma una decisión que sorprenderá a todo el mundo, incluida ella...', 2, 7999, 'Divergent.jpg', 9, 2, 1, 2),
(3, 'Four', 'Llega el esperado spin-off de la trilogía de \'Divergente\', contado desde el punto de vista de Cuatro, con cuatro historias distintas (La transferencia, El iniciado, El hijo, El traidor y tres escenas adicionales), que darán a los lectores de la serie superventas \'Divergente\', la mirada del popular Tobias sobre distintos momentos únicos en la épica trilogía. Cuatro historias cortas y tres escenas inéditas que te revelarán lo que nunca llegaste a saber del mundo de Divergente.', 2, 8500, 'Four.jpg', 20, 2, 1, 2),
(4, 'Heartless', 'Mucho antes de convertirse en el terror del Pais de las Maravillas, la Reina de Corazones era una chica que tan solo queria enamorarse. Catherine es una de las jovenes mas deseadas de Corazones. Es la favorita del Rey, pero ella quiere vivir bajo sus propias reglas y tomar las riendas de su vida. Pero, ¿a que precio?. Meyer combino elementos de la oscuridad y de la luz, del destino y del libre albedrio, del amor y del odio, en una historia inolvidable sobre como la Reina de Corazones dejo de ser una joven que soñaba con el verdadero amor y la libertad y se convirtio en una cruel mujer a la que todos recuerdan por su frase \'Que le corten la cabeza\'.', 2, 5599, 'Heartless.jpg', 8, 5, 1, 2),
(5, 'Mo Dao Zu Shi', 'Después de revivir en el cuerpo de una persona llamada Mo Xuanyu, Wei Wuxian se reencuentra con un viejo conocido con el cual deberá resolver un misterio que probablemente está cubriendo algo mayor…', 2, 9764, 'Mo-Dao-Zu-Shi-Third-Tome.jpg', 7, 3, 2, 1),
(6, 'Tian Guan Ci Fu', 'Su Alteza el Príncipe Heredero ha vuelto a ascender al cielo, pero esta vez no tiene ni a los seguidores ni a ningún incienso quemado a su nombre. Un día, en su camino a su hogar se encuentra con un jovén misterioso a quien le ofrece un lugar para dormir. Sin embargo, este misterioso jovén resulta ser nada más ni nada menos que el Rey Fantasma: Hua Cheng.', 2, 12500, 'Tian-Guan-Ci-Fu-Forth-Tome.jpg', 20, 3, 3, 1),
(7, 'Batman Detective Comics', 'Pensaron que la Liga de las Sombras era solo un rumor: una sociedad secreta de asesinos nihilistas, a menudo susurrados pero nunca vistos. Pero ahora la Liga está aquí, en Gotham. Están destruyendo al equipo de Batman, uno por uno. Y su siniestra líder, Lady Shiva, ha venido a reclamar a su hija… o a destruirla', 2, 4555, 'Batam-Detective-Comics.jpg', 10, 7, 7, 1),
(8, 'Twisted Wonderland The Novel \'Chapter one: Red Roses Tyrant\'', 'Novela basada en el prologo y primer capitulo del Famoso juego Twisted Wonderland. Luego de despertar en un extraño mundo conocido como Twisted Wonderland, Kuroki Yuuya se encuentra envuelto en una peligrosa situación, sin forma de volver a su hogar y rodeado de personas que tienen la habilidad de usar magia, siendo el un humano común y corriente.', 2, 1520, 'Twisted-Wonderland-The-Novel.jpg', 20, 9, 1, 1),
(9, 'Harry Potter And The Philosopher Stone', 'Pibito con lentes escapando de un pelado sin nariz', 2, 6850, 'Harry-Potter-ATPS.jpg', 5, 6, 4, 3),
(10, 'Harry Potter And The Sourcerers Stone', 'Pibito con lentes escapando de un pelado sin nariz 2', 2, 10995, 'Harry-Potter-ATSS.png', 5, 6, 4, 3),
(11, 'Fifty Shadows of grey', 'Cuando la estudiante de literatura Anastasia Steele recibe el encargo de entrevistar al exitoso y joven empresario Christian Grey, queda impresionada al encontrarse ante un hombre atractivo, seductor y también muy intimidante. La inexperta e inocente Ana intenta olvidarle, pero pronto comprende cuánto le desea. Grey está atormentado por sus propios demonios y le consume la necesidad de controlarlo todo, pero a su vez se ve incapaz de resistirse a la serena belleza de Ana, a su inteligencia y a su espíritu independiente. Debe admitir que la desea, pero bajo ciertas condiciones. Cuando la pareja por fin inicia una apasionada relación, las peculiares prácticas eróticas de Grey desconciertan a Ana, al tiempo que ella descubre los límites de sus propios y más oscuros deseos...', 2, 4179, 'Fifty-Shadows-of-Grey.jpg', 15, 4, 6, 3),
(12, 'Pride And Prejudice', 'Con la llegada del rico y apuesto Mr. Darcy a su región, las vidas de los Bennet y sus cinco hijas se vuelven del revés. El orgullo y la distancia social, la astucia y la hipocresía, los malentendidos y los juicios apresurados abocan a sus personajes al escándalo y al dolor, pero también a la comprensión, el conocimiento y el amor verdadero. Esta edición presenta al lector una nueva traducción al castellano que devuelve todo su esplendor al ingenio y la finísima ironía de la prosa de Austen. Satírica, antirromántica, profunda y mordaz a un tiempo, la obra de Jane Austen nace de la observación de la vida doméstica y de un profundo conocimiento de la condición humana.', 2, 3240, 'Pride-and-Prejudice.jpg', 15, 8, 5, 3);

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

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `FK_600de83d-6964-4fe9-bc78-10d4e3d3f46d` FOREIGN KEY (`id_autor`) REFERENCES `autores` (`id_autor`),
  ADD CONSTRAINT `FK_cdab2f19-6071-4278-b7b9-f7ebb0db7a61` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id_categoria`),
  ADD CONSTRAINT `FK_f3246963-dae2-4d49-9a0a-7b1fe23d4be4` FOREIGN KEY (`id_genero`) REFERENCES `generos` (`id_genero`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
