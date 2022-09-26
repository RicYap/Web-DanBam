function validate(){
   
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var male = document.getElementById("male").checked
    var female = document.getElementById("female").checked
    var branch = document.getElementById("branch").value
    var msg = document.getElementById("msg").value
    var check = document.getElementById("check").checked
    var flag = 0;

    if(flag != 6){
        if(name == ''){
            errorName.innerHTML = "Name must be filled"
        }
        else if(!isNaN(name)){
            errorName.innerHTML = "Name can not be mixed with number"
        }
        else{
            errorName.innerHTML = ""
            flag = flag + 1
        }

    

        if(email == ''){
            errorEmail.innerHTML = "Email must be filled"
        }
        else if(email.indexOf("@") == -1){
            errorEmail.innerHTML = "Email must containt @"
        }
        else if(email.split("@").length > 2){
            errorEmail.innerHTML = "Email must be containt only 1 @"
        }
        else if(!email.endsWith(".com")){
            errorEmail.innerHTML = "Email must be ends with .com"
        }
        else if(email.indexOf("@") == 0){
            errorEmail.innerHTML = "Email can not be start with @"
        }
        else{
            errorEmail.innerHTML = ""
            flag = flag + 1
        }

        

        if(!male && !female){
            errorGender.innerHTML = "Gender must be choosed"
        }
        else{
            errorGender.innerHTML = ""
            flag = flag + 1
        }

        

        if(branch == ''){
            errorBranch.innerHTML = "Branch must be selected"
        }
        else{
            errorBranch.innerHTML = ""
            flag = flag + 1
        }

        

        if(msg == ''){
            errorMsg.innerHTML = "Message must be filled"
        }
        else{
            errorMsg.innerHTML = ""
            flag = flag + 1
        }

        

        if(!check){
            errorCheck.innerHTML = "Agreement must be checked"
        }
        else {
            errorCheck.innerHTML = ""
            flag = flag + 1
        }

        // console.log("${flag}"+flag)
    }
    
    if(flag == 6){
        alert("Message send succesfully")
    }
    else{
        flag = 0
        event.preventDefault()
    }
}