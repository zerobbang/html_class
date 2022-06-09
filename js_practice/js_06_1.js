//window.onload = function(){
window.addEventListener("load",function(){
    let printBtn = document.getElementById("btn");
    printBtn.onclick = function(){
        let x,y;
        x = eval(prompt ("X값 입력 = ", 0));
        y = eval(prompt ("Y값 입력 = ", 0));
        btn.value = x+y;
        btn.type = "text"
    };
}
);