const btn = document.querySelector("#menu-mobile");
const ulmenu = document.querySelector("#ul-navbar");
const linksmenu = document.querySelectorAll("#ul-navbar a");

export default function menumobile() {
    
    function menumobilee(){
    
        ulmenu.style.display == "flex" ? ulmenu.style.display = "none" : ulmenu.style.display = "flex";
    
    }
    
    btn.addEventListener("click", menumobilee);

    linksmenu.forEach((x,z,t)=>{

        x.addEventListener("click",()=>{

            ulmenu.style.display = "none";

        })

    })

}


