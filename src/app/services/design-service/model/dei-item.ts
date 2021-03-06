import { ElementRef } from '@angular/core';
import { Tool } from 'src/app/toolbox/tool.model';

export class DEIItem {
    public type: Tool;
    public x: number;
    public y: number;
    private height: number;
    private width: number;
    public isSelected: boolean;
    public isDragging: boolean;

    protected constructor(type: Tool, x: number, y:number, width: number, height: number){
        this.type = type;

        this.x = x;
        this.y = y;

        //this.width = width;
        //this.height = height;
        this.width = this.type.getWidth();
        this.height = this.type.getHeight();

        this.isSelected = false;
        this.isDragging = false;
    }

    public draw(canvas: ElementRef<HTMLCanvasElement>){
        this.drawbase(canvas, this.x, this.y);
        // var ctx: CanvasRenderingContext2D;

        // ctx = canvas.nativeElement.getContext('2d');

        // //ctx.drawImage(this.getImg(), this.x, this.y);
        // ctx.drawImage(this.type.getImg(), this.x, this.y);
        
        // ctx.beginPath();
        // ctx.rect(this.x, this.y, this.width, this.height);
        // ctx.stroke();
    }

    public drawxy(canvas: ElementRef<HTMLCanvasElement>, x:number, y: number){
        this.drawbase(canvas, x, y);
        // var ctx: CanvasRenderingContext2D;

        // ctx = canvas.nativeElement.getContext('2d');

        // ctx.drawImage(this.type.getImg(), this.x, this.y);
        // ctx.beginPath();
        // ctx.rect(x, y, this.width, this.height);
        // ctx.stroke();
    }

    public drawbase(canvas: ElementRef<HTMLCanvasElement>, x:number, y: number){
        var ctx: CanvasRenderingContext2D;

        ctx = canvas.nativeElement.getContext('2d');

        ctx.drawImage(this.type.getImg(), this.x, this.y);
        // ctx.beginPath();
        // ctx.rect(x, y, this.width, this.height);
        // ctx.stroke();
    }

    drawSelection(canvas: ElementRef<HTMLCanvasElement>) {
        this.drawSelectionBase(canvas, this.x, this.y);
    }

    drawSelectionxy(canvas: ElementRef<HTMLCanvasElement>, x:number, y: number) {
        this.drawSelectionBase(canvas, x, y);
    }

    drawSelectionBase(canvas: ElementRef<HTMLCanvasElement>, x:number, y: number){
        var ctx: CanvasRenderingContext2D;
        var outset: number = 2;
        var selMarksSize: number = 5;

        ctx = canvas.nativeElement.getContext('2d');

        //ctx.drawImage(this.getImg(), this.x, this.y);
        ctx.beginPath();
        ctx.rect(x - outset, y - outset, this.width + (2*outset), this.height + (2*outset));
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