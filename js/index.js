$(document).ready(function(){
	// setInterval("getDate()",1000)
});
function getDate(){
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth()+1;
	month = (month<10?'0'+month:month);
	var nowdate = date.getDate();
	nowdate = (nowdate<10?'0'+nowdate:nowdate);
	var day = date.getDay();
	var week = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]
	var todayweek = week[day];
	var mydate = (year.toString()+"年"+month.toString()+"月"+nowdate.toString()+"日<br>"+todayweek+"<br>"+date.toLocaleTimeString());
	console.log(mydate)
	document.getElementById('nowtime').innerHTML = mydate

}
function a_click(id){
	if(id=='all'){
		$(".right_content").show();
	}else{
		$(".right_content").hide();
		$("#"+id).show();
	}
}