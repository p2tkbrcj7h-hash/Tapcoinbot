let coins=0
let token=null

const coin=document.getElementById("coin")
const chest=document.getElementById("chest")
const gold=document.getElementById("gold")
const coinText=document.getElementById("coins")
const tokenText=document.getElementById("token")

function createToken(){
token=Math.random().toString(36).substring(2,12)
localStorage.setItem("token",token)
tokenText.innerText=token
}

document.getElementById("createToken").onclick=createToken

coin.onclick=()=>{

coins++
coinText.innerText=coins

let rnd=Math.random()

if(rnd<0.05){
chest.style.display="block"
}

if(rnd<0.01){
gold.style.display="block"
}

}

chest.onclick=()=>{

let bonus=Math.floor(Math.random()*200)+20

coins+=bonus
coinText.innerText=coins

alert("🎉 Сундук дал "+bonus+" монет")

chest.style.display="none"

}

gold.onclick=()=>{

let bonus=Math.floor(Math.random()*500)+500

coins+=bonus
coinText.innerText=coins

alert("🌟 ЗОЛОТОЙ сундук "+bonus+" монет")

gold.style.display="none"

}
