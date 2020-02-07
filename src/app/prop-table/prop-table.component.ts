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
export class PropTableComponent implements OnInit {

  // private designerService: DesignerService;
  subscription: Subscription;

  typeLabel:string = 'Original name';

  // constructor(designerService: DesignerService) {
  //   this.designerService = designerService;
  // }

  constructor(private designerService: DesignerService, private messageService: MessageService) {
    // subscribe to home component messages
    this.subscription = this.messageService.getMessage().subscribe(message => {
      if (message) {
        this.typeLabel = message.text;
      // } else {
      //   // clear messages when empty message received
      //   this.messages = [];
      }
    });
}

  ngOnInit() {
    setTimeout(()=>{this.designerService.addObserver(this.updateTable)}, 1000)
    setTimeout(()=>{this.typeLabel = "asdf"}, 5000)
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
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
