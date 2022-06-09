window.addEventListener("load",function(){
    let section = document.querySelector('#section');
    let srcInput = section.querySelector(".src-input");
    let imgSelect = section.querySelector(".img-select");
    let changeButton = section.querySelector(".change-button");
    let img = section.querySelector('.img');

    changeButton.onclick = function(){
        // 직접 입력하는 방식 ( + 데이터 리스트 옵션 사용 시)
        img.src = "images/" + srcInput.value;

        // 선택하는 방식
        // img.src = "images/" + imgSelect.value;
    }
});