window.addEventListener("load",function(){
    let section= document.querySelector("#section");
    let container = section.querySelector(".container");
    let box = section.querySelector(".box");

    container.onclick = function(e){
        console.log("(X,y) = " + e.x, e.y);
        console.log("client = " + e.clientX, e.clientY);
        console.log("page = " + e.pageX, e.pageY);
        console.log("offset = " + e.offsetX, e.offsetY);
        box.style.position = 'absolute';
        box.style.left = e.x + "px";
        box.style.top = e.y + "px";
    };
});