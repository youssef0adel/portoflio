var btnDark=document.getElementById('btn-dark');
var btnLight=document.getElementById('btn-light');

function btndark(){
    btnDark.classList.add('d-none');
    btnLight.classList.remove('d-none');
    let html = document.getElementById("ht");
    html.setAttribute("data-bs-theme", "dark");
    let body=document.getElementById('bd');
    body.classList.add('bg-main');
    document.getElementById('contactButton').classList.remove('text-black');
    
}
function btnlight(){
    btnDark.classList.remove('d-none');
    btnLight.classList.add('d-none');
    let html = document.getElementById("ht");
    html.setAttribute("data-bs-theme", "light");
    let body=document.getElementById('bd');
    body.classList.remove('bg-main');
     document.getElementById('contactButton').classList.add('text-black');
    
}
