CREATE DATABASE  IF NOT EXISTS `coffe&books_db`;
USE `coffe&books_db`;
CREATE TABLE `products` (
   `id_product` INT AUTO_INCREMENT,
   `title` VARCHAR(100) NOT NULL,
   `descripcion` TEXT,
   `id_author` INT,
   `genre_id` INT,
   `stock` INT NOT NULL DEFAULT 1,
   `price` INT NOT NULL DEFAULT 1,
   `id_category` INT NOT NULL,
   `img` VARCHAR(255) NOT NULL DEFAULT 'default-image.png',
   `offer` INT,
   PRIMARY KEY (`id_product`)
);

CREATE TABLE `users` (
   `id_users` INT NOT NULL,
   `firstName` VARCHAR(100) NOT NULL,
   `lastName` VARCHAR(100) NOT NULL,
   `email` VARCHAR(200) NOT NULL,
   `password` VARCHAR(255) NOT NULL,
   `profileImg` VARCHAR(255) NOT NULL DEFAULT 'default-user.png',
   PRIMARY KEY (`id_users`)
);

CREATE TABLE `genres` (
   `id_genre` INT AUTO_INCREMENT,
   `genre` VARCHAR(50) NOT NULL,
   PRIMARY KEY (`id_genre`)
);

CREATE TABLE `category` (
   `id_category` INT AUTO_INCREMENT,
   `category` VARCHAR(100) NOT NULL,
   PRIMARY KEY (`id_category`)
);

CREATE TABLE `authors` (
   `id_author` INT AUTO_INCREMENT,
   `author` VARCHAR(100) NOT NULL,
   PRIMARY KEY (`id_author`)
);


ALTER TABLE `products` ADD CONSTRAINT `FK_f3246963-dae2-4d49-9a0a-7b1fe23d4be4` FOREIGN KEY (`genre_id`) REFERENCES `genres`(`id_genre`);

ALTER TABLE `products` ADD CONSTRAINT `FK_cdab2f19-6071-4278-b7b9-f7ebb0db7a61` FOREIGN KEY (`id_category`) REFERENCES `category`(`id_category`);

ALTER TABLE `products` ADD CONSTRAINT `FK_600de83d-6964-4fe9-bc78-10d4e3d3f46d` FOREIGN KEY (`id_author`) REFERENCES `authors`(`id_author`);