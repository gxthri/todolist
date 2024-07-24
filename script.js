
function addTasks(){
    const tasks=document.getElementById("tasks");
    const div=document.getElementById("input") ;
    const ip=div.value.trim();
    div.value='';

    if(ip!==''){
    const d2= document.createElement("div");
    d2.setAttribute("id","tasks-child");
    d2.setAttribute("class","tasks-child");
    tasks.appendChild(d2);

    const d3=document.createElement("ol");
    d3.setAttribute("id","child");
    d3.setAttribute("class","child");
    d2.appendChild(d3);

    const ip1=document.createElement("button");
    ip1.setAttribute("id","inputs");
    ip1.setAttribute("class","inputs");
    // ip1.textContent=ip;
    d3.appendChild(ip1);
      const ul=document.createElement("ul");
      ip1.appendChild(ul);
      const li=document.createElement("li");
    //   li.innerHTML= ip;
      ul.appendChild(li);
      const div2=document.createElement("button");
      div2.setAttribute("class","div2");
      div2.textContent=ip;
      li.appendChild(div2);
      let count=1;
    div2.onclick=function(){
        if(count==1){
        div2.style.textDecoration="line-through";
    count= count+1;}
    else{
        div2.style.textDecoration="none";
    count= count-1;}
       

    }

    const bb=document.createElement("button");
    bb.setAttribute("id","remove");
    bb.setAttribute("class","remove");
    bb.textContent="Delete";
    d3.appendChild(bb);
    bb.onclick= function(){
        d1.removeChild(d2);
    }

}
else{
    alert("Enter a task :)")
}
}