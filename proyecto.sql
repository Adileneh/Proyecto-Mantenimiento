-- MySQL dump 10.13  Distrib 8.0.31, for Linux (x86_64)
--
-- Host: localhost    Database: proyecto
-- ------------------------------------------------------
-- Server version	8.0.31-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Mantenimiento`
--

DROP TABLE IF EXISTS `Mantenimiento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Mantenimiento` (
  `ID` varchar(255) NOT NULL,
  `Solicitud` varchar(255) DEFAULT NULL,
  `Descripcion` varchar(255) DEFAULT NULL,
  `Departamento` varchar(255) DEFAULT NULL,
  `Activo` char(1) DEFAULT NULL,
  `Creado` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Actualizado` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Mantenimiento`
--

LOCK TABLES `Mantenimiento` WRITE;
/*!40000 ALTER TABLE `Mantenimiento` DISABLE KEYS */;
INSERT INTO `Mantenimiento` VALUES ('01','0078','formatear el equipo','recursos humanos','S','2022-12-14 17:44:11','2022-12-14 12:04:22');
/*!40000 ALTER TABLE `Mantenimiento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Personal`
--

DROP TABLE IF EXISTS `Personal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Personal` (
  `ID` varchar(255) NOT NULL,
  `Nombre` varchar(255) DEFAULT NULL,
  `Apellido` varchar(255) DEFAULT NULL,
  `Cargo` varchar(255) DEFAULT NULL,
  `Num_Tel` varchar(255) DEFAULT NULL,
  `Correo` varchar(255) DEFAULT NULL,
  `Direccion` varchar(255) DEFAULT NULL,
  `Activo` char(1) DEFAULT NULL,
  `Creado` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Actualizado` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Personal`
--

LOCK TABLES `Personal` WRITE;
/*!40000 ALTER TABLE `Personal` DISABLE KEYS */;
INSERT INTO `Personal` VALUES ('01','manuel','fernandez','estudiante','28415426','manuel_23@gmail.com','las_flores','N','2022-12-14 16:58:32','2022-12-14 11:04:58'),('03','vanesa','ramirez','estudiante','274165214','vanesa_17@gmail.com','las_flores','N','2022-12-14 17:09:41','2022-12-14 11:21:06');
/*!40000 ALTER TABLE `Personal` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-14 12:09:05
