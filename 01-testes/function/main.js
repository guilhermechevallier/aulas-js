// get form

let btn = document.querySelector('#envData');

btn.addEventListener('click', function(){
    const x = document.forms['frm1'];
    let text = '';
    
    for (let i = 0; i < x.length; i++){
        text += `<p> ${x.elements[i].value}</p>`
    }
    document.getElementById("infor").innerHTML = text;
})

