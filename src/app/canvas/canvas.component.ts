import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { DesignerService } from '../services/designer-service/designer.service';
import { MouseMgrService } from '../services/mouse-mgr-service/mouse-mgr-service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
  private toggleClick: Boolean = false;
  private toggleDown: Boolean = false;
  mouseX: number = 0;
  mouseY: number = 0;

  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  private designerService: DesignerService;
  private mouseMgrService: MouseMgrService;
  
  constructor(designerService: DesignerService, 
      mouseMgrService: MouseMgrService) { 
    this.designerService = designerService;
    this.mouseMgrService = mouseMgrService;
  }

  ngOnInit(): void {
    this.designerService.setCanvas(this.canvas);
  }

  @HostListener('document:mousemove', ['$event']) 
  mouseMoveHandler(e){
    // console.log("Mouse move detected");
    this.designerService.mouseMove(e);
    if (e.clientX>276 && e.clientX < 276 + 915){
      this.mouseX = e.clientX - 276;
    }
    if (e.clientY>117 && e.clientY < 117 + 360){
      this.mouseY = e.clientY - 117;
    }
  }

  @HostListener('document:mousedown', ['$event']) 
  mouseDownHandler(e){
    console.log("Mouse down detected");
    this.mouseMgrService.setMouseDown(true);

    setTimeout((value, e)=>{
      if(this.mouseMgrService.isMouseDown()){
        console.log("Drag operation starting")
        this.mouseMgrService.setMouseDrag(true);
        this.designerService.startDragging(e);
      }
    },250, this.toggleDown, e);
  }

  @HostListener('document:mouseup', ['$event']) 
  mouseUpHandler(e){
    console.log("Mouse up detected");
    this.mouseMgrService.setMouseDown(false);
    if (this.mouseMgrService.isMouseDrag()){
      this.mouseMgrService.setMouseDrag(false);
      console.log("Finished dragging operation");
      this.designerService.stopDragging(e);
    }else{
      this.mouseMgrService.setMouseClick(true);

      setTimeout(()=>{
        if(this.mouseMgrService.isMouseClick()){
          console.log("Mouse click detected");
          this.designerService.mouseClick(e);
        }
      },250);
      //this.designerService.handleMouseUp(e);
    }
  }

  dblClickHandler(e){
    this.mouseMgrService.setMouseClick(false);
    console.log("Double Click detected");
  }

  @HostListener('document:keypress', ['$event']) 
  keyPressHandler(e){
    console.log("Keypress detected");
    this.designerService.keyPress(e);
  }
}
