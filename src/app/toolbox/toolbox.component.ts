import { Component, OnInit } from '@angular/core';
import { Tool } from './tool.model';
import { DesignerService } from '../services/designer-service/designer.service';
import { PropTriangleComponent } from '../prop-table/prop-triangle/prop-triangle/prop-triangle.component';
import { PropSquareComponent } from '../prop-table/prop-square/prop-square.component';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent {
  private toggleClick: Boolean = true;

  tools: Tool[] = [
    new Tool("triangle", "assets/img/triangle_64.png", PropTriangleComponent),
    new Tool("square", "assets/img/square_64.png", PropSquareComponent),
    new Tool("pentagon", "assets/img/pentagon_64.png", PropTriangleComponent),
    new Tool("hexagon", "assets/img/hexagon_64.png", PropTriangleComponent),
    new Tool("heptagon", "assets/img/heptagon_64.png", PropTriangleComponent),
    new Tool("octagon", "assets/img/octagon_64.png", PropTriangleComponent),
    new Tool("circle", "assets/img/circle_64.png", PropTriangleComponent)
  ];
  private designerService: DesignerService;
  constructor(designerService: DesignerService) {
    this.designerService = designerService;
  }

  clickTool(i: number){
    this.toggleClick = true;
    setTimeout(()=>{
        if(this.toggleClick){
          console.log("Click on " + i);
          this.designerService.selectElementToInsert(this.tools[i]);
        }
    },250);
  }

  dblClickTool(i: number){
    this.toggleClick = false;
    console.log("Double Click on " + i);
  }

}
