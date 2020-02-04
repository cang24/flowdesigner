import { Injectable } from '@angular/core';
import { DesignerService } from '../designer-service/designer.service';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  protected facadeService: DesignerService;

  public setFacadeService(facadeService: DesignerService){
    this.facadeService = facadeService;
  }
}
