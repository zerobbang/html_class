window.addEventListener("load",function(){
    let section = document.querySelector('#section');
    let srcInput = section.querySelector(".src-input");
    let imgSelect = section.querySelector(".img-select");
    let changeButton = section.querySelector(".change-button");
    let img = section.querySelector('.img');
    let colorInput = section.querySelector(".color-input");

    changeButton.onclick = function(){
        console.log(colorInput.value);
        // 직접 입력하는 방식 ( + 데이터 리스트 옵션 사용 시)
        img.src = "images/" + srcInput.value;
        
        // 색상 값 가져오기
        img.style['border-color'] = colorInput.value;

        // // 선택하는 방식
        // // img.src = "images/" + imgSelect.value;
        
    }
});