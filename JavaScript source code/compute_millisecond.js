<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>millisecond</title>
</head>
<body>

<p id="demo">Click the button to display the number of milliseconds since January 1, 1970</p>
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
