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
    for(i=0;i<=14;i++){
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
//Relleno
//comienza con el -1 por que no tiene ninguna pintada al iniciar
let contadores=[-1,-1,-1,-1,-1,-1];
//Varible para la animacion
let entro=false;
//funcion de la animacion
function efectoHablidades(){
    var habilidades =document.getElementById("habilidades");
    var distancia= window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia>=300 && entro==false){
        entro =true;
        const intervajavascript = setInterval(function(){
            pintar(javascript,8,0,intervajavascript);
        },100)
        const intervapython= setInterval(function(){
            pintar(python,10,1,intervapython);
        },100)
        const intervaHtml = setInterval(function(){
            pintar(html,14,2,intervaHtml);
        },100)
        const intervacss = setInterval(function(){
            pintar(css,12,3,intervacss);
        },100)
        const intervagit = setInterval(function(){
            pintar(git,12,4,intervagit);
        },100)
        const intervagitbuh = setInterval(function(){
            pintar(gitbuh,9,5,intervagitbuh);
        },100)
    }
}
//pintado de barra segun el porcentaje
function pintar(id_barra,cantidad,indice,interval){
    contadores[indice]++;
    x=contadores[indice];
    if(x<cantidad){
        let elementos =id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor="rgb(112, 214, 255)"
    }
    else{
        clearInterval(interval)
    }
}

window.onscroll=function(){
    efectoHablidades();
}