
let input = document.querySelector("#input");
let addBtn = document.querySelector("#addBtn");

console.log(input);
console.log(addBtn);


addBtn.addEventListener("click" , () =>{
    console.log(input.value)
    let div = document.createElement("div");
document.body.append(div);
div.className = "cards"

let h1 = document.createElement("h1");
h1.innerHTML = input.value

div.append(h1);
let editBtn = document.createElement("button");
editBtn.innerHTML = "edit"

let delBtn = document.createElement("button")
delBtn.innerHTML = "delte"

div.append(editBtn);
div.append(delBtn);



editBtn.addEventListener("click" , () =>{
    console.log("click");
    console.log(h1.innerHTML)
    let update = prompt("enter the new task" , h1.innerHTML)
    console.log(update);
    h1.innerHTML = update;
    input.value = "";
})


delBtn.addEventListener("click" , () =>{
    console.log("lcikc");
    div.remove();
    input.value = "";
})



})
