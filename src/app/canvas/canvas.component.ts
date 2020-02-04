import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { DesignerService } from '../services/designer-service/designer.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  private designerService: DesignerService;
  
  constructor(designerService: DesignerService) { 
    this.designerService = designerService;
  }

  ngOnInit(): void {
    this.designerService.setCanvas(this.canvas);
  }

  @HostListener('document:mousemove', ['$event']) 
  mouseMoveHandler(e){
    console.log("Mouse move detected");
    this.designerService.mouseMove(e);
  }

}
