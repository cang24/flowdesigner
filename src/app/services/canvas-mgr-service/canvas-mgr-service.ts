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
  private isInsertingDEI: boolean;
  private typeToInsertDEI: string;
  
  constructor() { 
    super();
  }

  onNgInit(){
    console.log("[CanvasMgrService]: Running onNgInit");
    this.isInsertingDEI = false;
  }
  
  selectElementToInsert(elementName: string) {
    console.log("[CanvasMgrService] selected element to insert: [" + elementName + "]");

    this.isInsertingDEI = true;
    this.typeToInsertDEI = elementName;
  }

  mouseMoveInsertDEI(mouseX: number, mouseY: number){
    var canMouseX = this.getMouseX(mouseX);
    var canMouseY = this.getMouseY(mouseY);
    // console.log("Mouse position: (" + canMouseX + ", " + canMouseY + ")")

    if (this.isInsertingDEI){
      //this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
      this.ctx.beginPath();
      this.ctx.rect(canMouseX, canMouseY, 64, 64);
      this.ctx.stroke();
    }
  }

  mouseClick(mouseX: number, mouseY: number) {
    var canMouseX = this.getMouseX(mouseX);
    var canMouseY = this.getMouseY(mouseY);

    if (this.isInsertingDEI){
      this.facadeService.insertDEI(this.typeToInsertDEI, canMouseX, canMouseY);
    }
  }

  getMouseX(mouseX: number){
    // return mouseX - this.offsetX - 160;
    return mouseX - this.offsetX - 256;
  }

  getMouseY(mouseY: number){
    return mouseY - this.offsetY;
  }

  setCanvas(canvas: ElementRef<HTMLCanvasElement>) {
    this.canvas = canvas;
    this.ctx = this.canvas.nativeElement.getContext('2d');

    this.offsetX = this.canvas.nativeElement.offsetLeft;
    this.offsetY = this.canvas.nativeElement.offsetTop;
    
  }

  getCanvas(): ElementRef<HTMLCanvasElement> {
    return this.canvas;
  }
}
