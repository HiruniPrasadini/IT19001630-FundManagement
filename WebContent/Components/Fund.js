$(document).ready(function() {
	
		$("#alertSuccess").hide();
        $("#alertError").hide();
});

// SAVE ============================================
$(document).on("click", "#btnSave", function(event) {
	// Clear alerts---------------------
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();

	// Form validation-------------------
	var status = validateFundForm();
	if (status != true) {
		$("#alertError").text(status);
		$("#alertError").show();
		return;
	}
	// If valid-------------------------
	var type = ($("#hidFundIDSave").val() == "") ? "POST" : "PUT";

	$.ajax(
		{
			url: "FundsAPI",
			type: type,
			data: $("#formFund").serialize(),
			dataType: "text",
			complete: function(response, status) {
				onFundSaveComplete(response.responseText, status);
			}
		});
});


function onFundSaveComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);

		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();

			$("#divItemsGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error")
		{
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} else if (status == "error") {
		$("#alertError").text("Error while saving.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while saving..");
		$("#alertError").show();
	}
	$("#hidFundIDSave").val("");
	$("#formFund")[0].reset();
}


// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event) {
	$("#hidFundIDSave").val($(this).data("fundid"));
	$("#fundName").val($(this).closest("tr").find('td:eq(0)').text());
	$("#fundResearch").val($(this).closest("tr").find('td:eq(1)').text());
	$("#fundType").val($(this).closest("tr").find('td:eq(2)').text());
	$("#fundAmount").val($(this).closest("tr").find('td:eq(3)').text());
	$("#fundDesc").val($(this).closest("tr").find('td:eq(4)').text());
	$("#fundDate").val($(this).closest("tr").find('td:eq(5)').text());
});


$(document).on("click", ".btnRemove", function(event) {
	$.ajax(
		{
			url: "FundsAPI",
			type: "DELETE",
			data: "fundID=" + $(this).data("fundid"),
			dataType: "text",
			complete: function(response, status) {
				onFundDeleteComplete(response.responseText, status);
			}
		});
});


function onFundDeleteComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully deleted.");
			$("#alertSuccess").show();
			$("#divItemsGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} else if (status == "error") {
		$("#alertError").text("Error while deleting.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while deleting..");
		$("#alertError").show();
	}
}




// CLIENT-MODEL================================================================
function validateFundForm() {
	// CODE
	if ($("#fundName").val().trim() == "") {
		return "Insert Item Code.";
	}
	// NAME
	if ($("#fundResearch").val().trim() == "") {
		return "Insert Item Name.";
	}

	// NAME
	if ($("#fundType").val().trim() == "") {
		return "Insert Item Name.";
	}

	// PRICE-------------------------------
	if ($("#fundAmount").val().trim() == "") {
		return "Insert Item Price.";
	}
	// is numerical value
	var tmpPrice = $("#fundAmount").val().trim();
	if (!$.isNumeric(tmpPrice)) {
		return "Insert a numerical value for Item Price.";
	}
	// convert to decimal price
	$("#fundAmount").val(parseFloat(tmpPrice).toFixed(2));
	// DESCRIPTION------------------------
	if ($("#fundDesc").val().trim() == "") {
		return "Insert Item Description.";
	}

	// DESCRIPTION------------------------
	if ($("#fundDate").val().trim() == "") {
		return "Insert Item Description.";
	}
	return true;
}
