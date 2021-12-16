canvas = new fabric.Canvas('bedrock');
playaX =10;
playaY =10;

blockimgwidth=37;
blockimgheight=37;

playerobject="";
blockimgobject= "";
         
function player_update(){
    fabric.Image.fromURL("me.png",function(Img)
    {
        playerobject=Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(140);
        playerobject.set({
            top:playaY,left:playaX        
        });
        canvas.add(playerobject);
    });

}
function newimage(getimage){
    fabric.Image.fromURL(getimage,function(Img)
    {
        blockimgobject=Img;
        blockimgobject.scaleToWidth(blockimgwidth);
        blockimgobject.scaleToHeight(blockimgheight);
        blockimgobject.set({
            top:playaY,left:playaX        
        });
        canvas.add(blockimgobject);
    });

}
window.addEventListener("keydown",mykeydown);

 function mykeydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);

    if (keypressed == '79' && e.shiftKey == true){
        console.log("SHIFT and o pressed together");
        blockimgwidth += 10;
        blockimgheight += 10;
        document.getElementById("current_width").innerHTML = blockimgwidth;
        document.getElementById("current_height").innerHTML = blockimgheight;

    }
    if (keypressed == '77' && e.shiftKey == true){
        console.log("SHIFT and m pressed together");
        blockimgwidth -= 10;
        blockimgheight -= 10;
        document.getElementById("current_width").innerHTML = blockimgwidth;
        document.getElementById("current_height").innerHTML = blockimgheight;

        
    }
    if (keypressed == '37') {
        left();
    }
    if (keypressed == '38') {
        up();
    }
    if (keypressed == '39') {
        right();
    }
    if (keypressed == '40') {
        down();
    }
    if (keypressed == '87') {
        newimage('BRICK.jpg');
        console.log("w");

    }
    if (keypressed == '71') {
        newimage('grass_block.png');
        console.log("g");
    }
    if (keypressed == '76') {
        newimage('moss.png');
        console.log("l");
        
    }
    if (keypressed == '84') {
        newimage('oak_log.jpg');
        console.log("t");
    }
    if (keypressed == '82') {
        newimage('netherrack.jpg');
        console.log("r");
        
    }
    if (keypressed == '89') {
        newimage('gold.png');
        console.log("y");
    }
    if (keypressed == '83') {
        newimage('diarreaha_block.png');
        console.log("s");
        
    }
    if (keypressed == '85') {
        newimage('glowstone.png');
        console.log("u");
    }
    if (keypressed == '67') {
        newimage('stone_block.jpg');
        console.log("c");
    }   
}
 

function  left() {
    if(playaX > 0 ){
        playaX = playaX - blockimgwidth;
        console.log("block image width="+blockimgwidth);
        console.log("when < pressed,playerX ="+playaX+"y="+playaY);
        canvas.remove(playerobject);
        player_update();
    } 
}
 
function  right() {
    if(playaX < 850){
        playaX = playaX + blockimgwidth;
        console.log("block image width="+blockimgwidth);
        console.log("when > pressed,playerX ="+playaX+"y="+playaY);
        canvas.remove(playerobject);
        player_update();
    } 
}

function up(){
   if(playaY > 0){
       playaY = playaY - blockimgheight;
       console.log("block image height="+ blockimgheight);
       console.log("when ^ pressed, playerX ="+playaX+"y="+playaY);
       canvas.remove(playerobject);
       player_update();
   }
}

function down(){
    if (playaY < 600){
        playaY = playaY + blockimgheight;
        console.log("block image height="+blockimgheight);
        console.log("when v pressed,playerX = "+playaX+"y="+playaY); 
        canvas.remove(playerobject);
        player_update(); 
    } 
}