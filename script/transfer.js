
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

 
document.addEventListener("click",function(e){
    const card=e.target.closest(".jobs")
    const parent=card.parentNode
     const badgemain=card.querySelector(".dibu")
     
    

     const maindiv = document.getElementById("maindiv");
    const intSec = document.getElementById("int");
    const rejSec = document.getElementById("rej");
     const badge = card.querySelector(".dibu");
    if(e.target.closest(".int-btn")){
      
        if(parent.id=="int")return;
       else if(parent.id=="maindiv"){
            const clonecard=card.cloneNode(true)
            intSec.appendChild(clonecard)
          
             const badge = clonecard.querySelector(".dibu")
            if (badge) badge.innerText = "Interviewed";
            badgemain.innerText="Interviewed"
            updateCounts()
        }
        else{
           intSec.appendChild(card)
          
            if (badge) badge.innerText = "Interviewed";
           updateCounts()
        }
    }
})
//rejected
document.addEventListener("click",function(e){
    const card=e.target.closest(".jobs")
    const parent=card.parentNode
    const maindiv = document.getElementById("maindiv");
    const intSec = document.getElementById("int");
    const rejSec = document.getElementById("rej");
    if(e.target.closest(".rej-btn")){
        if(parent.id=="rej")return;
        else if( parent.id=="maindiv"){
            const clonecard=card.cloneNode(true)
            rejSec.appendChild(clonecard)
             const badgemain=card.querySelector(".dibu")
            const badge = clonecard.querySelector(".dibu");
            if (badge) badge.innerText = "Rejected";
             badgemain.innerText="Rejected"
            updateCounts()
        }
        else{
            rejSec.appendChild(card)
             const badge = card.querySelector(".dibu");
            if (badge) badge.innerText = "Rejected";
            updateCounts()
        }
    }
})
//delete
const addint=document.getElementById("int")
const addrej=document.getElementById("rej")
function handleDelete(e) {
    const delBtn = e.target.closest(".del-btn");  
    

    const card = delBtn.closest(".jobs"); 
    if (card) {
        const parent=card.parentNode
        card.remove(); 
        updateCounts();
        
         
        if(parent.id=="int"){
              const headcountint=document.querySelectorAll("#int .jobs").length
         headingjob.innerText=headcountint
        }
        else if(parent.id=="rej"){
            const headcountrej=document.querySelectorAll("#rej .jobs").length
         headingjob.innerText=headcountrej
        }
        else{

        }
         


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
         addrej.classList.add("hidden")
         addint.classList.remove("hidden")

         
     const headcountint=document.querySelectorAll("#int .jobs").length
         headingjob.innerText=headcountint


})
headRej.addEventListener("click",function(){
         maindiv.classList.add("hidden")
         addint.classList.add("hidden")
         addrej.classList.remove("hidden")
      const headcountrej=document.querySelectorAll("#rej .jobs").length
         headingjob.innerText=headcountrej
})
headall.addEventListener("click",function(){
         maindiv.classList.remove("hidden")
         addint.classList.add("hidden")
          addrej.classList.add("hidden")
          
          const headcountmain=document.querySelectorAll("#maindiv .jobs").length
         headingjob.innerText=headcountmain

})

