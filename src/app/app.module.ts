import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { CanvasComponent } from './canvas/canvas.component';
import { PropTableComponent } from './prop-table/prop-table.component';
import { PropTriangleComponent } from './prop-table/prop-triangle/prop-triangle/prop-triangle.component';
import { PropSquareComponent } from './prop-table/prop-square/prop-square.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolboxComponent,
    CanvasComponent,
    PropTableComponent,
    PropTriangleComponent,
    PropSquareComponent
  ],
  entryComponents: [PropTriangleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
