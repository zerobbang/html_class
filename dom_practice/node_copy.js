window.addEventListener("load",function(){
    let notices = [
        {id:02, title:"가입인사2", content:"안녕하세요2", writer:"김*민"},
        {id:03, title:"가입인사3", content:"안녕하세요3", writer:"한*수"}
    ];

    let section = document.querySelector("#section");
    let noticeList = section.querySelector(".notice-list");
    let cloneButton = section.querySelector(".clone-button");
    let inputButton = section.querySelector(".input-button");
    let tempButton = section.querySelector(".temp-button");

    cloneButton.onclick = function(){
        // table의 바디 tr이 clone 대상이다.
        // querySelector 는 첫번째 한개 값만 가져온다.
        let trNode = noticeList.querySelector("tbody tr");

        // // querySelectorALL 인경우 배열로 처리 해야한다.
        // let cloneNode = noticeList.querySelectorAll("tbody tr")[0];

        // querySelector 사용
        // true 하위 전체 복사,  false 최상위 노드만 복사
        let cloneNode = trNode.cloneNode(true);
        console.log(trNode);
        console.log(cloneNode);
        let tbodyNode = noticeList.querySelector("tbody");
        tbodyNode.appendChild(cloneNode);

    };

    inputButton.onclick = function(){
        let tbodyNode = noticeList.querySelector("tbody");
        let trNode = noticeList.querySelector("tbody tr");
        let cloneNode = trNode.cloneNode(true);
        let tds = cloneNode.querySelectorAll("td");
        console.log(tds);

        // notices 배열 안에 첫번째 값 추가
        tds[0].textContent = notices[0].id;
        tds[1].textContent = notices[0].title;
        tds[2].textContent = notices[0].content;
        tds[3].textContent = notices[0].writer;
        tbodyNode.appendChild(cloneNode);
    };

    tempButton.onclick = function(){
        let tempNode = section.querySelector("template");
        console.log(tempNode);

        // 복제할 노드 tmepNode에서 import 하기.
        // true는 하위 전체 import
        // .firstElementChild
        let cloneNode = document.importNode(tempNode.content,true);
        let tds = cloneNode.querySelectorAll("td");

        // 속해 있는 노드는 tempNode에서 import 해야한다.
        console.log(tds);
        // 템플릿 복제 후 데이터 업데이트
        tds[0].textContent = notices[0].id;
        tds[1].textContent = notices[0].title;
        tds[2].textContent = notices[0].content;
        tds[3].textContent = notices[0].writer;
        // tbodyNode 하위로 cloneNode 붙여놓는다.
        let tbodyNode = noticeList.querySelector("tbody");
        tbodyNode.appendChild(cloneNode);
    };
})