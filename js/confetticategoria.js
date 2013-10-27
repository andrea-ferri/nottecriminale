var serviceURL = "http://www.confetti-sulmona.net/services/";

var employees;

$('#paginahome').bind('pageinit', function(event) {
	getEmployeeList();
});

function getEmployeeList() {
	
	$.ajax({
		url: 'http://www.confetti-sulmona.net/services/confettielenco.php',
		contentType: 'application/json;',
		dataType: 'jsonp',
		timeout: 5000,
		success : function (data,stato) {
			$('#employeeList li').remove();
			$.each(data, function(i,item){		
					$('#employeeList').append('<li><a href="dettaglio.html?id='+ item.Id+'"> <img src="' + item.Url_thumbs + '"/> ' + item.Nome + ' </li>');
			});
			$('#employeeList').listview('refresh');
			},
				 error : function (richiesta,stato,errori) {
				 alert("E' evvenuto un errore. Il stato della chiamata: "+  stato);
			}
		})
	
	
	
	
	/*			
	$.getJSON(serviceURL + 'confettielenco.php', function(data) {
		$('#employeeList li').remove();
		employees = data.items;
		$.each(employees, function(index, item) {	
				$('#employeeList').append('<li>ooo</li>');	
		$('#employeeList').append('<li><a href="dettaglio.html?id=' + item.Id + '">' +
			'<img src="' + item.Url_thumbs + '"/>' +
			'<h4>' + item.Nome + ' </h4></a></li>');
	
		}); // chiusura each
		$('#employeeList').listview('refresh');
	}); // chiusura chiamata jsonp
	*/
	
	
	
	
	
	
} // chiusura finale 
