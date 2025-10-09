const button= document.getElementById("showPic");
const form = document.querySelector("form");
button.addEventListener('click',()=>{
    document.getElementById("dak").style.display = "block";
})


form.addEventListener("submit", (e) => {
  e.preventDefault(); 
  document.getElementById("form").style.backgroundColor = "rgba(142, 190, 171, 1)";
});