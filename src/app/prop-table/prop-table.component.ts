import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PropTriangleComponent } from './prop-triangle/prop-triangle/prop-triangle.component';
import { DesignerService } from '../services/designer-service/designer.service';
import { DEIItem } from '../services/design-service/model/dei-item';
import { Subscription } from 'rxjs';
import { MessageService } from '../services/message-service/message-service';

@Component({
  selector: 'app-prop-table',
  templateUrl: './prop-table.component.html',
  styleUrls: ['./prop-table.component.css']
})
export class PropTableComponent {

  // private designerService: DesignerService;
  subscription: Subscription;
  propDetailComponent: DEIItem;

  typeLabel:string = '/dev/null';

  constructor(private designerService: DesignerService, private messageService: MessageService) {
    // Subscribe to message service to acquire event for the update of the table
    this.subscription = this.messageService.getMessage().subscribe(message => {
      if (message) {
        this.typeLabel = "Nombre: " + message.type.getName() + "\n" +
            "X: " + message.x + "\n" +
            "Y: " + message.y;
        this.propDetailComponent = message.type.getPropComponent();
      }
    });
  }

  ngOnDestroy() {
    // Unsubscribe
    this.subscription.unsubscribe();
  } 

  updateTable(selectedElement: DEIItem){
    console.log("Receiving notification of the event");
    this.typeLabel = "New name";
    console.log("    nuevo valor: [" + this.typeLabel + "]");
  }

  getMessage(): string{
    return this.typeLabel;
  }

  getComponent(): any {
    return PropTriangleComponent;
  }

}
