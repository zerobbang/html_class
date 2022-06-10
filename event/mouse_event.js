window.addEventListener("load",function(){
    let section = document.querySelector("#section");
    let imgs = section.querySelectorAll(".img");
    let currentImg = section.querySelector(".current-img");
    // 3번재 방법
    let imgList = section.querySelector(".img-list");


    // // 첫번째 방법 : 직접 지정
    // imgs[0].onclick = function(e){
    //     currentImg.src = e.target.src;
    // };

    // imgs[1].onclick = function(e){
    //     currentImg.src = e.target.src;
    // };

    // imgs[2].onclick = function(e){
    //     currentImg.src = e.target.src;
    // };


    // // 두번째 방법 : for문으로 합치기
    // for (var i =0; i < imgs.length; i++){
    //     imgs[i].onclick = function(e){
    //         console.log(e.target.src);
    //         currentImg.src = e.target.src;
    //     };
    // }

    // // 세번째 방법 : 리스트 사용해 버블링 하기
    imgList.onclick = function(e){
        if(e.target.className != 'img') return;
        currentImg.src = e.target.src;
    }
});