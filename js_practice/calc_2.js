window.addEventListener("load",function(){
    var btnAdd = document.getElementById("add")
    btnAdd.onclick = function(){
        var section = document.getElementById("section1");
        var inputs = section.getElementsByTagName("input");
        console.log(inputs);

        
        console.log(inputs[0].value);
        console.log(inputs[1].value);

        var x ,y;
        x = parseInt(inputs[0].value);
        y = parseInt(inputs[1].value);
        sum.value = x+y;
    }
});