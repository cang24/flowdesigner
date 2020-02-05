import { Injectable } from '@angular/core';
import { BaseService } from '../base-service/base-service';

@Injectable({
  providedIn: 'root'
})
export class KeyMgrService extends BaseService{

  constructor() { super(); }

  keyPress(e: any) {
    console.log("Pressed key: [" + e.key + "]");
    if (e.key == "Delete"){
      this.facadeService.tryToRemoveSelectedDEI();
    }
  }
}
