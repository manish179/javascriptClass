function firstnameValidate() {
    let first_name = document.getElementById('firstname').value
    if (first_name == "") {
        displayMsg("firstname is required", "fnamemsg", "red")
        return false
    }
    else if (first_name.length < 3) {
        displayMsg("firstname must be more than 2 characters", "fnamemsg", "red")
        return false
    }
    else if (!first_name.match(/^([a-zA-Z])+$/)) {
        displayMsg("fistname conytain only alphabet", "fnamemsg", "red")
        return false
    }
    else {
        displayMsg("valid firstname", "fnamemsg", "green")
        return true
    }

}

function lastnameValidate() {
    let last_name = document.getElementById('lastname').value
    if (last_name == "") {
        displayMsg("lastname is required", "lnamemsg", "red")
        return false
    }
    else if (last_name.length < 3) {
        displayMsg("lastname must be more than 2 characters", "lnamemsg", "red")
        return false
    }
    else if (!last_name.match(/^([a-zA-Z])+$/)) {
        displayMsg("lastname contain only alphabet", "lnamemsg", "red")
        return false
    }
    else {
        displayMsg("valid lastname", "lnamemsg", "green")
        return true
    }
}

function emailValidate() {
    let email = document.getElementById('email').value
    if (email == "") {
        displayMsg("email is required", "emailmsg", "red")
        return false
    }
    // else if(email.length<3){
    //     displayMsg("email must be more than 2 characters","email","red")
    //     return false
    // }
    //12deom_121.4@gmail.com
    else if (!email.match(/^([a-z0-9])[a-z0-9\_\-\.]+\@+(([a-z])+\.)+([a-z])+$/)) {
        displayMsg("invalid email format", "emailmsg", "red")
        return false
    }
    else {
        displayMsg("valid email", "emailmsg", "green")
        return true
    }
}

function passwordValidate() {
    let password = document.getElementById('password').value
    if (password == "") {
        displayMsg("password is required", "passmsg", "red")
        return false
    }
    // else if (password.length < 7) {
    //     displayMsg("password must be more than 7 characters", "passmsg", "red")
    //     return false
    // }
    else if (!password.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%&?!]).{8,}$/)) {
        displayMsg("must contain one uppercase,one lowercase,one digit,one special char and must be more than 8 character", "passmsg", "red")
        return false
    }


    else {
        displayMsg("valid password", "passmsg", "green")
        return true
    }
}


function displayMsg(message, idvalue, colorvalue) {
    document.getElementById(idvalue).innerHTML = message
    document.getElementById(idvalue).style.color = colorvalue
}


function validForm(){
    if(firstnameValidate()&&lastnameValidate()&&emailValidate()&&passwordValidate()){
        return true
    }
    else{
        return false
    }

}