import { Injectable } from '@angular/core';
import { MainService } from './main.service';
import Storage from '../models/storageModel';

@Injectable({
  providedIn: 'root',
})
export class PositionService {
  public service: MainService;

  public async GetPositions(): Promise<Storage[]> {
    return await this.service.HttpGet('/positions');
  }

  constructor() {}
}
