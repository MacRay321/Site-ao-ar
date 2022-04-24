let c = document.querySelector("#cursor");

export default function mouse(){

    document.body.addEventListener("mousemove",(z)=>{

        c.style.top = `${z.pageY}px`;
        c.style.left = `${z.pageX}px`;
    
    })

}

