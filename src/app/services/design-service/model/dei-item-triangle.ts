import { DEIItem } from './dei-item';

export class DEIItemTriangle extends DEIItem{
    public type: string;
    public x: number;
    public y: number;

    constructor(x: number, y:number){
        super("Triangle", x, y);
    }

    protected getImg(): CanvasImageSource{
        var imageObj = new Image();
        imageObj.src = "/home/augusto/Documents/Posgrado/Materias/IngenieriaDeSoftware/flowdesigner/src/assets/img/square_64.png";

        return imageObj;
    }
}