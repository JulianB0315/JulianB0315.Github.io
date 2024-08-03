//Menu lateral
var menu_visible =false;
let menu=document.getElementById("nav");
//funcion en el html
function mostarOcultarMenu(){
    if(menu_visible==false){//Menu oculto
        menu.style.display="block";
        menu_visible=true;
    }
    else{
        menu.style.display="none";
        menu_visible=false;
    }
}
// oculta el menu una vez pasado el mouse
let links =document.querySelectorAll("nav a");
for(var x=0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display="none";
        menu_visible=false;
    }
}
//Animacion
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div")
        div.className="e"
        id_barra.appendChild(div);
    }
}
//todas la barras
let python = document.getElementById("python");//Por el id div
crearBarra(python);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let html = document.getElementById("html");
crearBarra(html);
let css = document.getElementById("css");
crearBarra(css);
let git = document.getElementById("git");
crearBarra(git);
let gitbuh = document.getElementById("gitbuh");
crearBarra(gitbuh);
