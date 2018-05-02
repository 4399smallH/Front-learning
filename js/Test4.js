var a =document.getElementById("text1").value;
var b =document.getElementById("text2").value;
var c =document.getElementById("text3").value;
function mt(a,b,c)
{
    for(;b<=c;b++)
    {
        document.write("<p>"+a+"*"+b+"="+(a*b)+"</p>")
    }
    document.write("<a href=\"Test4.html\"><input type=\"button\"value=\"返回\" ></a> ");
}
