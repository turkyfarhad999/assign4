function updateCounts(){

    const allCount=document.querySelectorAll("#maindiv .jobs").length;
    const intCount=document.querySelectorAll("#int .jobs").length;
    const rejCount=document.querySelectorAll("#rej .jobs").length;

    total.innerText=allCount;
    interview.innerText=intCount;
    reject.innerText =rejCount;
    document.getElementById("jobless")
    .classList.toggle("hidden", allCount!==0);

    document.getElementById("jobless-int")
        .classList.toggle("hidden", intCount!==0);

    document.getElementById("jobless-rej")
        .classList.toggle("hidden",rejCount!== 0);
}
