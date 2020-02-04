<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>millisecond</title>
</head>
<body>

<p id="demo">单击按钮显示1970年1月1号至今的毫秒数。</p>
<button onclick="myFunction()">Click me</button>
<script>
function myFunction(){
	var d = new Date();
	var x = document.getElementById("demo");
	x.innerHTML=d.getTime();
}
</script>

</body>
</html>
