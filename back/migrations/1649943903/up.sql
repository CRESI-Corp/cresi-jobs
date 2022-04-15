CREATE TABLE users (
	"id" SERIAL NOT NULL
	-- Temporary, need to figure out what we want and how to auth them 
);

CREATE TABLE users_meta (
	"id" SERIAL NOT NULL,
	"last_name" VARCHAR,
	"first_name" VARCHAR
);

CREATE TABLE posts ();
CREATE TABLE posts_meta ();
CREATE TABLE company ();
CREATE TABLE applications ();
CREATE TABLE objects ();
CREATE TABLE locations ();
