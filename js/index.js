var btnDark=document.getElementById('btn-dark');
var btnLight=document.getElementById('btn-light');
const homeCaption=document.getElementById("homeCaption");
const homeImage=document.getElementById("homeImage");
const aboutImage=document.getElementById("aboutImage");
const aboutCaption=document.getElementById("aboutCaption");
const edu=document.getElementById("edu");
const sk1=document.getElementById("sk1");
const sk2=document.getElementById("sk2");
const sk3=document.getElementById("sk3");

let width=window.innerWidth;


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

if(innerWidth>1024)
{
    
    window.addEventListener("load",function(){
        homeCaption.style.transform="translateX(0)";
        homeImage.style.transform="translateX(0)";
    })
    window.addEventListener("scroll",function(){
        let scroll=window.scrollY;
        if(scroll>500&&scroll<1000)
        {
            aboutCaption.style.transform="translateX(0)"; 
            aboutImage.style.transform="translateX(0)"; 
        }
        if(scroll>1200&&scroll<1400)
        {
            edu.style.transform="translateX(0)"; 
             
        }
        if(scroll>1800&&scroll<2000)
        {
            sk1.style.transform="translateX(0)"; 
            sk2.style.transform="scale(1)"; 
            sk3.style.transform="translateX(0)"; 
             
        }
    console.log(scroll);
    })
    
}



