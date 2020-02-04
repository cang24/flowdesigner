import { Injectable, ElementRef } from '@angular/core';
import { BaseService } from '../base-service/base-service';
import { DEIItem } from './model/dei-item';
import { DEIItemTriangle } from './model/dei-item-triangle';

@Injectable({
  providedIn: 'root'
})
export class DesignService extends BaseService{
  private deis: DEIItem[] = [];

  constructor() { super(); }

  ngOnInit(){
    this.facadeService.setDesignService(this);
  }

  insertDEI(typeToInsertDEI: string, x: number, y: number) {
    switch(typeToInsertDEI){
      case "triangle":
        this.deis.push(new DEIItemTriangle(x, y));
        break;
      default:
        console.log("Not yet defined");
    }
  }

  drawDesign(canvas: ElementRef<HTMLCanvasElement>){
    var i: number;
    //console.log("Clearing the canvas");
    canvas.nativeElement.getContext('2d').clearRect(0, 0, 
        canvas.nativeElement.width, canvas.nativeElement.height);
    for(i = 1; i < this.deis.length; i++){
      this.deis[i].draw(canvas);
    }
  }
}
