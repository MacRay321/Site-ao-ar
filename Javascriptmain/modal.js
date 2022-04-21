const c = document.getElementById("div-modal");
const y = document.querySelectorAll(".areas-clicaveis")
const l = document.querySelectorAll(".btn-signup");
const o = document.querySelector("#ul-navbar");

export default function modal(){

    l.forEach((x)=>{

        x.addEventListener("click", ()=>{
    
            c.style.display == "" ? c.style.display = "flex" : c.style.display = "none"
        
            ddd();
        
        })

    })
    
    function ddd(){
    
        document.body.addEventListener("click",(e)=>{
    
            if(e.target == y[0] || e.target == y[1] || e.target == y[2] || e.target == y[3] || e.target == y[4] || e.target == l[0] || e.target == l[1]){
    
                c.style.display = "flex";
    
            } else{
    
                c.style.display = "none";
    
            }
    
        })
    
    }

}    

