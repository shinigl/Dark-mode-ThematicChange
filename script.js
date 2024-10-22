let btn = document.getElementById("btn");
let body = document.body ;

btn.addEventListener("click" , ()=>{
    if(body.classList.contains("night")){
        
        body.classList.remove("night");
         body.style.color = "black";
         btn.style.left = "10px";
         body.classList.add("day");

    }

    else{
        body.style.color = "white";
        btn.style.left = "126px";
        body.classList.add("night");
    }
})