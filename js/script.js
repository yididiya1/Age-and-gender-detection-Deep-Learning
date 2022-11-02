
//Username (empty)
//Email
//Gender
//Password
//Confirm Password


let form = document.getElementById('form');
let username = form.elements['username'];

form.addEventListener('submit',function(e){
    e.preventDefault(e)
    validateInputs()
})


function setError(element,message){
    let inputControl = element.parentElement;
    let errorDisplay =  inputControl.querySelector('.error')

    errorDisplay.textContent = message;

}


function validateInputs(){
    //username
    let usernameValue  = username.value;
    if(usernameValue == ""){
        setError(username,"Please Enter Username")
    }else{
        //remove error message
    }
}















