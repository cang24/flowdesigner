import { Injectable, ElementRef } from '@angular/core';
import { DesignService } from '../design-service/design-service';
import { KeyMgrService } from '../key-mgr-service/key-mgr-service';
import { CanvasMgrService } from '../canvas-mgr-service/canvas-mgr-service';
import { CanvasComponent } from 'src/app/canvas/canvas.component';

@Injectable({
  providedIn: 'root'
})
export class DesignerService {
  constructor(private canvasMgrService: CanvasMgrService,
    private designService: DesignService,
    private keyMgrService: KeyMgrService) { }

  public setDesignService(designService: DesignService){
    console.log("[DesignerService]: Loading reference to DesignService");
    this.designService = designService;
  }
  public setKeyMgrService(keyMgrService: KeyMgrService){
    console.log("[DesignerService]: Loading reference to KeyMgrService");
    this.keyMgrService = keyMgrService;
  }
  public setCanvasMgrService(canvasMgrService: CanvasMgrService){
    console.log("[DesignerService]: Loading reference to CanvasMgrService");
    this.canvasMgrService = canvasMgrService;
  }

  public selectElementToInsert(elementName: string){
    console.log("Selected tool is: [" + elementName + "]");
    this.canvasMgrService.selectElementToInsert(elementName);
  }

  setCanvas(canvas: ElementRef<HTMLCanvasElement>) {
    this.canvasMgrService.setCanvas(canvas);
  }

  mouseMove(e){
    this.canvasMgrService.mouseMoveInsertDEI(e.clientX, e.clientY);
  }
}
