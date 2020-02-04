import { DEIItem } from './dei-item';
import { Tool } from 'src/app/toolbox/tool.model';

export class DEIItemTriangle extends DEIItem{
    public type: Tool;

    constructor(designElement: Tool, x: number, y:number){
        super(designElement, x, y, 64, 64);
    }

    protected getImg(): CanvasImageSource{
        var imageObj = new Image();
        imageObj.src = "/home/augusto/Documents/Posgrado/Materias/IngenieriaDeSoftware/flowdesigner/src/assets/img/square_64.png";

        return imageObj;
    }
}