
let input = document.querySelector("#input");
let addBtn = document.querySelector("#addBtn");

console.log(input);
console.log(addBtn);


addBtn.addEventListener("click" , () =>{
    let div = document.createElement("div");
document.body.append(div);
div.className = "cards"

let h3 = document.createElement("h3");
h3.innerHTML = input.value

div.append(h3);
let editBtn = document.createElement("button");
editBtn.innerHTML = "edit"

let delBtn = document.createElement("button")
delBtn.innerHTML = "delte"

div.append(editBtn);
div.append(delBtn);
input.value = "";

editBtn.className = "buttons"
delBtn.className = "buttons , del_btn "


editBtn.addEventListener("click" , () =>{
    console.log("click");
    console.log(h3.innerHTML)
    let update = prompt("enter the new task" , h3.innerHTML)
    console.log(update);
    h3.innerHTML = update;
    input.value = "";
})


delBtn.addEventListener("click" , () =>{
    console.log("lcikc");
    div.remove();
    input.value = "";
})


})
