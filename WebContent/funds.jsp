<%@page import="com.Fund"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/Fund.js"></script>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-6">
				<h1>Fund Management</h1>
				<form id="formFund" name="formFund" method="post" action="funds.jsp">

					Name: <input id="fundName" name="fundName" type="text"
						class="form-control form-control-lg "><br> Research: <input
						id="fundResearch" name="fundResearch" type="text"
						class="form-control form-control-lg"><br> Type:<input
						id="fundType" name="fundType" type="text"
						class="form-control form-control-lg"><br> Amount: <input
						id="fundAmount" name="fundAmount" type="text"
						class="form-control form-control-lg"><br>
					Description: <input id="fundDesc" name="fundDesc" type="text"
						class="form-control form-control-lg"> <br> Date: <input
						id="fundDate" name="fundDate" type="text"
						class="form-control form-control-lg"><br> <input
						id="btnSave" name="btnSave" type="button" value="Save"
						class="btn btn-primary"> <input type="hidden"
						id="hidFundIDSave" name="hidFundIDSave" value="">

				</form>

				<div id="alertSuccess" class="alert alert-success"></div>
				<div id="alertError" class="alert alert-danger"></div>
				<br>
				<div id="divItemsGrid">
					<%
						Fund fundObj = new Fund();
					out.print(fundObj.readFunds());
					%>
				</div>
			</div>
		</div>
	</div>
</body>
</html>