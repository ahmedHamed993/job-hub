let name = document.querySelector(".email-input");
let pass = document.querySelector(".pass-input");
let confirmPass = document.querySelector(".confirm-pass-input");
let fullName = document.querySelector(".full-name-input");
let btn = document.querySelector(".login-btn");
btn.onclick= function(){
    if(name.value ==="" || pass.value===""  )
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
           
        if(passValue.length < 7)
        {
            swal({
                title: 'error',
                text: "too short pass",
                imageUrl: "../images/error.png",
              });
        }
    }
}
