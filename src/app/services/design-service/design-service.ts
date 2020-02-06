import { Injectable, ElementRef } from '@angular/core';
import { BaseService } from '../base-service/base-service';
import { DEIItem } from './model/dei-item';
import { DEIItemTriangle } from './model/dei-item-triangle';
import { Tool } from 'src/app/toolbox/tool.model';
import { DEIItemSquare } from './model/dei-item-square';

@Injectable({
  providedIn: 'root'
})
export class DesignService extends BaseService{
  private deis: DEIItem[] = [];
  private idxSelectedDEI: number = -1;

  constructor() { super(); }

  insertDEI(typeToInsertDEI: Tool, x: number, y: number) {
    switch(typeToInsertDEI.getName()){
      case "triangle":
        this.deis.push(new DEIItemTriangle(typeToInsertDEI, x, y));
        break;
      case "square":
        this.deis.push(new DEIItemSquare(typeToInsertDEI, x, y));
        break;
      default:
        console.log("Not yet defined");
    }
  }

  drawDesign(canvas: ElementRef<HTMLCanvasElement>, x: number, y:number){
    var i: number;
    var idxSelected: number = -1;
    //console.log("Clearing the canvas");
    canvas.nativeElement.getContext('2d').clearRect(0, 0, canvas.nativeElement.width, canvas.nativeElement.height);
    //It should be drawn from the the FIRST to the LAST, to consider the layers
    for(i = 0; i < this.deis.length; i++){
      if (!this.deis[i].isDragging){
        this.deis[i].draw(canvas);
        if (this.deis[i].isSelected){
          idxSelected = i;
          this.deis[idxSelected].drawSelection(canvas);
        }
      }else{
        this.deis[i].drawxy(canvas, x-270, y-40);
        this.deis[i].drawSelectionxy(canvas, x-270, y-40);
      }
    }

    // if (idxSelected >= 0){
    //   if (!this.deis[idxSelected].isDragging){
    //     this.deis[idxSelected].draw(canvas);
    //     this.deis[idxSelected].drawSelection(canvas);
    //   }
    // }
  }

  tryToSelectExistingDEI(canMouseX: number, canMouseY: number) {
    var idxSelectedDEI = this.getClickedDEI(canMouseX, canMouseY);

    if (idxSelectedDEI!=null){
      //Unselect the selected DEI (if it stills exists, maybe it was deleted)
      if (this.idxSelectedDEI >= 0 && this.idxSelectedDEI < this.deis.length){
        this.deis[this.idxSelectedDEI].isSelected = false;
      }
      
      this.idxSelectedDEI = idxSelectedDEI;
      this.deis[this.idxSelectedDEI].isSelected = true;
    }else{
      if (this.idxSelectedDEI >= 0 && this.idxSelectedDEI < this.deis.length){
        this.deis[this.idxSelectedDEI].isSelected = false;
      }
      this.idxSelectedDEI = -1;
    }
  }

  getSelectedDEI(): DEIItem{
    return this.deis[this.idxSelectedDEI];
  }

  tryToDragExistingDEI(canMouseX: number, canMouseY: number) {
    var idxSelectedDEI = this.getClickedDEI(canMouseX, canMouseY);

    if (idxSelectedDEI!=null){
      if (idxSelectedDEI == this.idxSelectedDEI){
        this.deis[idxSelectedDEI].isDragging = true;
      }
    }
  }

  stopDraggingExistingDEI(canMouseX: number, canMouseY: number) {
    var idxSelectedDEI = this.getDraggedDEI();

    if (idxSelectedDEI!=null){
      this.deis[idxSelectedDEI].isDragging = false;
      this.deis[idxSelectedDEI].x = canMouseX;
      this.deis[idxSelectedDEI].y = canMouseY;
    }
  }

  getDraggedDEI():number {
    var i: number;

    for(i = this.deis.length - 1; i >= 0; i--){
      if (this.deis[i].isDragging){
        return i;
      }
    }
  }

  getClickedDEI(canMouseX: number, canMouseY: number):number {
    var i: number;
    var index: number = -1;

    //It should be validated from the LAST to the FIRST, to consider the layers
    for(i = this.deis.length - 1; i >= 0; i--){
      if (this.deis[i].wasClicked(canMouseX, canMouseY)){
        console.log("Clicked the item: " + i);

        return i;
      }
    }
  }


  tryToRemoveSelectedDEI() {
    if (this.idxSelectedDEI >= 0){
      //There's something selected
      this.deis.splice(this.idxSelectedDEI, 1);
      this.idxSelectedDEI = -1;
    }
  }
}
