<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>confirm</title>
</head>
<body>
<p>Click thos button</p>
<button onclick="myFunction()">HI</button>
<p id="demo"></p>
<script>
function myFunction(){
    var x;
    var person=prompt("Enter your name","GitHub user");
    if (person!=null && person!=""){
        x="Hi " + person + "! How are you today?";
        document.getElementById("demo").innerHTML=x;
    }
}
</script>
</body>
</html>
