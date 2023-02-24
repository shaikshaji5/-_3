
var inputfeild= document.getElementById('inp');

var button= document.getElementById('addbtn');

var pending_list= document.getElementById('pend_list');
var complete_list= document.getElementById('comp_list');


button.addEventListener('click',function(){
    let d = new Date();
    let time=String(d).slice(0,10);
    let para = document.createElement('p');
    para.innerText=inputfeild.value;
  
    pending_list.appendChild(para);

    inputfeild.value="";
    para.classList.add("pend_addlist");
    para.addEventListener('click',function(){
        para.style.textDecoration="line-through";
        complete_list.appendChild(para);
        pending_list.removeChild(para);
    })
}) 
