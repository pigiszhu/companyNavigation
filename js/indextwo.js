$(document).ready(function(){
	getInit();

});
function getInit(){
	/*$.getJSON("../navigation.json",function(data){
		alert(data);
	})*/
	$.ajax({
		type:"POST",
		dataType:"jsonp",
		url:'../navigation.json',
		success:function(data){
			alert(data)
		},
		error:function(err){
			alert('123')
		}
	})
}