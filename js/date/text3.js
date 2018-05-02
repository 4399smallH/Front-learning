var arr =new Array(1);
var a =0;
window.onload =function(){
    for(;a<arr.length;a++)
    {
        document.write("<input type=\"text\" id=\"text\" name=\"text\">")
        document.write("<input type=\"button\" id=\"btn\" value=\"submit\" name=\"btn\" onclick=\"listName()\">")        
    }
    
}

function listName(){
    var c = document.getElementById("text").value;
    if(c == "")
        pr();
    else{
        arr[a] = document.getElementById("text").value;
        arr.push(arr[a]);
        document.write(arr[a]+"<br>");
    }
}

function pr(){
    for(a=0;a<arr.length;a++){
        document.write(arr[a]+"<br>");
    }
}
