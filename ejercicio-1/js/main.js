const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const text = document.getElementById("text");
    
    if (text.classList.contains("colorOrange")) {
        text.classList.remove("colorOrange");
    }else{
        text.classList.add("colorOrange");
    }
    
})
