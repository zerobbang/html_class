window.addEventListener("load",function(){
    let section = document.querySelector("#section");
    let titleInput = section.querySelector(".title-input");
    let addButton = section.querySelector(".add-button");
    let delButton = section.querySelector(".del-button");
    let menuListDiv = section.querySelector(".menu-list");

    addButton.onclick = function(){
        // -------------------- 기본 -----------------
        // // 사용자 입력한 값에 대해 노드 생성
        // let textNode = document.createTextNode(titleInput.value);
        // // menu list에 추가
        // menuListDiv.appendChild(textNode);


        // ------------------------- list 로 관리하기 -------------------------
        // 사용자 입력한 값에 대해 노드 생성
        let textNode = document.createTextNode(titleInput.value);
        // 데이터 관리는 List Item 으로 관리가 적합 -> List로 생성
        let liNode = document.createElement("li");
        
        // // 첫번째 방법
        // // 먼저 li tag에 입력 후, menu list에 추가
        // liNode.appendChild(textNode);
        // menuListDiv.appendChild(liNode);

        // 두번째 방법
        // 부모 노드에 추가 하기 InnerHTMl
        menuListDiv.innerHTML = menuListDiv.innerHTML + "<li>" + titleInput.value + "</li>";
    };

    delButton.onclick = function(){
        // -------------------- 기본 -----------------
        // // menu list 중 한개 선택
        // let textNode = menuListDiv.childNodes[0];
        // // 선택한 거 삭제
        // menuListDiv.removeChild(textNode);

        // 선택된 텍스트의 li중 가장 앞 선택
        let liNode = menuListDiv.children[0];
        menuListDiv.removeChild(liNode);
    }
})