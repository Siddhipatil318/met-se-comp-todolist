let save=document.querySelector(".btnsave")
let Name=document.querySelector("#name")
let description=document.querySelector("#description");
let addtodo=document.querySelector(".btn-todo")
let pop=document.querySelector(".pop")
let dnone=document.querySelector(".d-none")
let reg=document.querySelector(".reg")
let Priority=document.querySelector("#Priority")
// console.log(save);
// console.log(Name.value);
// console.log(description);
// console.log(addtodo);
// console.log(pop);
// console.log(dnone)
console.log(Priority)
addtodo.addEventListener("click",()=>
{
    
    reg.classList.remove("d-none");
});
save.addEventListener("click",()=>
{
    reg.classList.add("d-none");

    let detail=
    {
        name:Name.value,
        Description:description.value,
        priority:Priority.value,

    }
    console.log(detail);
    localStorage.setItem("data",detail);
let data = localStorage.getItem("data"); // null;
data = data === null ? [] : JSON.parse(data);

blogs.unshift(detail);
localStorage.setItem("data", JSON.stringify(data));
alert("data Saved Successfully");
});