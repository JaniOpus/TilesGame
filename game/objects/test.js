    //Mouse events
    let clientX = 0;
    let clientY = 0;
    let selecting = 0; //0 is normal, 1 is selecting, 2 is free selector
    document.addEventListener("mousemove",(e)=>{
        clientX = e.clientX
        clientY = e.clientY
        
        if(Game.selecting == 1){
            Game.selection.endX = Game.mCellX 
            Game.selection.endY = Game.mCellY
        }
        if(Game.selecting == -1){
            Game.selecting = 1
        }
    })
    document.addEventListener("mousedown",(e)=>{
        if(Game.selecting == 0){
            Game.selection.originX = Game.mCellX
            Game.selection.originY = Game.mCellY
            Game.selection.endX = Game.mCellX
            Game.selection.endY = Game.mCellY
            Game.selecting = 1
        }else {
            Game.selecting = Game.selecting == 2?-1:0;
            if(Game.selecting == -1){
                Game.selection.originX = Game.mCellX
                Game.selection.originY = Game.mCellY
                Game.selection.endX = Game.mCellX
                Game.selection.endY = Game.mCellY
            }
        }
    })
    document.addEventListener("mouseup",(e)=>{
        Game.selecting == 1?Game.selecting = 2:0
    });