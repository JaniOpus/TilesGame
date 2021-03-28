import {draw, clear} from "./draw.js"


function tick(setup,update){
    let Game = setup()


    //Mouse events
    let clientX = 0;
    let clientY = 0;
    let selecting = 0; //0 is normal, 1 is cliking, 2 selecting, 3 is free selector
    document.addEventListener("mousemove",(e)=>{
        if(e.button != 0)return
        clientX = e.clientX
        clientY = e.clientY
        if(Game.selecting == 1){//starting selection
            Game.selecting = 2;
            Game.selection.originX = Game.mCellX
            Game.selection.originY = Game.mCellY
        }
        if(Game.selecting == 2){//selecting
            Game.selection.endX = Game.mCellX+1
            Game.selection.endY = Game.mCellY+1
        }

    })
    document.addEventListener("mousedown",(e)=>{
      if(e.button != 0)return
       Game.selecting = 1
    })
    document.addEventListener("mouseup",(e)=>{
        if(e.button != 0)return;
        if(Game.selecting == 2){//go to free mode if selecting before
            Game.selecting = 3
            if(Game.selection.originX == Game.selection.endX || Game.selection.originY == Game.selection.endY){
                Game.selecting = 0
            }
        }else //it was only a click
            Game.selecting = 0 
    });

    document.addEventListener("click",(e)=>{
        e.preventDefault();
    })
    document.addEventListener("contextmenu",(e)=>{
        e.preventDefault();
    })
    //Loop
    function tickLoop(animationTime){
        //calculating delta time
        let dt = 0;
 
        //Updating mouse cords
        Game.clientX = clientX
        Game.clientY = clientY
        Game.mCellX  = Math.floor(clientX/Game.cellWidth)
        Game.mCellY  = Math.floor(clientY/Game.cellHeight)

        clear(Game)
        draw(Game)
        update(Game,dt)

        setTimeout(()=>requestAnimationFrame(tickLoop),Game.freezer)
    }
    requestAnimationFrame(tickLoop)
}

export default tick;