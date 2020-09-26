let navbar = document.querySelector(".navbar");
window.onscroll = function()
{
    if(window.scrollY === 0 )
    {
        navbar.classList.remove("positive-top");
        navbar.classList.remove("mince-top");
    }
    if(window.scrollY > 0 && window.screenY < 100)
    {
        navbar.classList.remove("positive-top");

        navbar.classList.add("mince-top");
    }
    if(window.scrollY >= 200)
    {
        navbar.classList.remove("mince-top");
        navbar.classList.add("positive-top");
    }
}
