var text="";
for (var i = 1; i < 101; i++){
    if (i % 3 == 0 && i % 5 == 0){
        text += "cyberclick" + "<br>";
    }else if(i % 3 == 0){
        text += "click" + "<br>";
    }else if(i % 5 == 0){
        text += "cyber" + "<br>";
    }else{
        text += i + "<br>";
    }
}
document.getElementById("response").innerHTML = text;
