canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");


pony_ancho=120;
pony_alto=120;

background_image = "cabaña.png";

pony_image = "imgpony.png";

pony_x = 10;
pony_y = 10;


 function add(){
    background_imgTag=new Image();                           
    background_imgTag.onload = uploadBackground;                                                                   // Carga la imagen
    background_imgTag.src = background_image;

    pony_imgTag = new Image();  
    pony_imgTag.onload = uploadpony;   
    pony_imgTag.src = pony_image;
}                                     


function uploadBackground(){
    ctx.drawImage (background_imgTag ,0,0, canvas.width, canvas.height);
}                       

function uploadpony(){
    ctx.drawImage(pony_imgTag, pony_x, pony_y, pony_ancho, pony_alto);
    }



window.addEventListener("keydown" , my_keydown);
function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed=='38'){
        up();
    }
    if(keyPressed=='40'){
        down();
    }
    if(keyPressed=='37'){
        left();
    }
    if(keyPressed=='39'){
        right();
    }
}


function up(){
if(pony_y >=0){
    pony_y = pony_y - 5;
    uploadBackground();
    uploadpony();
 }
}
function down(){
    if(pony_y <=500){
        pony_y = pony_y + 5;
        uploadBackground();
        uploadpony();
 }
}
function left(){
    if(pony_x >=0){
        pony_x = pony_x - 5;
        uploadBackground();
        uploadpony();
     }
    }
function right(){
    if(pony_x <=700){
        pony_x= pony_x + 5;
        uploadBackground();
        uploadpony();
     }
    }