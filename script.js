let parent=document.getElementsByClassName("parent");
console.log(parent);

function getdata(){
    console.log("hi, inside getdata function");
    parent[0].innerHTML="<h2 style=color:red>hi, event handled </h2>";
}