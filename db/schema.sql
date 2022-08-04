DROP DATABASE IF EXISTS tech_blog_db;

CREATE DATABASE tech_blog_db;

USE tech_blog_db;

CREATE TABLE users (
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(20) NOT NULL UNIQUE,
  password VARCHAR(255)
);

CREATE TABLE posts (
  id int NOT NULL PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  content VARCHAR(100) NOT NULL,
  user_id int,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE comments (
  id int NOT NULL PRIMARY KEY,
  content VARCHAR(100) NOT NULL,
  user_id int,
  post_id int,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

