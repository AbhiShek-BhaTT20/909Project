drop database if exists employee;
create database employee;
use employee;
create table employee(
id int auto_increment not null,
name varchar(30),
age int(3),
email varchar(50) unique,
phone_number long,
password varchar(50),
gender enum("Male","Female","Other"),
role varchar(20),
constraint employee_pk primary key(id)
);

insert into employee(id,name,age,email,phone_number,password,gender,role) values (1,'abhishek','24','abhi.bhatt1857@gmail.com',7466992636,'Abhi@123','Male','admin');
select * from employee;