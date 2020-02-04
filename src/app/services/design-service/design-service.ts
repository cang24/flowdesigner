import { Injectable } from '@angular/core';
import { BaseService } from '../base-service/base-service';
import { DesignerService } from '../designer-service/designer.service';

@Injectable({
  providedIn: 'root'
})
export class DesignService extends BaseService{

  constructor() { super(); }

  ngOnInit(){
    this.facadeService.setDesignService(this);
  }
}
