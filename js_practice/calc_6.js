window.addEventListener("load",function(){
    var btnAdd = document.getElementById("add")
    btnAdd.onclick = function(){
        let section = document.querySelector("#section1");
        let box = section.querySelector('.box');
        // box 전체 불러오기
        console.log(box);

        // box 안의 값 children 불러오기
        console.log(box.children);

        // let input_x = box.childNodes[0];
        // let input_y = box.childNodes[1];
        let input_x = box.children[0];
        let input_xx = box.children[0].value;
        let input_xxx = box.children[0].children;
        let input_y = box.children[1];
        console.log(input_x, input_y,input_xx,input_xxx);
        // children은 해당 tag의 자식 tag를 불러오는데 만약 자식 tag가 없으면 빈 값으로 나온다.
        

        let x ,y;
        x = parseInt(input_x.value);
        y = parseInt(input_y.value);
        sum.value = x+y;
    }
});