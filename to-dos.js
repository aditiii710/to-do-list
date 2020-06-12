function add_to_do(){         
    var input_text=document.getElementById("input").value;
    var li_element=document.createElement("li");
    li_element.innerHTML=input_text;                                            
    var delete_me_btn=document.createElement("button");
    var delete_text=document.createTextNode("remove");    
    delete_me_btn.appendChild(delete_text);
    delete_me_btn.setAttribute("onclick","delete_to_do(event)");
    li_element.appendChild(delete_me_btn);
    var x=document.getElementById("tasks").getElementsByTagName("ul")[0];
    x.appendChild(li_element); 
    input_text="";
}       
function delete_to_do(event){   
    event.target.parentNode.style.display="none";
}                                                             