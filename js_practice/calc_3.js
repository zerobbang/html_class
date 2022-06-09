window.addEventListener("load",function(){
    var btnAdd = document.getElementById("add")
    btnAdd.onclick = function(){
        var section = document.getElementById("section1");
        let input_x = section.getElementsByClassName("txt1")[0];
        let input_y = section.getElementsByClassName("txt2")[0];
        console.log(input_x, input_y);

        var x ,y;
        x = parseInt(input_x.value);
        y = parseInt(input_y.value);
        sum.value = x+y;
    }
});