let input = document.getElementById('inp')
let text = document.querySelector(".text")

function Add(){
    text.style.color = "black"
    if (input.value === ""){
        Swal.fire({
            icon: "error",
            title: "Please Enter a Task",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
    }else{
        let newEle = document.createElement("ul");
        newEle.innerHTML =`
        ${input.value} <i  class="fa-regular fa-circle-xmark" style="cursor: pointer;"></i>
        `
         text.appendChild(newEle)
        input.value = "";
        newEle.querySelector('i') .addEventListener("click",remove);
        function remove(){
            newEle.remove()
        }
   
    }
}