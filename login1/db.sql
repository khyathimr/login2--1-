CREATE DATABASE login;

-- to use database
use login;

-- creating a new table
CREATE TABLE custo (
  name VARCHAR(50) NOT NULL,
  pass VARCHAR(15)
);

-- to show all tables
show tables;

-- to describe table
describe custo;
select * from custo;