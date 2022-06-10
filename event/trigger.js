window.addEventListener("load",function(){
    let section = document.querySelector("#section");
    let fileButton = section.querySelector(".file-button");
    let fileTriggerButton = section.querySelector(".file-trigger-button");

    fileButton.onclick = function(e){

    };

    fileTriggerButton.onclick = function(e){
        let event = new MouseEvent("click",{
            // 다 주석 처리 해도 동작은 함.
            'view':window, 
            'bubbles':true,
            'cancelable':true
        })
        // dispatchEvent : 숨긴 fileButton은 위 fileTriggerButton 이벤트를 수행한다.
        fileButton.dispatchEvent(event);
    };
});