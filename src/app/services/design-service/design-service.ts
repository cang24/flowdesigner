import { Injectable, ElementRef } from '@angular/core';
import { BaseService } from '../base-service/base-service';
import { DEIItem } from './model/dei-item';
import { DEIItemTriangle } from './model/dei-item-triangle';
import { Tool } from 'src/app/toolbox/tool.model';

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
      default:
        console.log("Not yet defined");
    }
  }

  drawDesign(canvas: ElementRef<HTMLCanvasElement>){
    var i: number;
    var idxSelected: number = -1;
    //console.log("Clearing the canvas");
    canvas.nativeElement.getContext('2d').clearRect(0, 0, canvas.nativeElement.width, canvas.nativeElement.height);
    //It should be drawn from the the FIRST to the LAST, to consider the layers
    for(i = 0; i < this.deis.length; i++){
      this.deis[i].draw(canvas);
      if (this.deis[i].isSelected){
        idxSelected = i;
        this.deis[idxSelected].drawSelection(canvas);
      }
    }

    if (idxSelected >= 0){
      this.deis[idxSelected].draw(canvas);
      this.deis[idxSelected].drawSelection(canvas);
    }
  }

  tryToSelectExistingDEI(canMouseX: number, canMouseY: number) {
    var i: number;
    var index: number = -1;
    //It should be validated from the LAST to the FIRST, to consider the layers
    for(i = this.deis.length - 1; i >= 0; i--){
      if (this.deis[i].wasClicked(canMouseX, canMouseY)){
        console.log("Clicked the item: " + i);
        if (this.idxSelectedDEI >= 0 && this.idxSelectedDEI < this.deis.length){
          this.deis[this.idxSelectedDEI].isSelected = false;
        }
        this.idxSelectedDEI = i;
        this.deis[this.idxSelectedDEI].isSelected = true;
        break;
        index = i;
      }else{
        this.deis[i].isSelected = false;
      }
    }
  }
}
