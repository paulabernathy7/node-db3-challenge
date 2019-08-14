# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

select ProductName, Categoryname from Products as P
join categories as C
on P.Categoryid = C.Categoryid

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

select OrderID, ShipperName from orders as O
join shippers as S
on O.shipperid = s.shipperid
where OrderDate<'1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

select productname, quantity from orderdetails as O
join Products as p
on p.productid = o.productid
WHERE OrderID = "10251"

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

select OrderID, CustomerName, LastName from orders as o
join customers as c
on o.customerid = c.customerid
join employees as e
on e.EmployeeID = o.EmployeeID

### (Stretch) Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.
