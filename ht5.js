let opts = document.querySelectorAll(".opt");
let right = document.querySelector("#opB");
let wrong = document.querySelectorAll("#opw");
let show = document.querySelector(".answ");
let h2 = document.querySelector("h2");
let ret= document.querySelector("#reat");

right.addEventListener("click", ()=>{
    console.log("Answer is Right");
    // right.disabled=true;
    // opts.disabled=true
    h2.innerText="Answer is Right!";
    // show.innerHTML="<div style=''"
    disb();
    alert("Want to Submit?");
})
wrong.forEach((opt)=>{
    opt.addEventListener("click",()=>{
        console.log("Answer is wrong");
        // show.classList.remove("ans1");
        // right.disabled=true;
        // opts.disabled=true;
        h2.classList.add("h2h");
        disb();
        alert("Want to Submit?");
        
    })
})

function disb(){
    opts.forEach((optt)=>{
        optt.disabled=true;
    })
    show.classList.remove("ans1");
}
ret.addEventListener("click",()=>{
    show.classList.add("ans1");
    enab();

})
function enab(){
    opts.forEach((optt)=>{
        optt.disabled=false;
    })
}
 