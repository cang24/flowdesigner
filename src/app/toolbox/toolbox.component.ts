import { Component, OnInit } from '@angular/core';
import { Tool } from './tool.model';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {
  private toggle: Boolean = true;

  tools: Tool[] = [
    new Tool("triangle", "assets/img/triangle_64.png"),
    new Tool("square", "assets/img/square_64.png"),
    new Tool("pentagon", "assets/img/pentagon_64.png"),
    new Tool("hexagon", "assets/img/hexagon_64.png"),
    new Tool("heptagon", "assets/img/heptagon_64.png"),
    new Tool("octagon", "assets/img/octagon_64.png"),
    new Tool("circle", "assets/img/circle_64.png")
  ];
  constructor() { }

  ngOnInit() {
  }

  clickTool(i: number){
    this.toggle = true;
    setTimeout(()=>{
        if(this.toggle){
          console.log("Click on " + i);
        }
    },250)
  }

  dblClickTool(i: number){
    this.toggle = false;
    console.log("Double Click on " + i);
  }

}
