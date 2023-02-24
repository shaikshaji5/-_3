let inputfeild= document.getElementById('inp');
let button1= document.getElementById('addbtn');
let pending_list= document.getElementById('pend_list');

button1.addEventListener('click',function(){
    inputfeild.value="";

    var para = document.createElement('p');
    para.innerText=inputfeild.value;
    pending_list.appendChild(para);

    // document.appendChild(p);
}) 
