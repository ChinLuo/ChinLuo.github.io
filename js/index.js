window.onload = function () {
    if (window.sessionStorage.getItem("name") != null) {
        let temp = document.createElement("p");
        let button = document.getElementById("btn");


        temp.innerHTML = window.sessionStorage.getItem("name") + "同学，欢迎进入";
        temp.style = "line-height: 34px";

        button.style = "display: block";

        let name = document.getElementById("person");

        name.appendChild(temp)
        temp.appendChild(button)
    }
}



btn.onclick = function (){
    console.log("Hello");
    window.sessionStorage.clear();
    location.reload();
}



let jsDivBox = document.getElementById("loopDiv");

//图片节点
let jsImg = document.getElementById("pic");

//左右按钮节点
let jsLeft = document.getElementById("left");
let jsRight = document.getElementById("right");


let currentPage = 0;

//启动定时器
let timer = setInterval(func, 10000);
function func() {
    currentPage++;
    changePic();

}
function changePic() {
    if (currentPage == 4) {
        currentPage = 0;
    }
    if (currentPage == -1) {
        currentPage = 3;
    }
    //更换图片
    //"img/0.jpg"
    jsImg.src = "../images/main_" + currentPage + ".jpeg";

    jsLeft.style.backgroundColor = "dodgerblue";
    jsRight.style.backgroundColor = "dodgerblue";

}

//鼠标进入
jsDivBox.addEventListener("mouseover", func1, false);
function func1() {
    //停止定时器
    clearInterval(timer);
    //显示左右按钮
    jsLeft.style.display = "block";
    jsRight.style.display = "block";
}
//鼠标移出
jsDivBox.addEventListener("mouseout", func2, false);
function func2() {
    //重启定时器
    timer = setInterval(func, 10000);

    //隐藏左右按钮
    jsLeft.style.display = "none";
    jsRight.style.display = "none";
}

//点击左右按钮
jsLeft.addEventListener("click", func3, false);
function func3() {
    currentPage--;
    changePic();
}


jsRight.addEventListener("click", func4, false);
function func4() {
    currentPage++;
    changePic();
}
