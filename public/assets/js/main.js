// Global Variables
var jsonOut = [];

// Add events to buttons
document.getElementById('generateReport').addEventListener('click', generateReport, false);

function generateReport() {
	alert($('#fromDate').val());
	
	/*$.ajax({  
		url: "/ws",  
		type: "POST",  
		dataType: "text",  
		contentType: "application/json",  
		data: JSON.stringify(jsonOut),  
		success: function(data){              
			var win=window.open("/pdf/out.pdf");
			win.focus();
		},  
		error: function(){  
			$("#genMsg").append("<span class='glyphicon glyphicon-remove'></span>&nbsp;PDF Generator Failed!!!");
			$("#genMsg").removeClass("hidden").removeClass("alert-success"); 
			$("#genMsg").addClass('alert-danger');  
		}  
	}); */
}





