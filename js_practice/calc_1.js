window.addEventListener("load",function(){
    var btnPrint = document.getElementById("add");
    btnPrint.onclick = function() {
        var x,y;
        x = parseInt(document.getElementById("txt1").value);
        y = parseInt(document.getElementById("txt2").value);
        sum.value = x + y;
    }
});