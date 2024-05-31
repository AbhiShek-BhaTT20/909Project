<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>InfyBank Login</title>
</head>
<body>
	<div align='center'>
		<h3>Customers Details</h3>
		<br> <br>
		<table align="center" border="1">
			<tr>
				<th>Id</th>
				<th>Name</th>
				<th>Email</th>
				<th>City</th>
				<th>Status</th>
			</tr>

			<c:forEach items="${customers}" var="customer">
				<tr>
					<td>${customer.customerId}</td>
					<td>${customer.customerName}</td>
					<td>${customer.emailId}</td>
					<td>${customer.city}</td>
					<td>${customer.status}</td>
				</tr>
			</c:forEach>
		</table>
		<br> <br>
		<div align="center">
			<a href="/">

				<button>Home</button>

			</a>
		</div>
	</div>

</body>
</html>
