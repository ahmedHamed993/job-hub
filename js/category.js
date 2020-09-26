let cards = document.querySelectorAll(".card");
let cards_array = Array.from(cards);
cards_array.forEach(el=>{
    if(el.classList.contains("remote"))
    {
        let span = document.createElement("span");
        let span_text = document.createTextNode("remote");
        span.className="remote-span";
        span.appendChild(span_text);
        el.appendChild(span);
    }
})