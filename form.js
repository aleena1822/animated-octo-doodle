//var x = document.getElementById('user');

function change(){
   // alert("clicked");
   x=document.getElementById('user');
   x.style.backgroundColor = "pink"
}
function back()
{
    x.style.border= "2px solid blue"
}
var x = document.getElementById('user');
var err = document.getElementById('err')
var p = document.getElementById('pass');
var err1 = document.getElementById('err1')
console.log(x.value)
function validatename(){

    if(x.value.trim()==""){
        err.innerText="username cannot be empty";
        x.style.border = "2px solid red";
        return false
    }
    else if(x.value.length<3){
        err.innerText="username should be more than 3 character"
        x.style.border = "2px solid red"
        return false
    }
    else{
        err.innerText=''
        return true
    }
}

function validatepass(){
    if(p.value.trim()==""){
       err1.innerText="password should not be empty"
       p.style.border='2px solid red'
        return false
    }
    else{
    err.innerText=''
    return true
    }
}


    function validateform(){
        if(!valindatname() || !validatepass()){
        return false
    }
else
{

    return true
}
    }