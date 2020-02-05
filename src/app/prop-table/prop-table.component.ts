import { Component, OnInit } from '@angular/core';
import { PropTriangleComponent } from './prop-triangle/prop-triangle/prop-triangle.component';

@Component({
  selector: 'app-prop-table',
  templateUrl: './prop-table.component.html',
  styleUrls: ['./prop-table.component.css']
})
export class PropTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getMessage(): string{
    return "Hola";
  }

  getComponent(): any {
    return PropTriangleComponent;
  }

}
