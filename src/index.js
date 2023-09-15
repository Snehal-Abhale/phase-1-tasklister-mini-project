document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
    const form= document.querySelector("#create-task-form");

    form.addEventListener("submit",(event)=>{
    
      const priority=document.querySelector("#dropdown");
      const p=priority.value;
      
      const txtDesc=document.querySelector("#new-task-description");
      const inputVal=txtDesc.value; 
      const ul=document.querySelector("#tasks");
      const li=document.createElement("LI");
      const txtLi=document.createTextNode(" "+inputVal+" ");
     

      const btn=document.createElement("button");
      btn.textContent="X";
      btn.setAttribute("data-description",inputVal);

      li.appendChild(txtLi);
      if(p==="High")li.style.color="red";
      if(p==="Medium") li.style.color="Blue";
      if(p==="Low")li.style.color="green";

      ul.appendChild(li);
      li.appendChild(btn);

    


      const sortVal= document.querySelector("#sort").value;
      if(sortVal==="H"){
        console.log("clicked");
        if(li.style.color==="red")
        {
          ul.append(li);
        }
      }
      event.preventDefault();
      btn.addEventListener("click", ()=>{
           li.remove();
          });
  });

});







