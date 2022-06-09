window.addEventListener("load",function(){
    var btnAdd = document.getElementById("add")
    btnAdd.onclick = function(){
        var section = document.getElementById("section1");
        let input_x = section.querySelector(".txt1");
        let input_y = section.querySelector(".txt2");

        console.log(input_x, input_y);

        let x ,y;
        x = parseInt(input_x.value);
        y = parseInt(input_y.value);
        sum.value = x+y;
    }
});