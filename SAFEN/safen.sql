-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-05-2026 a las 22:49:45
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `safen`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `telefono` varchar(20) NOT NULL,
  `foto` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `correo`, `password`, `telefono`, `foto`) VALUES
(1, 'Diegoqrsll', 'diego.prueba@gmail.com', '$2y$10$AootRMvL3Cfyz8ThQ3ouqeexC6ETwrx6DvYayvyzJRNurfwr5yeRe', '', ''),
(2, 'diegoquintanilla', 'rosalesdiego008@gmail.com', '$2y$10$4L0EZzHlWpoXdPTO4FsMRe8yFAfnpHrcWbXnc1dtd.aTEU2kR21LS', '', ''),
(3, 'nosee', 'pruebaogin@gmail.com', '$2y$10$DiCtD4UZ6GPEPVWMfh1JLuMLvn2/6SR2fMhYdyljxoXt0qMTmWpmq', '', ''),
(4, 'nouuu', 'prueba2@gmail.com', '$2y$10$o6i/ckGTCBg7WADcQNSNm.FO8tNXSQrrE1yGhAxdoxr3XkHMcZzya', '', ''),
(5, 'maxrosalees', 'maxrosalees2@gmail.com', '$2y$10$KtgrFZzVRxvlbS/hwEuYAeJh24dDh2nNbPDUKx1SyjdZUZhG8./.m', '+503 7596-0942', '1778259116_gato-meme.gif'),
(6, 'Marjorie', 'mar@gmail.com', '$2y$10$vC8J1p0as6mmETmert6yoO1nI1qmF6COUqXNVR8nuLkzmN9JGk3XC', '', ''),
(7, 'quintanilla', 'quintanilla@gmail.com', '$2y$10$10dnTSPrg0BnZxGAqOu29eElmq49Ri80e2LH/ojXHSphD8mCidmXO', '', ''),
(8, 'diegooquintanilla', 'diegoq@gmail.com', '$2y$10$l4Jpl7kDIFySY1mKjpkWVe8x461EA85QnMh.q8JfrJqbCWbODuZ.e', '', '1778262054_a914bd466e8986150e2ff3eb6eca4c5b.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
