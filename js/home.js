var serviceURL = "http://www.cronacaroma.info/services/";


$('#homecontenuti').live('pageinit', function(event) {
	alert("pagina caricata");
	getHomeItem();
});



function getHomeItem() {
	
$.ajax({
	//url: 'http://www.cronacaroma.info/services/last.php',
	url: 'last.php',
	contentType: 'application/json;',
	dataType: 'jsonp',
	timeout: 5000,
	success : function (data,stato) {
		$.each(data, function(i,item){		
		var passhash = CryptoJS.MD5('Image'+item.id).toString();
					
		$('#boxnotizie').append('<li><a href="details.html?id='+ item.id+'"><img alt="" src="http://www.cronacaroma.info/media/k2/items/cache/'+ passhash +'_S.jpg" /> ' + item.id + ' <h4> ' + item.title + ' </h4> <div 										style="clear:both"></div></a></li>');
		});
		
		$('#boxnotizie').listview('refresh');
		},

		 error : function (richiesta,stato,errori) {
		 alert("E' evvenuto un errore. Il stato della chiamata: "+  stato);
	}
})
		
	
	
} // chiusura finale 
