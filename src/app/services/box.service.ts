import { Injectable } from '@angular/core';
import { MainService } from './main.service';
import Storage from '../models/storageModel';

@Injectable({
  providedIn: 'root',
})
export class BoxService {
  public service: MainService;

  public async GetBoxes(): Promise<Storage[]> {
    return await this.service.HttpGet('/boxes');
  }

  constructor() {}
}
