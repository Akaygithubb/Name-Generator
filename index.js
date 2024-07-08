const name=document.getElementById("name");
const tags=document.querySelector(".tags");
const addname=()=>{
    if(name.value===""){
        return null;
    }
    const tag=document.createElement("div");
    tag.setAttribute("class","tag");
    tag.innerText=`Hey, My name is ${name.value}`;
    tags.append(tag);
}