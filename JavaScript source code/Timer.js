<!DOCTYPE html>
<html>
<head> 
<meta charset="utf-8"> 
<title>菜鸟教程(runoob.com)</title> 
<script>
var c=0;
var t;
var timer_is_on=0;
function timedCount(){
    document.getElementById('txt').value=c;
    c=c+1;
    t=setTimeout(function(){timedCount()},1000);
}
function doTimer(){
    if (!timer_is_on){
        timer_is_on=1;
        timedCount();
    }
}
function stopCount(){
    clearTimeout(t);
    timer_is_on=0;
}
</script>
</head>
<body>
    
<form>
<input type="button" value="start!" onclick="doTimer()" />
<input type="text" id="txt" />
<input type="button" value="stop!" onclick="stopCount()" />
</form>
</body>
    
</html>
