import { ElementRef } from '@angular/core';
import { Tool } from 'src/app/toolbox/tool.model';

export class DEIItem {
    public type: Tool;
    public x: number;
    public y: number;
    private height: number;
    private width: number;
    public isSelected: boolean;

    protected constructor(type: Tool, x: number, y:number, width: number, height: number){
        this.type = type;

        this.x = x;
        this.y = y;

        this.width = width;
        this.height = height;

        this.isSelected = false;
    }

    public draw(canvas: ElementRef<HTMLCanvasElement>){
        var ctx: CanvasRenderingContext2D;

        ctx = canvas.nativeElement.getContext('2d');

        //ctx.drawImage(this.getImg(), this.x, this.y);
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    }

    drawSelection(canvas: ElementRef<HTMLCanvasElement>) {
        var ctx: CanvasRenderingContext2D;
        var outset: number = 3;
        var selMarksSize: number = 5;

        ctx = canvas.nativeElement.getContext('2d');

        //ctx.drawImage(this.getImg(), this.x, this.y);
        ctx.beginPath();
        ctx.rect(this.x - outset, this.y - outset, this.width + (2*outset), this.height + (2*outset));
        ctx.stroke();
    }

    protected getImg(): CanvasImageSource{
        console.log("getImg from DEIItem invoked, it never should happen!!!");
        return null;
    }

    wasClicked(canMouseX: number, canMouseY: number) {
        if ((canMouseX >= this.x) && (canMouseX <= this.x + this.width) &&
            (canMouseY >= this.y) && (canMouseY <= this.y + this.height)){
                
            return true;
        }else{
            return false;
        }
    }
}