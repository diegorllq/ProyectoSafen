-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3307
-- Tiempo de generación: 11-05-2026 a las 06:12:09
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
-- Estructura de tabla para la tabla `donaciones`
--

CREATE TABLE `donaciones` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `monto` decimal(10,2) NOT NULL,
  `metodo_pago` varchar(50) DEFAULT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `donaciones`
--

INSERT INTO `donaciones` (`id`, `usuario_id`, `monto`, `metodo_pago`, `fecha`) VALUES
(1, 2, 100.00, 'paypal', '2026-05-10 22:09:53'),
(2, 2, 100.00, 'paypal', '2026-05-10 22:19:26'),
(3, 2, 100.00, 'paypal', '2026-05-10 22:23:35'),
(4, 2, 100.00, 'paypal', '2026-05-10 22:27:29'),
(5, 2, 250.00, 'paypal', '2026-05-11 03:12:45'),
(6, 2, 250.50, 'paypal', '2026-05-11 04:06:27'),
(7, 2, 1500.25, 'tarjeta', '2026-05-11 04:07:04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `correo` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `foto` varchar(255) DEFAULT NULL,
  `reset_token` varchar(255) DEFAULT NULL,
  `token_expira` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `correo`, `password`, `telefono`, `foto`, `reset_token`, `token_expira`) VALUES
(1, 'diegoo7', 'diego8@gmail.com', '$2y$10$eUSWvO9KzQ/w4ZM.U4tFkugyoA4ioqSpcYkL1eYNNBnzfHfurtrkW', '', '1778302436_4c2dcd2825135aa4fa1104e5d5beb625.jpg', NULL, NULL),
(2, 'diegorsl', 'rosalesdiego008@gmail.com', '$2y$10$zcmANuvU9fR.oq1sw0SdjeqbhIKPD5UvNhyzi5qPz66LpRQb3GO3i', '', NULL, NULL, NULL),
(3, 'maxxrosales', 'maxrosales2@gmail.com', '$2y$10$Ko8vYBIIVljc67C.FCF9X.jAyeYJDmGz9.3S.CKOroopWXHtQ9s9e', NULL, NULL, NULL, NULL),
(4, 'Diego022d', 'diegoalejandroquintanillarosal@gmailcom', '$2y$10$sUBEPZQ18u7bLJgTztbVS.50CwZxdeQcK9whW6HqDe5WYts0NnSmi', '', '1778419899_4c2dcd2825135aa4fa1104e5d5beb625.jpg', NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `donaciones`
--
ALTER TABLE `donaciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `correo` (`correo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `donaciones`
--
ALTER TABLE `donaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `donaciones`
--
ALTER TABLE `donaciones`
  ADD CONSTRAINT `donaciones_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
