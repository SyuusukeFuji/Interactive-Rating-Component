const card1= document.querySelector("#card1");
const ratedCard= document.querySelector("#ratedCard");
const send= document.getElementById("send");
const rating=document.querySelectorAll(".r-buttons");
const score= document.getElementById("score");
send.addEventListener("click", ()=>{
    ratedCard.classList.remove("hideit");
    card1.classList.add("hideit");
})

rating.forEach((rating)=>{
    rating.addEventListener("click", ()=>{
        score.innerHTML=rating.innerHTML;
    })
})