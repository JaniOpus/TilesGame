import Sceene from "./sceene.js"

class GameGrid{
    constructor(cellWidth,cellHeight,canvas,sceene,camera,cellBorder){
        this.cellWidth = cellWidth
        this.cellHeight = cellHeight
        this.cellBorder = {
            width:cellBorder.width ?? cellBorder.w ?? cellBorder[0],
            color:cellBorder.color ?? cellBorder.c ?? cellBorder[1]
        }
        this.sceene = sceene || new Sceene(cellWidth,cellHeight)
        this.camera = camera
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d")

        this.selection = {}
        this.selecting = false;
        this.mouseStyle = {
            freeSelector:"grey",
            freeSelectorClient:"red",
            selector:"red",
            selectorClient:"red",
            default:"grey",
            clicked:"blue"
        }

        this.freezer = 0 //count down bettwen frames
    }
}

export default GameGrid;