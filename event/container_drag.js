window.addEventListener("load",function(){
    let section= document.querySelector("#section");
    let container = section.querySelector(".container");
    let box = section.querySelector(".box");
    let dragging = false;
    let offset = {x:0,y:0};

    // 마우스가 눌린 상황
    container.onmousedown = function(e){
        // 선택된 객체가 box라면 dragging을 true로 설정
        if(e.target ==box) {
            dragging = true;
        }
    };


    container.onmousemove = function(e){
        if (dragging){
            box.style.left = e.x - offset.x + "px";
            box.style.top = e.y - offset.y + "px";
        }
    };

    // 마우스 땐 상황
    container.onmouseup = function(e){
        // 선택된 객체가 box라면 dragging을 false 설정
        if(e.target ==box) {
            dragging = false;
        }
    };

    box.onmousedown = function(e){
        offset.x = e.offsetX;
        offset.y = e.offsetY;

    }
});