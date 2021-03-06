<%@page import="com.Fund"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>


<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Fund Management </title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/Fund.js"></script>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-6">
				<center><h1 class="text-primary font-weight-bold">Fund Management</h1></center>
				<div class="offset-xl-3 col-xl-6">
				<form id="formFund" name="formFund" method="post" action="funds.jsp" class="align-middle">

					Name: <input id="fundName" name="fundName" type="text"
						class="form-control form-control-lg"><br>
						
					Research: <input id="fundResearch" name="fundResearch" type="text"
						class="form-control form-control-lg"><br> 
						
					Type:<input id="fundType" name="fundType" type="text"
						class="form-control form-control-lg"><br> 
						
					Amount: <input id="fundAmount" name="fundAmount" type="text"
						class="form-control form-control-lg"><br>
						
					Description: <input id="fundDesc" name="fundDesc" type="text"
						class="form-control form-control-lg"> <br>
						 
					Date: <input id="fundDate" name="fundDate" type="text"
						class="form-control form-control-lg"><br>
						 
					<input id="btnSave" name="btnSave" type="button" value="Save"
						class="btn form-control btn-primary">
						 
					<input type="hidden" id="hidFundIDSave" name="hidFundIDSave" value="">

				</form>
				
			</div>

				<div id="alertSuccess" class="alert alert-success"></div>
				<div id="alertError" class="alert alert-danger"></div>
				<br>
			<div class="container center">
			
				<div id="divItemsGrid">
					<%
						Fund fundObj = new Fund();
					out.print(fundObj.readFunds());
					%>
				</div>
			
			</div>
			</div>
		</div>
	</div>

</body>
</html>