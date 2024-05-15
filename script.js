const leftBtn=document.getElementById("leftBtn");
const leftSlider=document.querySelector(".leftSlider");

// open sidebar
leftBtn.addEventListener('click',( )=>{
    leftSlider.classList.toggle("comeOut");
})

// click on link and sidebar also closes 
const links=document.querySelectorAll(".leftSlider a");

links.forEach((link,index)=>{
    link.addEventListener('click',( )=>{
        leftSlider.classList.remove("comeOut");
    })
})


// click outside the sidebar and it closes 
document.addEventListener('click', (event) => {
    if (!leftSlider.contains(event.target) && !leftBtn.contains(event.target)) {
        leftSlider.classList.remove("comeOut");
    }
});

