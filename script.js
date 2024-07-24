
function addTasks(){
    const tasks=document.getElementById("tasks");
    const taskContainer=document.getElementById("input") ;
    const taskName=taskContainer.value.trim();
    taskContainer.value='';

    if(taskName!==''){
    const taskchildContainer= document.createElement("div");
    taskchildContainer.setAttribute("id","tasks-child");
    taskchildContainer.setAttribute("class","tasks-child");
    tasks.appendChild(taskchildContainer);

    const taskChild=document.createElement("ol");
    taskChild.setAttribute("id","child");
    taskChild.setAttribute("class","child");
    taskchildContainer.appendChild(taskChild);

    const buttonContainer=document.createElement("button");
    buttonContainer.setAttribute("id","inputs");
    buttonContainer.setAttribute("class","inputs");
    // buttonContainer.textContent=ip;
    taskChild.appendChild(buttonContainer);
      const ul=document.createElement("ul");
      buttonContainer.appendChild(ul);
      const li=document.createElement("li");
    //   li.innerHTML= ip;
      ul.appendChild(li);
      const buttonChild=document.createElement("button");
      buttonChild.setAttribute("class","div2");
      buttonChild.textContent=taskName;
      li.appendChild(buttonChild);
      let count=1;
    buttonChild.onclick=function(){
        if(count){
        buttonChild.style.textDecoration="line-through";
    count= 0;}
    else{
        buttonChild.style.textDecoration="none";
    count= 1;}
       

    }

    const deleteButton=document.createElement("button");
    deleteButton.setAttribute("id","remove");
    deleteButton.setAttribute("class","remove");
    deleteButton.textContent="Delete";
    taskChild.appendChild(deleteButton);
    deleteButton.onclick= function(){
        tasks.removeChild(taskchildContainer);
    }

}
else{
    alert("Enter a task :)")
}
}