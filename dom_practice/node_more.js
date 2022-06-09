window.addEventListener("load",function(){
    let section = document.querySelector("#section");
    let noticeList = section.querySelector(".notice-list");
    let tbodyNode = section.querySelector("tbody");
    let upButton = section.querySelector(".up-button");
    let downButton = section.querySelector(".down-button");
    let allCheckBox = section.querySelector(".overall-checkbox")
    let delButton = section.querySelector(".del-button");
    let swapButton = section.querySelector(".swap-button");


    // 첫번째 tr 선택한다.
    // let currentNode = tbodyNode.children[0]; 도 가능
    let currentNode = tbodyNode.firstElementChild;

    downButton.onclick = function(){
        let nextNode = currentNode.nextElementSibling;
        if (nextNode == null){
            alert("마지막 입니다.");
            return;
        }

        // current 앞으로 next 이동
        tbodyNode.insertBefore(nextNode,currentNode);
    };

    upButton.onclick = function(){
        let prevNode = currentNode.previousElementSibling
        if (prevNode == null){
            alert("처음 입니다.");
            return;
        }

        // current 앞으로 next 이동
        tbodyNode.insertBefore(currentNode,prevNode);
    };

    // 전체 체크 선택 해제 버튼
    allCheckBox.onchange = function(){
        let inputs = tbodyNode.querySelectorAll("input[type = 'checkbox']");
        console.log(inputs);
        for (var i = 0; i<inputs.length;i++ ){
            // all 체크박스와 동일하게 모든 input 박스 생성
            inputs[i].checked = allCheckBox.checked;
        }
    };

    delButton.onclick = function(){
        // input type이 ㅣcheck이면서 체크된 것만 배열로 가져온다.
        let inputs = tbodyNode.querySelectorAll("input[type='checkbox']:checked");
        console.log(inputs);

        // 해당 tr로  들어가 전체 삭제한다.
        for ( var i=0; i<inputs.length; i++){
            inputs[i].parentElement.parentElement.remove();
        }
    };

    swapButton.onclick = function(){
        let inputs = tbodyNode.querySelectorAll("input[type = 'checkbox']:checked");

        if (inputs.length != 2 ){
            alert("2개만 체크해주세요.");
            return;
        }

        let trs = [];
        for (var i=0;i<inputs.length;i++)
            //해당 객체 tr 선택 후 trs에 배열로 저장
            trs.push(inputs[i].parentElement.parentElement);
        
        // console.log(trs[0],trs[1]);
        // 해당 첫번째 tr의 자식 노드까지 전체 복사하여 cloneNode에 저장
        let cloneNode = trs[0].cloneNode(true);
        // a.replaceWith(b); => a 를 b로 바꾼다.
        trs[1].replaceWith(cloneNode);
        trs[0].replaceWith(trs[1]);

        // trs[1].replaceWith(trs[0]);
        // trs[0].replaceWith(trs[1]);
        // 그냥 위와 같이 하면 trs[0].replaceWith(trs[1]);여기서 trs[1]이 이미 변경된 값으로 동일한 값이 출력되어 하나의 값만 출력이 된다.
    };

});