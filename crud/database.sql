-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 07, 2018 at 07:25 PM
-- Server version: 5.7.23
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `crud`
--

-- --------------------------------------------------------

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `name`, `type`, `price`, `barcode`, `created_at`, `updated_at`) VALUES
(1, 'montre', 'accessoires', '110', '9038429438092', NULL, NULL),
(2, 'bracelet', 'accessoires', '23', '9038429438093', NULL, NULL),
(3, 'bague', 'accessoires', '150', '9038429438097', NULL, NULL),
(4, 'collier', 'accessoires', '90', '9038429438099', NULL, NULL),
(5, 'robe', 'vetement', '80', '9038424438099', NULL, NULL),
(6, 'jupe', 'vetement', '40', '9038424338099', NULL, NULL),
(7, 'bonnet', 'accessoires', '110', '9038429678092', NULL, NULL),
(8, 't-shirt', 'accessoires', '23', '9038429908093', NULL, NULL),
(9, 'pull', 'accessoires', '150', '9038423438097', NULL, NULL),
(10, 'veste', 'accessoires', '90', '9038429495499', NULL, NULL),
(11, 'manteau', 'vetement', '80', '9036424438099', NULL, NULL),
(12, 'jean', 'vetement', '40', '9038424390099', NULL, NULL);

-- --------------------------------------------------------
