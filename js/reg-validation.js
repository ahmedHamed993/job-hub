let name = document.querySelector(".email-input");
let pass = document.querySelector(".pass-input");
let confirmPass = document.querySelector(".confirm-pass-input");
let fullName = document.querySelector(".full-name-input");
let btn = document.querySelector(".login-btn");
btn.onclick= function(){
    if(name.value ==="" || pass.value==="" || confirmPass.value==="" || fullName.value==="" )
    {
        swal({
            title: 'error',
            text: "there is one field at least is empty",
            imageUrl: "../images/error.png",
          });
    }
    else 
    {
        let str = `${name.value}`;
        let passValue = `${pass.value}`;
        let confirmPassValue = `${confirmPass.value}`;
        //email fiels
        if  (!str.includes("@"))
        {
            swal({
                title: 'error',
                text: "invalid email",
                imageUrl: "../images/error.png",
            });
        }
        else 
        {
            if(!str.endsWith(".com"))
            {
                swal({
                    title: 'error',
                    text: "invalid email",
                    imageUrl: "../images/error.png",
                });
            }   
        }
           //pass field
        if(passValue.length <= 7)
        {
            swal({
                title: 'error',
                text: "too short pass",
                imageUrl: "../images/error.png",
              });
        }
        //check mathc of pass 
        if (passValue != confirmPassValue)
        {
            swal({
                title: 'error',
                text: "confirm password not equal password",
                imageUrl: "../images/error.png",
              });
        }
    }
}
