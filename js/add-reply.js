let nameField = document.querySelector(".reply-form .name-field");
let emailField = document.querySelector(".reply-form .email-field");
let textareaField = document.querySelector(".reply-form .message-field");
let postComment = document.querySelector(".reply-form .post-comment");
let userID =2;
postComment.onclick = function(){
    if(nameField.value === "" || emailField.value ==="" || textareaField.value === "")
    {

        swal({
            icon: 'error',
            title: 'error',
            text: "there is one field at least is empty",
            imageUrl: "../images/error.png",
          });
    }
    else 
    {
        let str = `${emailField.value}`;
        if(!str.includes("@") && !str.includes(".com") )
        {
            swal({
                icon: 'error',
                title: 'error',
                text: "invalid email",
                imageUrl: "../images/error.png",
            });
            //empty fields
            nameField.value="";
            textareaField.value="";
            emailField.value="";
            return 0;
        }
        //create comment div and set class name
        let commentDiv = document.createElement("div");
        commentDiv.className ="comment";
        //create img and set src attr
        let userImg = document.createElement("img");
        userImg.src=`../images/comment_${userID}.png`;
        //append img for comment div 
        commentDiv.appendChild(userImg);
        //create comment text and append it to comment div 
        let commentText = document.createElement("div");
        commentText.className="comment-text";
        commentDiv.appendChild(commentText);
        //create p tag and put value of message in it 
        let p = document.createElement("p");
        p.innerHTML=textareaField.value;
        //apend p to comment text
        commentText.appendChild(p);
        //create comment write span 
        let commentWriter = document.createElement("span");
        commentWriter.className="comment-writer"; 
        commentWriter.innerHTML=`<a href='#'>${nameField.value}</a>`;
        commentText.appendChild(commentWriter);
        //create span date 
        let dateSpan = document.createElement("span");
        dateSpan.className="comment-date";
        dateSpan.innerHTML = getCurrentDate();
        commentText.appendChild(dateSpan);
        //create span reply 
        let replySpan = document.createElement("span");
        replySpan.className="reply";
        replySpan.innerHTML=`<a href="#">reply</a>`;
        commentText.appendChild(replySpan);
        ///////////////////////////////////////
        document.querySelector(".comments-section").appendChild(commentDiv);
        //empty fields 
        nameField.value="";
        textareaField.value="";
        emailField.value="";
    }
}
function getCurrentDate()
{
    var currentdate = new Date();
    var datetime =  currentdate.toLocaleString("default", { month: "long" }) + " " + currentdate.getDay() 
    + "," + currentdate.getFullYear() +" at " 
    + currentdate.getHours() + ":" 
    + currentdate.getMinutes();
    return datetime;
}