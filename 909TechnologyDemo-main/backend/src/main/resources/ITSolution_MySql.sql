drop database if exists employee;
create database employee;
use employee;
create table employee(
id int auto_increment not null,
name varchar(30),
age int(3),
email varchar(50) unique,
phoneNumber int(10),
password varchar(50),
gender enum("Male","Female","Other"),
role varchar(20),
constraint employee_pk primary key(id)
);

insert into employee(id,name,age,email,phoneNumber,password,gender,role) values (1,'anjali','24','anjalidandriyal23@gmail.com','7535929032','anjali@123','F','admin');
