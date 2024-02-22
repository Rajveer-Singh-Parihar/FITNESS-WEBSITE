function home(){
    document.getElemeById("homes").style.color="rgb(20,251,20)";
    document.getElementById("plans").style.color="white";
    document.getElementById("contacts").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("programs").style.color="white";
}
function program(){
    document.getElemeById("homes").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("contacts").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("programs").style.color="rgb(20,251,20)";
}
function plan(){
    document.getElemeById("homes").style.color="white";
    document.getElementById("plans").style.color="rgb(20,251,20)";
    document.getElementById("contacts").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("programs").style.color="white";
}
function blog(){
    document.getElemeById("homes").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("contacts").style.color="white";
    document.getElementById("blogs").style.color="rgb(20,251,20)";
    document.getElementById("programs").style.color="white";
}
function contact(){
    document.getElemeById("homes").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("contacts").style.color="rgb(20,251,20)";
    document.getElementById("blogs").style.color="white";
    document.getElementById("programs").style.color="white";
}

/* submit */
function submit(){
    let name = document.getElementById("name");
    let number = document.getElementById("number");

    if(name.value == ""){
        alert("Please enter your name")
    }
    else if(number.value == ""){
        alert("Please enter number")
    }
    else{
        alert("Thanks for join :" + name.value)
    }
}