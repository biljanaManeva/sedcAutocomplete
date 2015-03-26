$(function(){
	$( "#tags" ).autocomplete({
		source:function(request,response){
			$.getJSON('http://en.wikipedia.org/w/api.php?action=opensearch&search='+request.term+'&limit=8&namespace=0&format=json&callback=?',
			function (data)
			{
			 response(data[1]) 
			});
		},
		autoFocus:true,
	});
});
