let name = document.getElementById('name-input')
let passWord = document.getElementById('password-input')
const eye = document.querySelector("#eye")


function validator(){
    if(name.value === 'SRIRAM' && passWord.value === 'sriRam'){
        // window.open ('', "_blank");
        result.textContent = `Your Credentials are valid! Come in ${name.value}`;
    }else{
        result.textContent = `Your Credentials are invalid! Please Try Again ${name.value}`;
    }
    name = name.value='';
    passWord = passWord.value='';
};

eye.addEventListener("click", function(){
    this.classList.toggle("fa-eye-slash")
    const type = passWord.getAttribute("type") === "password" ? "text" : "password"
    passWord.setAttribute("type", type)
  })


