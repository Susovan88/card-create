
let container=document.querySelector(".card-container");
let card=document.querySelector(".card");
let p=document.querySelector("img");
console.dir(p);

function createCard(title,cName,views,month,duration,link){
    let head=document.createElement("div");
    head.classList.add("title");
    head.innerText=title;

    let name=document.createElement("div");
    name.classList.add("cName");
    name.innerText=cName;

    let v=document.createElement("div");
    v.classList.add("views");
    v.innerText=views;

    let m=document.createElement("div");
    m.classList.add("month");
    m.innerText=month;

    let d=document.createElement("div");
    d.classList.add("duration");
    d.innerText=duration;

    let img=document.createElement("img");
    img.classList.add("link");
    img.src=link;

    let btnDelete=document.createElement("button");
    btnDelete.classList.add("delete-btn");
    btnDelete.innerText="Delete";

    let information=document.createElement("div");
    information.classList.add("info");

    information.appendChild(name);
    information.appendChild(v);
    information.appendChild(m);

    let text=document.createElement("div");
    text.classList.add("all-text");
    text.appendChild(head);
    text.appendChild(information);

    let imL=document.createElement("div");
    imL.classList.add("img");
    imL.appendChild(img);
    imL.appendChild(d);
    
    let box=document.createElement("div");
    box.classList.add("card");
    box.appendChild(imL);
    box.appendChild(text);
    box.appendChild(btnDelete);

    container.appendChild(box);
}

// createCard("this is my first HTML web page | I am so happy ","codeWithPupai","708k","3 months ago","12:26","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDWfGPsuQKuWateaRbWeBo1MDhM3A");

let btnDelete=document.querySelector(".delete-btn");
btnDelete.addEventListener("click",function(){
    btnDelete.parentElement.remove();
})

let form=document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
    let name=`${form.elements[0].value}`;
    let time=`${form.elements[1].value}`;
    let title=`${form.elements[2].value}`;
    let link=`${form.elements[3].value}`;
    let views=`${form.elements[4].value}`;
    let month=`${form.elements[5].value} ${form.elements[6].value}`;
    createCard(title,name,views,month,time,link);
});

container.addEventListener("click",function(event){
    if(event.target.nodeName =='BUTTON'){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("delete");
    }
});






