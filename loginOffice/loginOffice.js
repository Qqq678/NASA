

function loginOffice(){

    if(document.getElementById("myInput").value == 0){
        document.getElementById("error").innerHTML = "! 用户名输入不能为空";
    }else{
        console.log("用户名:"+document.getElementById("myInput").value)
        document.getElementById("myInput").value="";
    }

    if(document.getElementById("myOutput").value == 0){
        document.getElementById("error").innerHTML = "! 密码输入不能为空";
    }else{
        console.log("密码:"+document.getElementById("myOutput").value)
        document.getElementById("myOutput").value ="";
    }
}

document.getElementById("myOutput").onkeypress = function (event) { 
    if(event.keyCode === 13){ 
       loginOffice();
      } 
 };

document.getElementById("myInput").onkeypress = function (event) { 
    if(event.keyCode === 13){ 
       loginOffice();
      } 
 };
