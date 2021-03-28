function drawBorders({cellWidth,cellHeight,canvas,ctx,cellBorder}){
    ctx.beginPath()
        ctx.fillStyle = cellBorder.color
        //vertical
        for(let x = 0;x*cellWidth <= canvas.width; x++){
            ctx.fillRect(x*cellWidth+(x==0?0:cellBorder.width),0,cellBorder.width,canvas.height)
        }
        //horizontal
        for(let y = 0;y*cellHeight <= canvas.height; y++){
            ctx.fillRect(0,y*cellHeight+(y==0?0:cellBorder.width),canvas.width,cellBorder.width)
        }
    ctx.closePath();
}
function drawSelector({cellWidth,cellHeight,mCellX,mCellY,ctx,cellBorder,selecting,selection,clientX,clientY,mouseStyle},overlay){
    let originX = mCellX
    let originY = mCellY
    let widthInCells    = 1
    let heightInCells  = 1

    let clientIndX = cellWidth*(selection.endX)
    let clientIndY = cellHeight*(selection.endY)

    ctx.strokeStyle = mouseStyle.default ?? "grey"
    if(selecting >= 2){//changing selector to selecting mode
        originX = selection.originX
        originY = selection.originY
        widthInCells = selection.endX - originX//transform to width
        heightInCells = selection.endY - originY//transform to height
        ctx.strokeStyle = mouseStyle.selector ?? "grey"
        ctx.fillStyle = mouseStyle.selectorClient ?? "grey"

        if(selecting == 3){ //draw free selector
            ctx.strokeStyle = mouseStyle.freeSelector ?? "lightblue"
            ctx.fillStyle = mouseStyle.freeSelectorClient ?? "lightblue"
            clientIndX = clientX
            clientIndY = clientY
        }
    }
    if(selecting == 1)ctx.strokeStyle = mouseStyle.clicked ?? mouseStyle.default ?? "grey" //change selector when clicking
    ctx.strokeRect(originX*cellWidth+cellBorder.width,originY*cellHeight+cellBorder.width,widthInCells*cellWidth,heightInCells*cellHeight)
   
    if(selecting > 1){
        ctx.beginPath();
        ctx.arc(clientIndX, clientIndY, 5, 0, 2 * Math.PI);
        ctx.fill();
    }
}

function draw(game){
    if(game.cellBorder.width != 0)drawBorders(game)
    drawSelector(game, game.cellBorder.width != 0)
}
function clear(game){
    game.ctx.clearRect(0,0,game.canvas.width,game.canvas.height)
}

export {draw,clear}