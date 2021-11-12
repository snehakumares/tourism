function validate(){
    var x = emailvalidate();
    var y = passwordvalidate();
    if(x==false || y==false){
        return false;
    }
    else{
        if(document.title=="Sign Up"){
            var z = phonevalidate();
            if(z==false)
                return false;
        }
        else
            return true;
    }
}
function emailvalidate(){
    let email = document.getElementById("inputEmail4").value.trim();
    if(email==""){ 
        document.getElementById("emailerror").innerHTML="Email cannot be empty";
        return false;
    }
    else{
        document.getElementById("emailerror").innerHTML="";
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            document.getElementById("emailerror").innerHTML="Enter valid email";
        }
    }
}
function passwordvalidate()
{
    let password = document.getElementById("inputPassword4").value.trim();
    let strengthBadge = document.getElementById('StrengthDisp');
    if(password==""){ 
        document.getElementById("passworderror").innerHTML="Password cannot be empty";
        strengthBadge.style.display = 'none';
        return false;
    }
    else{
        document.getElementById("passworderror").innerHTML="";
        if(document.title="Sign Up"){
            let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
            let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')
            strengthBadge.style.display = 'block';
            if(strongPassword.test(PasswordParameter)) {
                strengthBadge.style.backgroundColor = "green";
                strengthBadge.textContent = 'Strong';
                return true;
            } else if(mediumPassword.test(PasswordParameter)) {
                strengthBadge.style.backgroundColor = 'blue';
                strengthBadge.textContent = 'Medium';
                return false;
            } else {
                strengthBadge.style.backgroundColor = 'red';
                strengthBadge.textContent = 'Poor';
                return false;
            }
        
        }
    }
}

function phonevalidate()
{
    let phone = document.getElementById("inputPhone").value.trim();
    if(phone==""){ 
        document.getElementById("phoneerror").innerHTML="Phone Number cannot be empty";
        return false;
    }
    else{
        document.getElementById("phoneerror").innerHTML="";
        let regex=/^\d{10}$/;
        let regex1=/^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;
        let regex2=/^\(?([0-9]{3})\)?[.]?([0-9]{3})[.]?([0-9]{4})$/;
        let regex3=/^\(?([0-9]{3})\)?[ ]?([0-9]{3})[ ]?([0-9]{4})$/;
        if(!regex.test(phone) && !regex1.test(phone) && !regex2.test(phone) && !regex3.test(phone)){
            document.getElementById("phoneerror").innerHTML="Enter valid phone number";
            return false
        }

    }
    
}

