import { ElementRef } from '@angular/core';

export class DEIItem {
    public type: string;
    public x: number;
    public y: number;

    protected constructor(type: string, x: number, y:number){
        this.type = type;
        this.x = x;
        this.y = y;
    }

    public draw(canvas: ElementRef<HTMLCanvasElement>){
        var ctx: CanvasRenderingContext2D;

        ctx = canvas.nativeElement.getContext('2d');

        //ctx.drawImage(this.getImg(), this.x, this.y);
        ctx.beginPath();
        ctx.rect(this.x, this.y, 64, 64);
        ctx.stroke();
    }

    protected getImg(): CanvasImageSource{
        console.log("getImg from DEIItem invoked, it never should happen!!!");
        return null;
    }
}