import { Injectable } from '@angular/core';
import { BaseService } from '../base-service/base-service';

@Injectable({
  providedIn: 'root'
})
export class MouseMgrService extends BaseService {
  private togMouseDown: boolean = false;
  private togMouseClick: boolean = false;
  private togMouseDrag: boolean = false;

  constructor() { super() }

  public setMouseDown(value: boolean){
    this.togMouseDown = value;
  }

  public isMouseDown(): boolean{
    return this.togMouseDown;
  }

  public setMouseClick(value: boolean){
    this.togMouseClick = value;
  }

  public isMouseClick(): boolean{
    return this.togMouseClick;
  }

  public setMouseDrag(value:boolean){
    this.togMouseDrag = value;
  }

  public isMouseDrag(): boolean{
    return this.togMouseDrag;
  }
}
