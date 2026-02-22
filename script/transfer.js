let total=document.getElementById("total");
let interview=document.getElementById("interview")
let intcount=interview.innerText;
let reject=document.getElementById("rejected")
let intrej=reject.innerText;
let count=0;
const jobles=document.getElementById("jobless")
let jobs=document.getElementsByClassName("jobs");
let headingjob=document.getElementById("headingjobs")

for( const i of jobs){
    count++;
}
total.innerText=count;
headingjob.innerText=count;

// interview
const buttons=document.getElementsByClassName("int-btn")
for(const button of buttons){
    button.addEventListener("click",function(){
        const intersec=document.getElementById("int")
        const card=this.closest(".jobs")
        const clonecard=card.cloneNode(true)
        
        intersec.appendChild(clonecard)
        count--
        headingjob.innerText=count;
        const badge = card.querySelector(".dibu")
        const badgecln=clonecard.querySelector(".dibu")
        if(badge){
            badge.innerText="Interviwed"
            badgecln.innerText="Interviwed"
        }
        updateCounts()
    })
}
//rejected
const buttonss=document.getElementsByClassName("rej-btn")
for(const button of buttonss){
    button.addEventListener("click",function(){
        const rejsec=document.getElementById("rej")
        const card=this.closest(".jobs")
        const clonecard=card.cloneNode(true)
        rejsec.appendChild(clonecard)
        count--
        headingjob.innerText=count;
         const badge = card.querySelector(".dibu")
        const badgecln=clonecard.querySelector(".dibu")
        if(badge){
            badge.innerText="Rejected"
            badgecln.innerText="Rejected"
        }
         updateCounts()
    })
}
//delete
const addint=document.getElementById("int")
const addrej=document.getElementById("rej")
function handleDelete(e) {
    const delBtn = e.target.closest(".del-btn");  
    

    const card = delBtn.closest(".jobs"); 
    if (card) {
        card.remove(); 
        updateCounts(); 
        count++;
        headingjob.innerText=count;

    }
}

// Attach the delegation
addint.addEventListener("click", handleDelete);
addrej.addEventListener("click", handleDelete);


const maindiv=document.getElementById("maindiv")
const headall=document.getElementById("head-all")
const headInt=document.getElementById("head-int")
const headRej=document.getElementById("head-rej")


headInt.addEventListener("click",function(){
         maindiv.classList.add("hidden")
         addint.classList.remove("hidden")

})
headRej.addEventListener("click",function(){
         maindiv.classList.add("hidden")
         addrej.classList.remove("hidden")

})
headall.addEventListener("click",function(){
         maindiv.classList.remove("hidden")
         addint.classList.add("hidden")
          addrej.classList.add("hidden")
         

})

