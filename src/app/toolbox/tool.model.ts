import { PropTriangleComponent } from '../prop-table/prop-triangle/prop-triangle/prop-triangle.component';

export class Tool {
    private name: string;
    private imgPath: string;
    private height: number;
    private width: number;
    private img: HTMLImageElement;
    private propComponent: any;

    constructor(name: string, imgPath: string, propComponent: any){
        this.name = name;

        this.propComponent = propComponent;

        this.imgPath = imgPath;

        this.img = new Image();
        this.img.src = this.imgPath;

        this.height = this.img.height;
        this.width = this.img.width;
    }

    getName(): string{ return this.name }
    getImgPath(): string{ return this.imgPath }
    getHeight(): number{ return this.img.height }
    getWidth(): number{ return this.img.width }
    getImg(): HTMLImageElement{ return this.img }
    getPropComponent(): any { this.propComponent }
}