var serviceURL = "http://localhost/directory/services/";

var employees;

$('#employeeListPage').bind('pageinit', function(event) {
	getEmployeeList();
});

function getEmployeeList() {
	$.getJSON(serviceURL + 'getemployees.php', function(data) {
		$('#employeeList li').remove();
		employees = data.items;
		$.each(employees, function(index, item) {
			$('#employeeList').append('<li><a href="dettaglio.html?id=' + item.Id + '">' +
					'<img src="' + item.Url_thumbs + '"/>' +
					'<h4>' + item.Nome + ' </h4>'</a></li>');
		});
		$('#employeeList').listview('refresh');
	});
}