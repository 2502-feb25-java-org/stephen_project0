--Create Database--
create database CellphoneStore
--Create tables--
create table Products (
	productId int identity(1,1) not null primary key,
	productName varchar(50) not null,
	productPrice money
);

create table Customers(
	customerId int identity(1,1) not null primary key,
	firstName varchar(30) not null,
	lastName varchar(40) not null,
	cardNumber int
);

create table Orders(
	orderId int identity(1,1) not null primary key,
	
	productId int not null,
	constraint FK_productId foreign key (productId) --foreign key for product
	references Products(productId),
	
	customerId int not null,
	constraint FK_customerId foreign key (customerId) --foreign key for customers
	references Customers(customerId)
);
--insert records--
insert into dbo.Customers(firstName, lastName, cardNumber)
values
('Bob', 'Dylan', 77777),
('Justin', 'Timberlake', 23432),
('John', 'Smith', 34566)
go
--insert products--
insert into dbo.Products(productName, productPrice)
values
('Samson Galaxy 5s', 499.99),
('Microsoft Phone', 399.99),
('Motorola Razr', 89.99)
go
--insert orders--
insert into dbo.Orders(productId, customerId)
values
(1,2),
(2,1),
(3,3)
go

--Add iPhone to Products--
insert into dbo.Products(productName, productPrice)
values
('iPhone', 200)
go
--Add Tina Smith to Customers--
insert into dbo.Customers (firstName, lastName, cardNumber)
values
('Tina', 'Smith', 98765)
go
--Tina's Order--
insert into dbo.Orders(productId, customerId)
values
(4,4)
go
--get Tina's orders
select productName, productPrice
from  dbo.Orders as o
 join dbo.Products as p
on o.customerId = 1
join dbo.Customers
on p.CustomerId = o.customerId

--find sum  of revenure by iPhones sold--
select sum()

--change price of iPhone--
update Products
set productPrice = 250
where  productId = 4