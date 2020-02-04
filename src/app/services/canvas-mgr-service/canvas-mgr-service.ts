import { Injectable, ElementRef } from '@angular/core';
import { DesignerService } from '../designer-service/designer.service';
import { BaseService } from '../base-service/base-service';

@Injectable({
  providedIn: 'root'
})
export class CanvasMgrService extends BaseService {
  private canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  private offsetX: number;
  private offsetY: number;
  private insertDEI: boolean;
  
  constructor() { 
    super();
  }

  onNgInit(){
    console.log("[CanvasMgrService]: Running onNgInit");
    this.insertDEI = false;
  }
  
  selectElementToInsert(elementName: string) {
    console.log("[CanvasMgrService] selected element to insert: [" + elementName + "]");

    this.insertDEI = true;
  }

  mouseMoveInsertDEI(mouseX: number, mouseY: number){
    var canMouseX = mouseX - this.offsetX - 160;
    var canMouseY = mouseY - this.offsetY;
    console.log("Mouse position: (" + canMouseX + ", " + canMouseY + ")")

    if (this.insertDEI){
      this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
      this.ctx.beginPath();
      this.ctx.rect(canMouseX, canMouseY, 64, 64);
      this.ctx.stroke();
    }
  }

  setCanvas(canvas: ElementRef<HTMLCanvasElement>) {
    this.canvas = canvas;
    this.ctx = this.canvas.nativeElement.getContext('2d');

    this.offsetX = this.canvas.nativeElement.offsetLeft;
    this.offsetY = this.canvas.nativeElement.offsetTop;
    
  }
}
