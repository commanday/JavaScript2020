<!DOCTYPE html>
<html>
<head> 
<meta charset="utf-8"> 
<title>light</title> 
</head>
<body>
	
<script>
function changeImage()
{
	element=document.getElementById('myimage')
	if (element.src.match("bulbon"))
	{
		element.src="/images/pic_bulboff.gif";
	}
	else
	{
		element.src="/images/pic_bulbon.gif";
	}
}
</script>
<img id="myimage" onclick="changeImage()" src="/images/pic_bulboff.gif" width="100" height="180">
<p>Click the light.</p>
	
</body>
</html>
