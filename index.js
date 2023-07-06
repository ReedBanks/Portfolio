var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");

function opentab(name){
    for (tablink of tablinks){
        tablink.classList.remove("active-link");

    }for (tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
        
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(name).classList.add("active-tab");
}