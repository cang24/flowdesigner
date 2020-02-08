import { Injectable, ElementRef } from '@angular/core';
import { DesignerService } from '../designer-service/designer.service';
import { BaseService } from '../base-service/base-service';
import { Tool } from 'src/app/toolbox/tool.model';

@Injectable({
  providedIn: 'root'
})
export class CanvasMgrService extends BaseService {
  private canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  private offsetX: number;
  private offsetY: number;
  private isInsertingDEI: boolean;
  private isDraggingDEI: boolean;
  private typeToInsertDEI: Tool;
  
  constructor() { 
    super();
  }

  onNgInit(){
    console.log("[CanvasMgrService]: Running onNgInit");
    this.isInsertingDEI = false;
    this.isDraggingDEI = false;
  }
  
  selectElementToInsert(element: Tool) {
    console.log("[CanvasMgrService] selected element to insert: [" + element.getName() + "]");

    this.isInsertingDEI = true;
    this.typeToInsertDEI = element;
  }

  mouseMove(mouseX: number, mouseY: number){
    var canMouseX = this.getMouseX(mouseX);
    var canMouseY = this.getMouseY(mouseY);
    // console.log("Mouse position: (" + canMouseX + ", " + canMouseY + ")")

    if (this.isInsertingDEI){
      //this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
      this.ctx.beginPath();
      this.ctx.rect(canMouseX, canMouseY, 64, 64);
      this.ctx.stroke();
    }else if (this.isDraggingDEI){

    }
  }

  mouseClick(mouseX: number, mouseY: number) {
    var canMouseX = this.getMouseX(mouseX);
    var canMouseY = this.getMouseY(mouseY);

    if (this.isInsertingDEI){
      this.facadeService.insertDEI(this.typeToInsertDEI, canMouseX, canMouseY);

      this.isInsertingDEI = false;
    }else{
      //Maybe it is trying to select an existing DEI
      this.facadeService.tryToSelectExistingDEI(canMouseX, canMouseY);
    }
  }


  mouseStartDragging(mouseX: number, mouseY: number) {
    var canMouseX = this.getMouseX(mouseX);
    var canMouseY = this.getMouseY(mouseY);

    if (!this.isInsertingDEI){
      this.isDraggingDEI = true;
      this.facadeService.tryToDragExistingDEI(canMouseX, canMouseY);
    }
  }

  mouseStopDragging(mouseX: number, mouseY: number) {
    var canMouseX = this.getMouseX(mouseX);
    var canMouseY = this.getMouseY(mouseY);

    if (this.isDraggingDEI){
      this.isDraggingDEI = false;
      this.facadeService.stopDraggingExistingDEI(canMouseX, canMouseY);
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

    this.offsetX = this.canvas.nativeElement.offsetLeft + 4;
    this.offsetY = this.canvas.nativeElement.offsetTop + 58;
    
  }

  getCanvas(): ElementRef<HTMLCanvasElement> {
    return this.canvas;
  }
}
