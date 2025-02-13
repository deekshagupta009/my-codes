function validatepass(){
    if(pass.value==rpass.value){
        return true;
    }
}
function validateEmail(emid){
    var regex=/^[a-zA-Z0-9_.+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
if(regex.test(emid)){
    return true;
}
}
function validate(){
    if (validatepass() && validateEmail(document.getElementById("emid").value)) {
        if(document.querySelector("submitBtn").submit()){
            alert("form is submitted");
        }
    }

    else{
        alert("form is not submitted");
    }

}