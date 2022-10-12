import { Injectable } from '@angular/core';
import { MainService } from './main.service';
import Storage from '../models/storageModel';

@Injectable({
  providedIn: 'root',
})
export class ShelvingService {
  public service: MainService;

  public async GetShelvings(): Promise<Storage[]> {
    return await this.service.HttpGet('/shelvings');
  }
  constructor() {}
}
