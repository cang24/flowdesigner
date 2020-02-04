import { Injectable, ElementRef } from '@angular/core';
import { DesignService } from '../design-service/design-service';
import { KeyMgrService } from '../key-mgr-service/key-mgr-service';
import { CanvasMgrService } from '../canvas-mgr-service/canvas-mgr-service';
import { Tool } from 'src/app/toolbox/tool.model';

@Injectable({
  providedIn: 'root'
})
export class DesignerService {
  constructor(private canvasMgrService: CanvasMgrService,
    private designService: DesignService,
    private keyMgrService: KeyMgrService) { 

      this.canvasMgrService.setFacadeService(this);
      this.designService.setFacadeService(this);
      this.keyMgrService.setFacadeService(this);
    }

  // public setDesignService(designService: DesignService){
  //   console.log("[DesignerService]: Loading reference to DesignService");
  //   this.designService = designService;
  // }
  // public setKeyMgrService(keyMgrService: KeyMgrService){
  //   console.log("[DesignerService]: Loading reference to KeyMgrService");
  //   this.keyMgrService = keyMgrService;
  // }
  // public setCanvasMgrService(canvasMgrService: CanvasMgrService){
  //   console.log("[DesignerService]: Loading reference to CanvasMgrService");
  //   this.canvasMgrService = canvasMgrService;
  // }

  public selectElementToInsert(element: Tool){
    console.log("Selected tool is: [" + element.getName() + "]");
    this.canvasMgrService.selectElementToInsert(element);
  }

  setCanvas(canvas: ElementRef<HTMLCanvasElement>) {
    this.canvasMgrService.setCanvas(canvas);
  }

  mouseMove(e){
    this.designService.drawDesign(this.canvasMgrService.getCanvas());
    this.canvasMgrService.mouseMoveInsertDEI(e.clientX, e.clientY);
  }
  mouseClick(e: any) {
    this.canvasMgrService.mouseClick(e.clientX, e.clientY);
  }

  insertDEI(typeToInsertDEI: Tool, x: number, y: number) {
    this.designService.insertDEI(typeToInsertDEI, x, y);
  }

  tryToSelectExistingDEI(canMouseX: number, canMouseY: number) {
    this.designService.tryToSelectExistingDEI(canMouseX, canMouseY);

    this.designService.drawDesign(this.canvasMgrService.getCanvas());
  }
}
