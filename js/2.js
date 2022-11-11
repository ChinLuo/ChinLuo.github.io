function f() {
    let name = document.getElementById("name").value;
    let pwd = document.getElementById("pwd").value;

    if(name != ""){
        if (pwd == "123"){
            window.sessionStorage.setItem("name",name)
            return true;
        }else {
            alert("Pwd Error!");
            return false;
        }
    }else {
        alert("用户名不能为空");
        return false;
    }
}
