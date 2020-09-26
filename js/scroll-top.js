let scroll_to_top_btn = document.querySelector(".scroll-to-top-btn");
scroll_to_top_btn.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
})
window.addEventListener("scroll",function(){
    if(window.scrollY < 100)
    {
        scroll_to_top_btn.style.right = "-60px";
    }
    else if(window.scrollY > 100 )
    {
        scroll_to_top_btn.style.right = "10px";
    }
})

